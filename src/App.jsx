import { Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
  );
}

export default App;
