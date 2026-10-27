# Job-Analyzer

Job-Analyzer is a full-stack interview preparation application that uses a candidate's resume or self-description and a target job description to create a personalized interview plan.

## Demo

[![Watch the Job-Analyzer demo](https://img.youtube.com/vi/Xcdz3gCPBbg/hqdefault.jpg)](https://youtu.be/Xcdz3gCPBbg)

## Features

- Create an interview plan from a PDF resume or a written self-description and a target job description.
- Generate a job-match score, technical and behavioral interview questions with answer guidance, skill gaps, and a day-by-day preparation plan with Google Gemini.
- Register and sign in to save and revisit interview plans.
- Generate and download a job-tailored resume as a PDF.

## Technology

- **Frontend:** React, Vite, React Router, Axios, and Sass
- **Backend:** Node.js and Express
- **Database:** MongoDB with Mongoose
- **AI:** Google Gemini API
- **Document processing:** `pdf-parse` for extracting text from uploaded resumes and Puppeteer for generating PDF files
- **Authentication:** JSON Web Tokens and `bcryptjs` password hashing

## Run Locally

### Prerequisites

- Node.js and npm
- A MongoDB connection string
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/chy-aryan/Job-Analyzer.git
cd Job-Analyzer
```

### 2. Configure the backend

Create a `Backend/.env` file with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
```

Do not commit this file. Environment files are excluded by `.gitignore`.

Install the backend dependencies and start the API:

```bash
cd Backend
npm install
npm run dev
```

The API starts on `http://localhost:3000`.

### 3. Start the frontend

In a second terminal, from the repository root:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.