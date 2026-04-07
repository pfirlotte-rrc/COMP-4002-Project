import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* the VITE_ prefix allows vite to expose .env variables  */}
    {/* The ClerkProvider allows use of Clerk auth, similar to context, in app */}
    <ClerkProvider publishableKey = {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        {/* allows for routing in the application */}
      <BrowserRouter>
        {/* renders the App component */}
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)