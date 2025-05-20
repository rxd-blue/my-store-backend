# متجر المنتجات

موقع وسيرفر لعرض وتصفية المنتجات بواسطة بوت الدردشة.

## المكونات

1. **الموقع (Frontend)**: صفحة HTML لعرض المنتجات (GitHub Pages)
2. **السيرفر (Backend)**: API لتخزين فلاتر المنتجات (Glitch)
3. **البوت (مستقبلاً)**: بوت Dialogflow للتصفية

## خطوات النشر

### 1. نشر السيرفر على Glitch:

1. سجل على [Glitch.com](https://glitch.com)
2. اختر "New Project" > "Import from GitHub" أو "Create a new project"
3. ارفع ملفات `server.js` و `package.json`
4. سيقوم Glitch تلقائيًا بتثبيت المكتبات وتشغيل السيرفر
5. لاحظ رابط المشروع: `https://your-project-name.glitch.me`

### 2. نشر الموقع على GitHub Pages:

1. قم بإنشاء ريبو على GitHub
2. ارفع ملف index.html
3. من Settings > Pages، فعّل GitHub Pages من البرانش الرئيسي

### 3. تحديث رابط السيرفر:

تأكد من تحديث رابط الـ API في ملف index.html ليشير إلى رابط مشروع Glitch الخاص بك

### 4. اختبار النظام

يمكنك اختبار API السيرفر بإرسال طلب POST:
```
curl -X POST https://your-project-name.glitch.me/api/filter \
  -H "Content-Type: application/json" \
  -d '{"category": "تليفونات", "brand": "سامسونج"}'
``` 