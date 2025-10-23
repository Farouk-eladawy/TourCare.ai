# TourCare.ai - Live Viewer Frontend

This project is a Next.js application that provides a live viewer and scripting interface for browser automation tasks.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/live](http://localhost:3000/live) with your browser to see the result.

## Project Structure

- **/app/live/**: Contains the main page for the Live Viewer application.
  - `page.tsx`: The main route component for `/live`.
  - `LiveViewer.tsx`: A client component that holds all the UI, state, and logic for the interface, including the address bar, viewer placeholder, Monaco editor, and results panel.
- **/app/layout.tsx**: The root layout for the application, configured for Arabic (RTL).
- **/app/globals.css**: Global styles and Tailwind CSS definitions.
- **/components/**: Reusable components, such as icons.
- **/public/**: Static assets.
- `package.json`: Project dependencies and scripts.
- `tailwind.config.ts`: Tailwind CSS configuration file.
