🌿 Bloom — Your Plant Shop, Reimagined

Bloom is a full-stack plant shop web application built from the ground up — a place where people can browse beautiful indoor plants, get personalized plant-care advice from a built-in AI-style chatbot, save favorites to a wishlist, subscribe to monthly plant plans, and shop with a smooth, modern shopping experience.

This project was designed and developed independently, covering everything from the database models to the animated login screen to the conversational chatbot logic.

---

✨ What Bloom Can Do

🛍️ Shop Experience
- Browse a full catalog of plants pulled dynamically from the database
- View detailed product pages for each plant
- Add items to a persistent shopping cart with live badge updates
- Save favorite plants to a wishlist with a satisfying heart/checkbox toggle

🔐 Accounts & Access
- Sleek animated sign-in / sign-up screen with a sliding panel transition
- Floating label inputs, password visibility toggle, and real-time field validation
- User profile page

💳 Subscription Plans
- Dedicated plans section so customers can subscribe to recurring plant deliveries (Basic, Standard, Premium tiers)

🧑‍💼 Admin Panel
- Separate admin routes for managing plans and store content behind the scenes

💬 Bloom Assistant — Built-in Plant Care Chatbot
One of the standout features: a custom, keyword-driven chatbot that feels alive. Ask it about:
- 💧 Watering schedules
- ☀️ Light requirements
- 🌱 Fertilizing tips
- 🍂 Why leaves turn yellow
- 🌿 Best plants for beginners or low light
- 📦 Delivery & 💰 pricing questions

It responds instantly with friendly, emoji-rich, genuinely useful answers — no generic fallback loops, just real plant knowledge on demand.

📝 Feedback & Contact
- A feedback system so users can share their experience
- A contact page for reaching the team directly

---

🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Templating | EJS |
| Database ORM | Sequelize |
| Frontend | HTML5, CSS3 (custom design system), Vanilla JavaScript |
| Icons | Font Awesome |
| Data Persistence (client-side) | localStorage (cart & wishlist) |

The frontend uses a custom CSS design system built around a calming "leaf & ivory" color palette, CSS variables for easy theming, smooth transitions, and a fully responsive layout that adapts down to mobile.

---

📁 Project Structure

```
bloom/
├── app.js                  # Express app entry point & routing
├── models/
│   ├── db.js                # Sequelize database connection
│   └── Product.js           # Product model
├── routes/
│   ├── admin.js              # Admin panel routes
│   ├── plans.js               # Subscription plans routes
│   ├── cart.js                 # Cart logic
│   ├── productCart.js       # Product-cart integration
│   └── feedback.js          # Feedback submission
├── views/                   # EJS templates
│   ├── index.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   ├── wishlist.ejs
│   ├── details.ejs
│   ├── feedback.ejs
│   └── shop/
│       ├── index.ejs
│       └── product.ejs
├── public/
│   ├── styles.css               # Auth pages styling
│   ├── bloom-style.css       # Main site styling
│   └── bloom-interactions.js  # Cart, wishlist & chatbot logic
└── .env                       # Environment variables (not committed)
```

---

🚀 Getting Started

1. Clone the project and install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file with your database credentials.
3. Run the app:
   ```
   node app.js
   ```
4. Open your browser at:
   ```
   http://localhost:3000
   ```

The app will automatically sync your database models on startup using Sequelize.

---

🌱 Why I Built This

Bloom started as a way to combine everything I'd learned about full-stack development — routing, databases, dynamic templating, and interactive front-end design — into one cohesive product. Beyond just listing products, I wanted the experience to feel warm and helpful, which is why the chatbot and the wishlist/cart interactions were priorities from day one, not afterthoughts.

This is my first full web application built end-to-end, and it's been a genuinely rewarding project to design, break, debug, and rebuild.

---

🔮 Future Improvements

- Real backend-persisted cart/wishlist (currently localStorage-based)
- Payment gateway integration for real checkout
- Smarter AI chatbot powered by a real language model
- User order history and tracking

---

Made with 🌿 and a lot of trial and error.
