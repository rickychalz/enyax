// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define the layout with nested routes */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
