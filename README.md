# Country Explorer App

This is a React + Vite application built as part of a machine test. It includes a login page with form validation and a home page that displays country data fetched from a public API. The app includes a custom slider, pagination, filtering by continent, and uses modern React best practices.

## Live Demo

Hosted on Vercel: [View Live App](https://timesworld-task-geib.vercel.app/)  
(Replace with your actual Vercel link)

## Features

- Login Page with form validation
- Password must be at least 8 characters long and include:
  - At least 1 uppercase letter
  - At least 1 number
  - At least 1 special symbol
- Redirects to Home page upon successful login
- Home Page displays list of countries with:
  - Name
  - Flag
  - Region
- Country data fetched from: `https://restcountries.com/v2/all?fields=name,region,flag`
- Load more pagination for country list
- Filter countries by continent (region)
- Custom image slider with next, previous buttons and dot indicators
- Fully responsive design
- Functional components with React Hooks
- State management using Redux Toolkit
- Styled using React-Bootstrap
- Code pushed to public GitHub repository
- Deployed on Vercel

## Tech Stack

- React (with Vite)
- React Hooks
- Redux Toolkit
- React-Bootstrap
- REST API
- GitHub
- Vercel for deployment

## Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/JIHANAGAFOOR/timesworld_task.git

