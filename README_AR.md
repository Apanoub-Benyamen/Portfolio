# Portfolio — دليل التشغيل والنشر

الموقع مكتمل بالإنجليزية، ويتضمن صفحة رئيسية وخمس دراسات حالة. التصميم مبني على HTML وCSS وJavaScript خفيف، دون اشتراكات أو API أو مكتبات واجهة خارجية.

## محتويات الحزمة

- `dist/`: الموقع النهائي الجاهز للنشر. هذا هو المجلد المهم للتشغيل.
- `build.py`: المحتوى وقوالب الصفحات، إذا أردت تعديلها مركزيًا.
- `check.py`: فحص الصفحات والروابط والملفات المحلية.
- `.github/workflows/deploy-pages.yml`: نشر تلقائي اختياري.
- `CONTENT_NOTES.md`: مصادر المعلومات وحدود النتائج.
- `QA_REPORT.md`: ما تم اختباره وحدود الاختبار.
- `previews/`: لقطة من معاينة قسم المشاريع.

## التشغيل على جهازك

فك ضغط الملف، ثم افتح `dist/index.html` في Chrome أو Edge. لا تحتاج npm أو Python لتصفح النسخة النهائية.

ولتشغيل خادم محلي اختياريًا، افتح Terminal داخل مجلد الحزمة:

```bash
python -m http.server 8000 --directory dist
```

ثم افتح `http://localhost:8000`.

## أسهل طريقة للنشر على GitHub Pages

1. أنشئ Repository باسم `portfolio` على حسابك. اختر Public إذا كنت تستخدم GitHub Free.
2. اختر Add file ثم Upload files.
3. ارفع **محتويات مجلد dist نفسها**: `index.html` ومجلدي `assets` و`projects` وملف `.nojekyll`. لا ترفع ZIP ولا مجلد dist كطبقة إضافية.
4. اعمل Commit إلى `main`.
5. افتح Settings ثم Pages. ضمن Build and deployment اختر Deploy from a branch، ثم `main` و`/(root)`، واضغط Save.
6. افتح الرابط الذي يعرضه GitHub عبر Visit site بعد اكتمال النشر.

الرابط المتوقع عند اختيار اسم `portfolio` هو `https://apanoub-benyamen.github.io/portfolio/`. هذا مثال للرابط المتوقع وليس ادعاءً بأن النشر تم بالفعل.

## بديل: النشر التلقائي

ارفع الحزمة كاملة إلى جذر المستودع مع `dist` و`check.py` و`.github`. في Settings → Pages اختر GitHub Actions. الـworkflow المرفق ينشر `dist` عند الدفع إلى `main`. لا تخلط هذه الطريقة مع رفع محتويات dist فقط.

## التعديل لاحقًا

- المحتوى: عدّل `build.py`، ثم شغّل `python build.py` و`python check.py`.
- الألوان والمسافات والمقاسات: `dist/assets/style.css`.
- التفاعلات: `dist/assets/app.js`.
- الصورة: `dist/assets/portrait-enhanced.webp`.
- وسائل التواصل: المتغيرات `GITHUB` و`LINKEDIN` و`EMAIL` و`WHATSAPP` في بداية `build.py`، ثم أعد توليد الصفحات.
- يمكنك تعديل HTML مباشرة إذا كنت تستخدم طريقة النشر البسيطة؛ لا تشغّل `build.py` بعدها إلا بعد نقل تعديلاتك إليه حتى لا يستبدلها.

واتساب مربوط برقم الـCV المرفق: `+20 120 443 0621`. البريد: `pepobenyamen@gmail.com`. يمكن تغييرهما من المتغيرات السابقة.

الداشبورد المعروضة هي صورة تقرير Power BI الأصلي الخاص بك، ويمكن تكبيرها لفحص التفاصيل. تم حذف النسخة البديلة. لتفعيل نفس التقرير داخل مكانه في الصفحة، يلزم رابط التضمين الخاص بالتقرير من Power BI Service؛ الصورة وحدها لا تدعم فلاتر التقرير.

بعد النشر، يمكن إضافة هذا السطر إلى الـCV وLinkedIn مع الرابط النهائي:

`Portfolio | Business Analytics, Power BI & Applied AI — [your published URL]`

تعليمات GitHub روجعت بالرجوع إلى [إنشاء موقع Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) و[النشر باستخدام Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## تحسينات النسخة المحدثة

وسائل التواصل متاحة من أول شاشة. داخل كل دراسة حالة توجد قائمة للتنقل المباشر بين المشاريع الخمسة. نافذة الداشبورد تدعم التكبير حتى 250% ثم التمرير لفحص التفاصيل، مع زر لإعادة المقاس. تم تحسين حجم النصوص والأزرار على الموبايل، ويظل المحتوى والتنقل الأساسي متاحين بدون JavaScript.

## آخر تعديل

تم الاحتفاظ بتقريرك الأصلي وحذف الداشبورد البديلة. يمكن تضمين التقرير نفسه مستقبلًا عند توفير رابط Publish to web، إذا كان متاحًا في حساب Power BI ومسموحًا نشر بياناته للعامة.

عناصر RAG موزعة على مدارين بيضاويين، كل زوج متقابل داخل مداره، بسرعة دورة كل 12 ثانية. الحركة تتوقف عند مرور الماوس أو التركيز بلوحة المفاتيح. عند المرور على رسم AML يظهر مسح ضوئي ونبض حول الإشارة، وعند المرور على الشبكة تظهر موجات اتصال ويتسارع انتقال الرسالة. إعداد تقليل الحركة في الجهاز يعطّل التأثيرات الحركية.

الصورة المحسّنة موجودة في `dist/assets/portrait-enhanced.webp` والأصل محفوظ في `data/portrait-original.jpg`.
