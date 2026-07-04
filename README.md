# Bloom

Bloom is a full-stack e-commerce web application for an online plant shop, built with Node.js, Express, and Sequelize on top of a MySQL database. It handles product browsing, a persistent shopping cart, subscription plans, and customer feedback, with a custom-designed frontend and a small rule-based chatbot for plant care questions.

This was built to practice building a complete web application end to end — not just the UI, but the database schema, the service layer connecting it to the routes, and the logic tying everything together.

## What it does

**Storefront**
Visitors can browse the plant catalog and view individual product pages. Each product record includes not just name, price, and image, but a description, stock quantity, care instructions, and a review count — so product pages can show more than a price tag.

**Cart**
Items are stored server-side in a dedicated cart table rather than only in the browser. Adding a product either creates a new cart row or increments the quantity on an existing one, and there's a full set of operations (add, update quantity, remove, clear) backing the cart page.

**Accounts**
A combined sign-in / sign-up screen with an animated sliding panel, floating labels, and client-side validation. There's also a profile page and a wishlist (currently handled client-side via localStorage) so users can save plants they're interested in without committing to a purchase.

**Subscription plans**
The site supports recurring plant delivery plans, each with a title, description, price, and a list of features — stored as their own database table rather than hardcoded on the page.

**Admin routes**
A separate set of routes for managing plans and store content, kept apart from the customer-facing pages.

**Plant care chatbot**
A small keyword-matching assistant that answers common questions about watering, light, fertilizing, and plant recommendations for beginners. It's not powered by an external AI API — the responses are handled with simple pattern matching, which keeps it fast and dependency-free.

**Feedback**
Users can submit a rating, purchase type, what they liked, what could improve, whether they'd recommend the shop, and optionally their email — stored directly in the database rather than just emailed off.

## Tech stack

- **Backend:** Node.js, Express
- **Database:** MySQL (hosted on Aiven Cloud), accessed through Sequelize ORM over an SSL connection
- **Templating:** EJS
- **Frontend:** Vanilla JavaScript, custom CSS (no framework)
- **Client-side storage:** localStorage for the wishlist

## Project structure

```
bloom-backend/
├── app.js                 Express app setup and route registration
├── models/
│   ├── db.js                Sequelize connection to the MySQL database
│   ├── Product.js           Product schema (name, price, image, care, etc.)
│   ├── productModel.js      Product CRUD helpers (getAll, getById, create, update, delete)
│   ├── CartItem.js          Cart item schema, linked to Product
│   ├── cartModel.js         Cart logic (getCart, add, update, remove, clear)
│   ├── Plan.js              Subscription plan schema
│   └── Feedback.js          Feedback schema
├── routes/                Route handlers for admin, cart, plans, feedback, etc.
├── views/                 EJS templates for every page
├── public/                Static CSS and JS (styling + client-side interactions)
├── package.json
└── package-lock.json
```

## Running it locally

```
npm install
node app.js
```

You'll need a `.env` file with `DB_NAME`, `DB_USER`, `DB_PASS`, `DB_HOST`, and `DB_PORT` for the MySQL connection. Then visit `http://localhost:3000` — the database schema syncs automatically on startup through Sequelize.

## Notes on the build

The cart is fully database-backed, while the wishlist is currently kept in the browser's localStorage — a deliberate split, since the wishlist doesn't need to survive across devices the way a cart arguably should. Moving the wishlist to the database and tying both to real user accounts is the natural next step.

The chatbot is intentionally simple — keyword matching rather than a real language model — since the goal was something responsive and self-contained rather than dependent on an external API key.
