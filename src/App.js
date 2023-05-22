
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import pic from './beach.jpg';
import Card from 'react-bootstrap/Card';
import pic2 from'./jerba.jpg.jpg';
import pic3 from'./Djerba Hotel Menzel-1.jpg';
import pic4 from'./El-Mouradi-Djerba-Menzel-2.jpg';






function App() {
  return (
        
 <body>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Touristika</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Hebergement</Nav.Link>
          </Nav>
          </Container>
          <Button variant="outline-dark">BOOKNOW</Button>
      </Navbar>
<picture>
     <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="firstname " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder="lastname " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder="email " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
       <img class='pic1' src={pic} alt="taswira" />
       </picture>
<div class='cards'>
<Card  id='card1'>
      <Card.Img id="top" src={pic2} />
      <Card.Body>
        <Card.Title>Hotel-dar djerba</Card.Title>
        <Card.Text>
        Situé sur la plage de Sidi Mahrez à Djerba, Hotel dar djerba  vous propose un hébergement de luxe 5 étoiles, un spa et une connexion Wi-Fi gratuite.
        </Card.Text>
        <Button variant="primary">BOOK</Button>
      </Card.Body>
    </Card>
    <Card id='card1'>
      <Card.Img id="top" src={pic3} />
      <Card.Body>
        <Card.Title>Hotel-Menzel-djerba</Card.Title>
        <Card.Text>
        L'Hotel Menzel-djerba est situé sur l'île de Djerba, à 300 mètres d'une plage privée. Il possède un jardin tropical, une piscine extérieure, et un espace de bronzage.
        </Card.Text>
        <Button variant="primary">BOOK</Button>
      </Card.Body>
    </Card>
    <Card id='card1'>
      <Card.Img id="top" src={pic4} />
      <Card.Body>
        <Card.Title>EL Mouradi-djerba-Menzel</Card.Title>
        <Card.Text>
        L'établissement El Mouradi est un hôtel tout compris doté de grandes piscines intérieure et extérieure. Il est implanté à quelques pas de la plage.wifi gratuit.
        </Card.Text>
        <Button variant="primary">BOOK</Button>
      </Card.Body>
    </Card>
    </div>
   
      

      
      

    </body>
  );
}

export default App;
