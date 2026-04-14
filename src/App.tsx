import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactsPage from "./pages/ContactsPage";
import ContentPage from "./pages/ContentPage";
import Index from "./pages/Index.tsx";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound.tsx";
import RehabsPage from "./pages/RehabsPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/rehabs" element={<RehabsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
