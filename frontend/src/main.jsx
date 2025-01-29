import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import App from './App'
import './index.css'
import { dark, neobrutalism } from '@clerk/themes'

// Create a wrapper component to access the theme context
const ClerkProviderWithTheme = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : neobrutalism,
        variables: {
          colorPrimary: theme === 'dark' ? '#ffffff' : '#000000',
          colorText: theme === 'dark' ? '#ffffff' : '#000000',
        }
      }}
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      afterSignIn={() => window.location.replace('/dashboard')}
      afterSignUp={() => window.location.replace('/dashboard')}
    >
      {children}
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ClerkProviderWithTheme>
          <App />
        </ClerkProviderWithTheme>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
