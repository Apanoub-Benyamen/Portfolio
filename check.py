"""Validate local routes, fragments, images, and essential page metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json
ROOT=Path(__file__).resolve().parent/'dist'
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.refs=[];self.h1=0;self.images=[];self.has_title=False;self.description=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.has_title=True
  if tag=='meta' and a.get('name')=='description':self.description=bool(a.get('content'))
  if tag=='img':self.images.append(a)
  for k in ['href','src']:
   if a.get(k):self.refs.append(a[k])
pages={}
for p in ROOT.rglob('*.html'):
 if p.name.startswith('__'):continue
 page=Page();page.feed(p.read_text());pages[p]=page
errors=[];links=0
for p,page in pages.items():
 if page.h1!=1:errors.append(f'{p.name}: expected one h1')
 if not page.has_title or not page.description:errors.append(f'{p.name}: missing metadata')
 if len(page.ids)!=len(set(page.ids)):errors.append(f'{p.name}: duplicate ids')
 for image in page.images:
  if not image.get('alt'):errors.append(f'{p.name}: image missing alt')
  if not image.get('width') or not image.get('height'):errors.append(f'{p.name}: image missing dimensions')
 for ref in page.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  target=(p.parent/unquote(u.path)).resolve() if u.path else p
  if target.is_dir():target=target/'index.html'
  links+=1
  if not target.exists():errors.append(f'{p.name}: missing {ref}')
  elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:errors.append(f'{p.name}: missing fragment {ref}')
assert not errors,'\n'.join(errors)
assert len(pages)==6,f'Expected 6 pages, got {len(pages)}'
assert (ROOT/'.nojekyll').exists()
assert not list(ROOT.glob('__*')),'Remove internal QA fixtures before delivery'
print(json.dumps({'result':'PASS','pages':len(pages),'local_references_checked':links,'site_bytes':sum(p.stat().st_size for p in ROOT.rglob('*') if p.is_file())}))
