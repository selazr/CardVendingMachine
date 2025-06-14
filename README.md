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

The frontend communicates with the backend using the URL specified in
`frontend/.env` (`VITE_API_URL`). By default it points to the backend running on
`http://localhost:3000`.

The backend uses CORS and expects the frontend to run on `http://localhost:5173`
by default. If your frontend runs on a different origin, set the
`CORS_ORIGIN` variable in the backend `.env` file accordingly.

The SPA expects a backend with the following endpoints:
- `POST /api/login`
- `POST /api/register`
- `GET /api/cards`
- `POST /api/cards`

Adjust the base URL in the fetch calls if your backend is hosted elsewhere.
