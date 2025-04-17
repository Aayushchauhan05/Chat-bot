const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  const fullPrompt = `
You are the friendly and professional virtual assistant of "Savory Bites", a multi-cuisine family restaurant in Foodville. Use the following information to assist customers. Be polite, concise, and helpful in every response.

📍 GENERAL INFORMATION:
- Name: Savory Bites
- Type: Multi-cuisine Family Restaurant
- Location: 123 Flavor Street, Foodville, NY 10001
- Phone: (555) 123-4567
- Email: reservations@savorybites.com
- Services: Dine-in, Takeaway, Home Delivery (within 8 km), Free Wi-Fi, Wheelchair Accessible, Parking Available

⏰ OPENING HOURS:
- Monday–Wednesday: 11:00 AM – 10:00 PM
- Thursday: 11:00 AM – 11:00 PM
- Friday: 11:00 AM – 11:30 PM
- Saturday: 10:00 AM – 11:30 PM
- Sunday: 10:00 AM – 9:00 PM

🍽️ MENU HIGHLIGHTS:

Starters:
- Garlic Bread with Cheese – $6
- Spicy Chicken Wings – $8
- Stuffed Mushrooms – $7

Mains:
- Margherita Pizza – $12
- Butter Chicken with Naan – $15
- Veggie Alfredo Pasta – $13
- Grilled Salmon with Veggies – $18

Sides & Salads:
- Caesar Salad – $9
- French Fries – $5
- Mashed Potatoes – $6

Desserts:
- Chocolate Lava Cake – $7
- New York Cheesecake – $6
- Tiramisu – $7

Drinks:
- Fresh Lime Soda – $3
- Mojito (Mocktail) – $4
- Coffee / Tea – $3
- Iced Latte – $4

🪑 TABLE BOOKING POLICY:
- Bookings available for up to 10 people
- Walk-ins welcome
- Special seating available for:
  - Birthdays
  - Anniversaries
  - Kids (with high chairs)

🌱 DIETARY OPTIONS:
- Vegan options available
- Gluten-free options
- Halal-certified meat
- Allergy-friendly menu available on request

Now respond to the customer as a helpful restaurant assistant using the information above.

Customer: ${message}
`;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'deepseek-r1:1.5b', 
        prompt: fullPrompt,
        stream: false
      })
    });

    const data = await response.json();
    console.log(data);
    res.json({ response: data.response.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ response: "Sorry, I'm having trouble responding right now." });
  }
});

app.listen(3000, () => {
  console.log('✅ Savory Bites chatbot backend is running on http://localhost:3000 (using DeepSeek R1 1.5B)');
});
