'use strict';
(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = $('.menu-toggle'), nav = $('#navigation');
  const closeMenu = () => { nav?.classList.remove('open'); toggle?.setAttribute('aria-expanded','false'); };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  nav?.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
  window.matchMedia('(min-width: 601px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.documentElement.classList.add('motion-ready');
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); }
    }), { threshold: 0.06 });
    $$('.reveal').forEach(el => reveal.observe(el));
  }
  const progress = $('.reading-progress');
  let scheduled = false;
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${total > 0 ? Math.min(100, window.scrollY / total * 100) : 0}%`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, {passive:true});
  window.addEventListener('resize', updateProgress); updateProgress();
  if ('IntersectionObserver' in window) {
    const sections = ['work','about','experience','contact'].map(id=>document.getElementById(id)).filter(Boolean);
    const active = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) $$('#navigation a').forEach(a=>a.classList.toggle('current',a.hash === '#' + entry.target.id));
    }), {rootMargin:'-15% 0px -65% 0px',threshold:0});
    sections.forEach(s=>active.observe(s));
  }

  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed',String(b===button)); });
    let shown = 0;
    $$('.project-card[data-category]').forEach(card => {
      const visible = button.dataset.filter === 'all' || card.dataset.category.split(' ').includes(button.dataset.filter);
      card.hidden = !visible;
      if (visible) { shown++; card.classList.add('revealed'); }
    });
    $('#filter-status').textContent = `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}.`;
    updateProgress();
  }));

  const dialog = $('#dashboard-dialog'); let dialogTrigger;
  let zoom = 100;
  const setZoom = value => {
    if (!dialog) return;
    zoom = Math.max(100, Math.min(250, value));
    $('.dashboard-scroll img', dialog).style.width = `${zoom}%`;
    $('#zoom-status', dialog).textContent = `${zoom}%`;
    $('[data-zoom="out"]', dialog).disabled = zoom === 100;
    $('[data-zoom="in"]', dialog).disabled = zoom === 250;
    if (zoom === 100) { $('.dashboard-scroll', dialog).scrollLeft = 0; }
  };
  $$('[data-zoom]').forEach(button => button.addEventListener('click', () => {
    setZoom(button.dataset.zoom === 'reset' ? 100 : zoom + (button.dataset.zoom === 'in' ? 25 : -25));
  }));
  $$('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
    if (!dialog) return;
    dialogTrigger = button; setZoom(100); dialog.showModal(); document.body.classList.add('modal-open'); $('.dialog-close',dialog).focus();
  }));
  $('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target===dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
  dialog?.addEventListener('close', () => { document.body.classList.remove('modal-open'); dialogTrigger?.focus(); });

  const picker = $('.project-picker');
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && picker?.open) { picker.open = false; $('summary', picker).focus(); }
  });
  document.addEventListener('click', e => { if (picker?.open && !picker.contains(e.target)) picker.open = false; });

  const copy = $('.copy-email');
  const copyMarkup = copy?.innerHTML;
  copy?.addEventListener('click', async () => {
    let copied = false;
    try { if(navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(copy.dataset.email); copied = true; } } catch (_) { /* Fall back to local selection. */ }
    if (!copied) {
      const text=document.createElement('textarea');text.value=copy.dataset.email;text.setAttribute('readonly','');text.style.cssText='position:fixed;top:0;left:-9999px';document.body.append(text);text.select();
      try { copied=document.execCommand('copy'); } catch (_) { copied=false; }
      text.remove();copy.focus();
    }
    $('#copy-status').textContent = copied ? 'Email address copied to clipboard.' : `Copy this email address: ${copy.dataset.email}`;
    copy.textContent = copied ? 'Email copied' : 'Copy manually below';
    setTimeout(() => { copy.innerHTML=copyMarkup; },3000);
  });

  const explanations = {
    aml: {
      accuracy:['The majority-class trap','With a positive rate of 0.104%, an all-negative classifier would be about 99.896% accurate and detect zero positive cases. This is a class-distribution calculation, not a reported model result.'],
      precision:['How many alerts are useful?','Precision measures how many predicted positive cases are actually positive. For investigators, low precision can mean spending time reviewing many false alerts.'],
      recall:['How much risk did we find?','Recall measures how many actual positive cases were detected. Raising recall can help reduce missed risks, but may increase the volume of false alerts.'],
      prauc:['Look across thresholds','PR-AUC summarizes the precision–recall relationship across decision thresholds. It is useful for rare-event evaluation, but it cannot rescue a model from data leakage.']
    },
    rag: {
      index:['Organize the knowledge','Enterprise documents are prepared and indexed so their content can be retrieved. This is the foundation for connecting a user’s question to source material.'],
      retrieve:['Find the relevant passages','Semantic retrieval identifies candidate passages related to the question. The aim is to bring relevant organizational knowledge into the answer’s context.'],
      rerank:['Prioritize the strongest context','Reranking reorders candidate passages by relevance before generation. It is a separate stage from the first retrieval pass.'],
      generate:['Answer locally, with context','A local language model uses the retrieved material to generate an answer. Users can inspect the source context; the architecture does not make every answer automatically correct.']
    },
    nlp: {
      vader:['Start with a sentiment lexicon','VADER scores the written review directly using a sentiment lexicon and rules. Star ratings are a comparison signal, not the input to VADER.'],
      tfidf:['Turn text into useful features','TF-IDF represents review text numerically for traditional classification models. In this notebook, the supervised targets were derived from ratings, which may not always match the wording.'],
      lstm:['Explore word sequences','LSTM and bidirectional LSTM experiments model review text as sequences. More complex models still need leakage-safe evaluation and reproducible comparisons.']
    },
    mesh: {
      images:['236 disaster-related images','Generative model combinations were evaluated for reconstruction quality, including semantic fidelity, structural similarity, and hallucination trade-offs.'],
      relay:['A controlled real-device test','The research includes a controlled transmission test for relay payloads. This is narrower evidence than a large-scale emergency deployment.'],
      simulation:['250 simulated mesh nodes','The mesh simulation explores network behavior under varying packet-loss conditions. Outdoor mobility, energy consumption, and operating-system integration remain areas for further study.']
    }
  };
  $$('[data-explorer]').forEach(explorer => {
    $$('[data-view]', explorer).forEach(button => button.addEventListener('click', () => {
      $$('[data-view]',explorer).forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
      const key=button.dataset.view, type=explorer.dataset.explorer;
      if(type==='customer') {
        const purchase=key==='purchase', values=purchase?['$59.49','$59.87']:['27%','73%'], widths=purchase?[59.49/60*100,59.87/60*100]:[27,73];
        $$('[data-bar]',explorer).forEach((b,i)=>b.style.width=`${widths[i]}%`);
        $$('[data-value]',explorer).forEach((b,i)=>b.textContent=values[i]);
        $('[data-explanation]',explorer).textContent=purchase?'Average purchase amounts are very similar: $59.49 for subscribers and $59.87 for non-subscribers. The data does not show that subscribing causes higher spending. Both bars use a $0–$60 scale.':'73% of records are non-subscribed. This points to a question worth testing: what would make subscription more valuable?';
      } else {
        const content=explanations[type]?.[key]; if(!content)return;
        $('[data-panel-title]',explorer).textContent=content[0];$('[data-panel-text]',explorer).textContent=content[1];
      }
    }));
  });
})();
