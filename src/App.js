import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Carousel,
  Container,
  Figure,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Im1 from "./imgs/img-2.jpg";
import Im2 from "./imgs/img-8.jpg";
import Im3 from "./imgs/img-9.jpg";
import Im4 from "./imgs/img-home.jpg";
import Im5 from "./imgs/img-3.jpg";
import Im6 from "./imgs/img-5.jpg";
import { useState } from "react";
function App() {
  const [show, setshow] = useState(false);
  const [src, setsrc] = useState("");

  return (
    <div className="App1">
      <>
        <Navbar className="nav">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <h1 id="start">Discover the World</h1>
      <div className="fig">
        <img
          alt="300x300"
          src={Im2}
          onClick={() => {
            setshow(!show);
            setsrc(Im2);
          }}
        />
        <img
          alt="300x300"
          src={Im6}
          onClick={() => {
            setshow(!show);
            setsrc(Im6);
          }}
        />
        <img alt="300x300" src={Im5} onClick={() => setshow(!show)} />
      </div>

      {show ? (
        <div className="modall">
          <div className="modall-content">
            <button onClick={() => setshow(!show)}>close</button>
            <img
              width={600}
              alt="300x300"
              src={src}
              onClick={() => setshow(!show)}
            />
          </div>
        </div>
      ) : null}

      <Form className="form">
        <fieldset enabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">elaboration</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">reasons</Form.Label>
            <Form.Select id="disabledSelect">
              <option> select</option>
              <option> you dont like something </option>
              <option> bugs</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="check this or else"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default App;
