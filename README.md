# Card Vending Machine

This repository contains a basic frontend built with React and TailwindCSS.

## Development

1. Navigate to the `frontend` folder and install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The SPA expects a backend with the following endpoints:
- `POST /api/login`
- `POST /api/register`
- `GET /api/cards`
- `POST /api/cards`

Adjust the base URL in the fetch calls if your backend is hosted elsewhere.
