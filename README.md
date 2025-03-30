# Red Bus

## Overview

Red Bus is a web application built using **HTML, CSS, JavaScript, Bootstrap 5, TypeScript, and Angular**. The application allows users to browse available travels, filter them based on criteria, book buses, and manage seat reservations.

**Idea Credit:** This project idea is inspired by the **LEARNING PARTNER** channel on YouTube, but the design and code have been implemented in my own way.

## Features

### General Features

- **Header & Footer**: Available on all pages.
- **Hero Section**: Present on all pages for a consistent UI experience.

### Pages

#### Home Page

- **Our Travels**: Displays all available travel options as cards containing:
  - City name
  - Cost
  - Description
  - Start date
  - End date
  - Booking button
- **Contact Us**: A section for user inquiries and support.

#### Search Page

- Displays all available travels like the Home Page.
- Includes filtering capabilities based on:
  - Travel name
  - Maximum cost
  - Start date
  - End date

#### Booking Page

- Displays all available buses along with their destination cities.
- Each bus entry includes:
  - City name
  - Number of reserved seats
  - Total capacity of the bus

#### Bus Page

- Displays detailed information about a specific bus.
- Shows available and reserved seats.
- Users can:
  - **Book a seat**.
  - **Free a reserved seat**.

## How to Use

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/EN-BAAK/Red-bus
   ```
2. **Navigate to the project directory**:
   ```sh
   cd ./project
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Build the project**:
   ```sh
   npm start
   ```

Now, open `http://localhost:4200` in your browser to view the application.

---

### License

This project is open-source and available for personal and commercial use.

---

### Author

Developed by **Bassel abo khabsa**. Contributions are welcome!
