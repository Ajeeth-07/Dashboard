# Dashboard-App

## Overview

The ** Dashboard** is a React-based web application that provides a customizable interface for managing various widgets related to cloud security posture management. Users can view different dashboards, add new widgets, and remove existing ones, allowing them to monitor and manage cloud accounts and risks efficiently.

## Features

- **Dynamic Dashboard Management**: Users can add and remove widgets from various categories on the dashboard.
- **Search Functionality**: A search bar is provided in the header to quickly search for content.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across devices.
- **Notification Icon**: A bell icon is provided in the header for notifications (expandable for further functionality).

## Project Structure

```plaintext
├── src
│   ├── components
│   │   ├── App.js           # Main application component
│   │   ├── Header.js        # Header component with breadcrumbs, search bar, and notification icon
│   │   ├── Widget.js        # Individual widget component
│   │   └── Header.css       # Styles for the header component
│   ├── App.css              # General styles for the application
│   ├── index.js             # Main entry point for the React application
├── public
│   ├── index.html           # HTML template
│   └── ...
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts


Installation
Prerequisites
Node.js (v12 or later)
npm (v6 or later) or yarn (v1.22 or later)

Steps
Clone the repository:

bash
git clone https://github.com/your-username/cspm-dashboard.git
cd dashboard
Install the dependencies:

bash
npm install
or
bash
yarn install

Start the development server:
bash
npm start
or
bash
yarn start

The application will be available at http://localhost:3000.

Usage
Adding a Widget
Navigate to the desired category.
Enter the widget name and text in the provided input fields.
Click the "+ Add Widget" button to add the widget to the dashboard.

Removing a Widget
Click the "Remove" button on any widget to remove it from the dashboard.

Searching
Enter your query in the search bar located in the header. The search functionality is currently a placeholder and can be expanded as needed.

Customization
Widget Layout: Modify the widgets-container in App.css to change how widgets are displayed.
Header: Customize the header by editing Header.js and Header.css to fit your needs.
Icons: Additional icons can be added using the react-icons library.

Technologies Used
React.js: JavaScript library for building user interfaces.
React Icons: Library for including popular icons in React projects.
CSS: Styling the components and layout.
