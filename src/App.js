import { BrowserRouter } from 'react-router-dom'
import NavLinks from './components/NavLink/NavLinks';
import AppRouter from './components/AppRouter';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <NavLinks />
        <Container>
          <Row>
            <Col>
              <AppRouter />
            </Col> 
          </Row>
      </Container>
      </BrowserRouter>
  );
}

export default App;
