# Payoo MFS Demo

Payoo is a small front-end mobile wallet demo built with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript. It simulates a login screen and a home dashboard with basic money actions such as add money, cash out, transfer money, pay bill, and claim a bonus.

## Project Structure

- `index.html` - login page
- `home.html` - main dashboard and transaction UI
- `taiwind-init.css` - Tailwind entry stylesheet
- `script/login.js` - login validation and redirect
- `script/selector.js` - toggles the dashboard sections
- `script/addmoney.js` - add money flow and history entry
- `script/cashout.js` - cash out flow and history entry
- `script/transfermoney.js` - transfer flow and history entry
- `script/bonus.js` - bonus coupon flow and history entry
- `script/bill.js` - bill payment flow and history entry
- `assets/` - logos and feature icons used by the UI
- `payoo-MFS.fig` - design source file

## Features

- Login screen with fixed demo credentials
- Dashboard balance display
- Add money, cash out, transfer money, bonus, and bill payment forms
- Section switching from the quick action grid
- Transaction history list updated in the browser
- Mobile-style layout with Tailwind CSS and DaisyUI

## Demo Credentials

Use these values on the login screen:

- Mobile number: `01777777777`
- PIN: `1234`

Several forms also use fixed demo values in the JavaScript files for validation, so the app behaves as a controlled front-end prototype rather than a real payment system.

## How To Run

This is a static project, so you can open it directly in a browser or serve it with any local static server.

1. Open `index.html` in your browser, or
2. Start a local server from the project folder and open the served URL.

## Notes

- The app does not connect to a backend or store real transaction data.
- Balance changes and history items exist only in the current browser session.
- The UI relies on CDN-hosted Tailwind, DaisyUI, Font Awesome, Google Fonts, and Remix Icon assets.