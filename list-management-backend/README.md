# Rooming System Backend (TypeScript, Express, Sequelize, PostgreSQL)

# Setup

1. Install dependencies:

   npm install

2. Configure your database connection in the .env variables or edit `src/db.ts`:
   `DB_NAME`
   `DB_USER`
   `DB_PASS`
   `DB_HOST`

3. Build and run the server:
   npm run dev
   or
   npm run start

## API

- `POST /api/init-data`  
  Clears tables and loads seed data from `src/seed/`

- `GET /api/rooming-lists`  
  Lists all rooming lists

- `GET /api/rooming-lists/:id/bookings`  
  Lists bookings for a given rooming list

## Sequelize Models

- `src/models/` for table definitions and relationships
