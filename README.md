# واجهة متجر المنتجات

واجهة مستخدم عصرية لعرض المنتجات وتصفيتها بالتعاون مع بوت الدردشة.

![صورة الواجهة](https://via.placeholder.com/800x400?text=واجهة+متجر+المنتجات)

## المميزات

- ✨ **تصميم عصري** - واجهة جذابة وسهلة الاستخدام
- 📱 **تجاوب كامل** - يعمل على جميع أحجام الشاشات
- 🔍 **تصفية المنتجات** - حسب التصنيف والماركة
- 🌐 **دعم اللغة العربية** - واجهة كاملة باللغة العربية
- 🤖 **اتصال بالبوت** - تصفية تلقائية عبر بوت الدردشة
- 📊 **مؤشر حالة الاتصال** - معرفة حالة الاتصال بالسيرفر

## طريقة الاستخدام

1. يتصل الموقع تلقائيًا بسيرفر API لجلب الفلاتر المحددة
2. يتم تحديث المنتجات المعروضة بناءً على الفلاتر
3. يمكن للمستخدم التحدث مع بوت الدردشة لاختيار فلتر معين

## التثبيت والتشغيل

### 1. تحميل الملفات
```bash
git clone https://github.com/rxd-blue/my-store-frontend.git
```

### 2. فتح الموقع
افتح ملف `index.html` في متصفحك المفضل.

### 3. ربط السيرفر
عدّل الرابط في ملف `index.html` ليشير إلى سيرفر Glitch الخاص بك:

```javascript
const res = await fetch('https://piquant-elderly-staircase.glitch.me/api/filter');
```

## الاتصال بالسيرفر

لاختبار الموقع مع السيرفر، يمكنك إرسال طلب باستخدام:

```bash
curl -X POST https://piquant-elderly-staircase.glitch.me/api/filter \
  -H "Content-Type: application/json" \
  -d '{"category": "تليفونات", "brand": "سامسونج"}'
```

## التقنيات المستخدمة

- HTML5
- CSS3 (متغيرات CSS، Flexbox، Grid)
- JavaScript (Vanilla JS)
- خط Tajawal العربي
- واجهة برمجة تطبيقات RESTful 