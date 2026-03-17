# Password Generator

A simple and responsive password generator built with **Vite** and **React**.  
This project allows users to generate secure passwords based on selected options such as password length, uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Generate random passwords
- Choose password length
- Include uppercase letters
- Include lowercase letters
- Include numbers
- Include symbols
- Copy generated password to clipboard
- Clean and responsive user interface

## Technologies Used

- **Vite**
- **React**
- **JavaScript**
- **CSS**

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/password-generator.git
2. Navigate to the project folder
cd password-generator
3. Install dependencies
npm install
4. Start the development server
npm run dev
Project Structure
password-generator/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── package.json
│── vite.config.js
│── README.md
How It Works

The user selects the desired password options, including:

password length

character types

After clicking the Generate Password button, the app creates a random password based on the selected settings.
The generated password can also be copied instantly using the Copy button.

Future Improvements

Add password strength meter

Add show/hide password option

Ensure at least one character from each selected option

Save user preferences with localStorage

Improve UI with Tailwind CSS
