import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";
import data from "./data.json"

// import HornedBeasts from './Components/HornedBeasts'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>

        <Row>
          <Main data={data}/>
        </Row>
        
        <Row>
          <Footer />
        </Row>
        
      </Container>
    );
  }
}

export default App;