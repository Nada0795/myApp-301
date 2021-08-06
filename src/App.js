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
import SelectedBeast  from "./Components/SelectedBeast"


// import HornedBeasts from './Components/HornedBeasts'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      show : false
    }
  }

  showHandle=()=>{
this.setState({
  show : true
})

  }

  hideModel = ()=>{
this.setState({
  show : false
})

  }

  modalData = async(a,b,c,d)=>{
 await this.setState(
  {
    title : a,
    url : b,
    desc : c ,
    likes : d ,
  }
)

  }
  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>

        <Row>
          <Main data={data} show={this.showHandle} hideModel={this.hideModel} modalData={this.modalData}/>
        </Row>
        
        <Row>
          <Footer />
        </Row>
        
   <SelectedBeast show={this.state.show} hideModel={this.hideModel} title ={this.state.title} url = {this.state.url} desc = {this.state.desc} likes = {this.state.likes} />



      </Container>

    );
  }
}

export default App;