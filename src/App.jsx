import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Event from "./pages/Event";
import History from "./pages/History";
import News from "./pages/News";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Photography from "./pages/Photography";
import { ContentProvider } from "../context/UseContent";

function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="event" element={<Event />} />
          <Route path="history" element={<History />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}

export default App;
