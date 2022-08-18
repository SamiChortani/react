import './App.css';
//import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Flag, Segment } from 'semantic-ui-react';

const App = () => {
  
  return (
    <div>


<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/amg-range/suv/_jcr_content/container/par/contentelement_565807702/parcontent/imagecontent/image.MQ6.12.20210616152657.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/740/174/324/mercedes-amg-gt-s-mercedes-benz-backgrounds-silver-side-view-wallpaper-preview.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.automobile-magazine.fr/asset/cms/840x394/185393/config/133767/21c0399-012.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Segment>
    <Flag name='ae' />
    <Flag name='france' />
    <Flag name='myanmar' />
    <Flag name='ar' />
    <Flag name='br' />
    <Flag name='ca' />
    <Flag name='gb eng' />
  </Segment>
    </div>
  )
}

export default App
