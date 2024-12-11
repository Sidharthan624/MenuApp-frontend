import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import MenuTabs from './components/MenuTabs.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import CreateMenuForm from './pages/CreateMenuForm.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each component */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <MenuTabs />
              <Footer />
            </>
          }
        />
        <Route
          path="/create-menu"
          element={
            <>
              <Header />
              <CreateMenuForm />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
