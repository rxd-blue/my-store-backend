# متجر المنتجات

موقع وسيرفر لعرض وتصفية المنتجات بواسطة بوت الدردشة.

## المكونات

1. **الموقع (Frontend)**: صفحة HTML لعرض المنتجات
2. **السيرفر (Backend)**: API لتخزين فلاتر المنتجات
3. **البوت (مستقبلاً)**: بوت Dialogflow للتصفية

## خطوات النشر

### 1. نشر السيرفر على Render.com:

1. سجل على [Render.com](https://render.com)
2. اختر "New Web Service"
3. اربط مع GitHub أو ارفع الكود مباشرة
4. اضبط الإعدادات:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

### 2. نشر الموقع على GitHub Pages:

1. قم بإنشاء ريبو على GitHub
2. ارفع ملف index.html
3. من Settings > Pages، فعّل GitHub Pages من البرانش الرئيسي

### 3. تحديث رابط السيرفر:

بعد نشر السيرفر، تأكد من تحديث رابط الـ API في ملف index.html 