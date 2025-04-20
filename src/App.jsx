import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Home';
import Pastagens from './pages/Pastagens';
import MenuPage from './layouts/MenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pastagens" element={<MenuPage><Pastagens /></MenuPage>} />
  
      </Routes>
    </Router>
  );
}

export default App;