# List-management-events
This is a repository for a Crewfare application, creating a list page to manage events.

# Rooming List Management - Full Stack App

## Prerequisites
- Node.js (v16+ recommended)
- npm
- PostgreSQL (with a created database and credentials configured)

## 1. Clone the repository

```bash
git clone <repo-url>
cd List-management-events
```

## 2. Configure environment variables

### Backend
1. Go to the `list-management-backend` folder.
2. Create a `.env` file with the following content (adjust as needed):

```
DB_NAME=rooming_db
DB_USER=postgres
DB_PASS=postgres
DB_HOST=localhost
PORT=4000
```

### Frontend
1. Go to the `list-management-frontend` folder.
2. Create a `.env` file with:
```
REACT_APP_API_URL=http://localhost:4000/api
```

## 3. Install dependencies

### Backend
```bash
cd list-management-backend
npm install
```

### Frontend
```bash
cd ../list-management-frontend
npm install
```

## 4. Initialize the database

Make sure your PostgreSQL database is running and accessible.

- If this is your first time, you can use the seed from the frontend ("Insert Bookings and Rooming Lists" button) or from the backend:

```bash
cd list-management-backend
npm run dev
```

## 5. Run the application

### Backend
```bash
cd list-management-backend
npm run dev
```

### Frontend
In another terminal:
```bash
cd list-management-frontend
npm start
```

## 6. Access the app

Open your browser at [http://localhost:3000](http://localhost:3000)

---

### Notes
- The backend runs on port 4000 by default.
- The frontend runs on port 3000 by default.
- You can change the ports in the `.env` files.
- If you change the database structure, make sure to sync the models or apply migrations.
