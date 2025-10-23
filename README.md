# TourCare.ai Landing Page

This project is a modern, responsive landing page for TourCare.ai, a service offering AI-powered automation for tourism operations, specifically targeting GetYourGuide suppliers. Features include an automation playground, an AI assistant demo, and multi-language support (EN/AR/DE/ES).

The project is built with **React** and **Vite**.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate the static files in the `dist` directory, which is ready for deployment.

## Deployment on Netlify

1.  Connect your GitHub repository to Netlify.
2.  Set the **Build command** to `npm run build`.
3.  Set the **Publish directory** to `dist`.
4.  Add your environment variables (e.g., `VITE_API_KEY`) in the Netlify UI.
