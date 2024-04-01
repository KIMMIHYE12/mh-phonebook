import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container className='cotent'>
        <Row>
          <Col lg={3}>
            <div className='contact_add_warp'>
              <ContactForm />
            </div>
          </Col>
          <Col lg={9}>
            <div className='contact_search_warp'>
              <ContactList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
