import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import logo from './logo.svg';
import './App.css';
import './CSS/style.css';


function App() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
