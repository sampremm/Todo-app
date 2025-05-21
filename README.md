📝 Node.js + Express.js + Prisma + PostgreSQL + Docker – Todo App
This is a Dockerized, full-featured Todo application built with:

Node.js + Express.js for the backend server

PostgreSQL for database

Prisma ORM for database interaction

JWT for authentication

Docker + Docker Compose for containerization

✨ Features
✅ User registration & login (JWT-based authentication)

✅ Auth-protected CRUD for todos

✅ Prisma-powered PostgreSQL database

✅ REST Client support for API testing

✅ Docker containerization for easy deployment

📁 Project Structure
graphql
Copy
Edit
backend-todo-app/
│
├── public/                    # Frontend HTML file (basic UI)
│   └── index.html
│
├── prisma/
│   ├── schema.prisma          # Prisma DB schema definition
│   └── migrations/            # Auto-generated migration files
│
├── src/
│   ├── middlewares/
│   │   └── authMiddleware.js  # JWT verification
│   ├── routes/
│   │   ├── authRoutes.js      # Login/Register APIs
│   │   └── todoRoutes.js      # Todo CRUD APIs
│   ├── prismaClient.js        # Prisma client setup
│   └── server.js              # Express server entry point
│
├── Dockerfile                 # Backend Docker instructions
├── docker-compose.yaml        # PostgreSQL + App containers
├── .env                       # Env variables (DB URL, JWT secret)
├── package.json
├── package-lock.json
└── todo-app.rest              # REST Client request file (for VS Code)
⚙️ Getting Started
0. Prerequisites
Install Docker Desktop

Node.js v18+ (if running locally outside Docker)

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/backend-todo-app.git
cd backend-todo-app
2. Generate Prisma Client
bash
Copy
Edit
npx prisma generate
3. Build Docker Containers
bash
Copy
Edit
docker compose build
4. Create & Apply Database Migrations
bash
Copy
Edit
docker compose run app npx prisma migrate dev --name init
To apply production-style migration:

bash
Copy
Edit
docker compose run app npx prisma migrate deploy
5. Start the App + Database Containers
bash
Copy
Edit
docker compose up
# or in background
docker compose up -d
6. Access the App
Open: http://localhost:5003

7. Connect to PostgreSQL (Inside Docker)
bash
Copy
Edit
docker exec -it postgres-db psql -U postgres -d todoapp
8. Shut Down Containers
bash
Copy
Edit
docker compose down
9. Clean Up Containers
bash
Copy
Edit
docker system prune
🔌 Using the REST Client
Install the REST Client extension in VS Code to test APIs.

REST Requests Included in todo-app.rest:
POST /api/register

POST /api/login

GET /api/todos

POST /api/todos

PUT /api/todos/:id

DELETE /api/todos/:id

➡️ Replace {{token}} with the actual JWT token from the login response.

✅ Notes
Make sure your .env file contains the following:

env
Copy
Edit
DATABASE_URL="postgresql://postgres:postgres@postgres-db:5432/todoapp"
JWT_SECRET=your_jwt_secret
PORT=5003
📌 Conclusion
This app is a clean, Dockerized starter for building secure, backend-focused apps using Node.js and PostgreSQL. It supports JWT-based authentication and Prisma for modern DB access.

