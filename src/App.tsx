import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Pricing";
import Home from "./pages/Home";
import Pricing2 from "./pages/Pricing2";
import Contact from "./pages/Contact";
import Compatibility from "./pages/Compatibility";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing2" element={<Pricing2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/careers" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
