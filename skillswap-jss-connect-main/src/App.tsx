import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Homepage from './pages/Homepage.jsx';
import LoginRegister from './pages/LoginRegister.jsx';
import MainApp from './pages/MainApp.jsx';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Homepage 
                  onNavigateToLogin={() => window.location.href = '/login'} 
                />
              } 
            />
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? (
                  <LoginRegister 
                    setIsAuthenticated={setIsAuthenticated}
                    setIsAdmin={setIsAdmin}
                  />
                ) : (
                  <Navigate to="/app" replace />
                )
              } 
            />
            <Route 
              path="/app/*" 
              element={
                isAuthenticated ? (
                  <MainApp isAdmin={isAdmin} />
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;