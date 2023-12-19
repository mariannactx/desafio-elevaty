import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NewClientPage from './pages/NewClientPage';
import ClientPage from './pages/ClientPage';
import ListClientPage from './pages/ListClientsPage';
import NotFound from './pages/NotFoundPage';
import EditClientPage from './pages/EditClientPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListClientPage />} />
        <Route path='/ver/:id' element={<ClientPage />} />
        <Route path='/editar/:id' element={<EditClientPage />} />
        <Route path='/novo' element={<NewClientPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
