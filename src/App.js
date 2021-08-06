import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Col from "react-bootstrap/Col";
import Main from "./Components/main";
import data from "./data.json";
import SelectedBeast from "./Components/SelectedBeast";
import FormBeast from "./Components/form";

// import HornedBeasts from './Components/HornedBeasts'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      description: null,
      dataA: data,
    };
  }

  handleSubmission = (dataSubmit) => {
    //eslint-disable-next-line
    let newData = data.filter((item) => {
      if (item.horns === Number(dataSubmit)) {
        return item;
      } else if (dataSubmit === "all") {
        return item;
      }
    });
    this.setState({ dataA: newData });
  };

  showHandle = () => {
    this.setState({
      show: true,
    });
  };

  hideModel = () => {
    this.setState({
      show: false,
    });
  };

  modalData = async (a, b, c, d) => {
    await this.setState({
      title: a,
      url: b,
      desc: c,
      likes: d,
    });
  };
  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center" >
          <Col className="d-flex justify-content-center" xs={12}>
            <Header />
          </Col>
        </Row>
        <Row className="mb-4 mt-4">
          <FormBeast handleSubmission={this.handleSubmission} />
        </Row>

        <Row>
          <Main
            data={this.state.dataA}
            show={this.showHandle}
            hideModel={this.hideModel}
            modalData={this.modalData}
          />
        </Row>

        <Row>
          <Footer />
        </Row>

        <SelectedBeast
          show={this.state.show}
          hideModel={this.hideModel}
          title={this.state.title}
          url={this.state.url}
          desc={this.state.desc}
          likes={this.state.likes}
        />
      </Container>
    );
  }
}

export default App;
