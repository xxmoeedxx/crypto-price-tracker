# Project Setup Guide

##  Project Structure
```
/project-root
 ├── /docs          # Docusaurus documentation
 ├── /web-app       # Frontend or full-stack web application
 ├── README.md      # Project overview and setup instructions
```

## Prerequisites
Before starting, ensure you have the following installed:

- **Node.js** (LTS version recommended) → [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** (optional, for version control) → [Download here](https://git-scm.com/)

## Setting Up the Project

### 1. Clone the Repository (if applicable)
If your project is in a Git repository, clone it using:
```sh
git clone https://github.com/xxmoeedxx/crypto-price-tracker.git
cd crypto-price-tracker
```

### 2. Install Dependencies
Navigate to the **web-app** folder and install dependencies:
```sh
cd web-app
npm install   # or yarn install
```
If you’re also working on **Docusaurus documentation**, install dependencies inside `/docs`:
```sh
cd ../docs
npm install   # or yarn install
```

### 3. Run the Web App
Start the development server:
```sh
cd ../web-app
npm run dev   # or yarn dev
```
This will run the app, typically at `http://localhost:3000`.

### 4. Run the Documentation Site
If you're using **Docusaurus**, start the documentation site:
```sh
cd ../docs
npm run start   # or yarn start
```
By default, the documentation will be available at `http://localhost:3000`.

