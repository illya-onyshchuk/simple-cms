import { BrowserRouter } from 'react-router-dom'
import NavLinks from './components/NavLink/NavLinks';
import AppRouter from './components/AppRouter';


function App() {
  return (
      <BrowserRouter>
        <NavLinks />
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
