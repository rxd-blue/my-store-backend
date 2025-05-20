const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Store filter data
let filter = {};

// Log middleware to see all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'POST') {
    console.log('Request body:', req.body);
  }
  next();
});

// POST endpoint to update filter
app.post('/api/filter', (req, res) => {
  filter = req.body;
  console.log('تم تحديث الفلتر:', filter);
  res.status(200).json({ success: true, message: 'تم تحديث الفلتر بنجاح', filter });
});

// GET endpoint to retrieve filter
app.get('/api/filter', (req, res) => {
  console.log('إرسال الفلتر الحالي:', filter);
  res.json(filter);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`السيرفر شغال على البورت ${PORT}`);
  console.log(`حالة الفلتر الأولية:`, filter);
}); 