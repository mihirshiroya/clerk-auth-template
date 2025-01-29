import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import AuthPageLayout from "./components/AuthPageLayout"
import LoadingSpinner from "./components/LoadingSpinner"
import { useTheme } from "./context/ThemeContext"
import { dark, neobrutalism } from '@clerk/themes'

function App() {
  const { isLoaded, isSignedIn } = useAuth()
  const { theme } = useTheme()  // Call inside functional component

  // Conditional appearance for Clerk
  const clerkAppearance = {
    appearance: {
      theme: neobrutalism,
    },
    SignIn:{
      appearance: {
        baseTheme: theme === 'dark' ? dark : neobrutalism,
      },
    },
    layout: {
      socialButtonsPlacement: "top",
      socialButtonsVariant: "blockButton",
      privacyPageUrl: false,
      termsPageUrl: false,
      helpPageUrl: false,
      showPoweredBy: false,
    },
    elements: {
      footer: "hidden",
      rootBox: "w-full",
      card: "shadow-none",
      header: "hidden",
      socialButtons: {
        iconButton: "hidden",
        provider: "hidden",
      },
      dividerRow: "hidden",
      formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded transition-all",
      formFieldInput: "w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white",
      footerAction: "hidden",
      identityPreview: "hidden",
      otpCodeFieldInput: "dark:bg-gray-800 dark:text-white",
      badge: "hidden",
    },
  }

  if (!isLoaded) {
    return <LoadingSpinner />
  }

  // If user is signed in and tries to access auth pages, redirect to dashboard
  if (isSignedIn && window.location.pathname.includes("sign-")) {
    window.location.replace("/dashboard")
    return null
  }

  return (
    <div className={`min-h-screen ${theme}`}> {/* theme should be applied here */}
      <Routes>
        <Route
          path="/sign-in"
          element={
            <AuthPageLayout>
              <SignIn appearance={clerkAppearance} signUpUrl="/sign-up" redirectUrl="/dashboard" />
            </AuthPageLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthPageLayout>
              <SignUp appearance={clerkAppearance} signInUrl="/sign-in" redirectUrl="/dashboard" />
            </AuthPageLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={isSignedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/sign-in" replace />}
        />
      </Routes>
    </div>
  )
}

export default App
