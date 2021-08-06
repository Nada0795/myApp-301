import React, { Component } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

class FormBeast extends Component {
  handleNum = (event) => {
    event.preventDefault();
    let dataSubmit = event.target.select.value;
    this.props.handleSubmission(dataSubmit);
  };

  render() {
    return (
      <Form onSubmit={this.handleNum}>
        <FloatingLabel
          controlId="floatingSelect"
          label="Select The Number Of Horns :"
        >
          <Form.Select aria-label="Floating label select example" name="select">
            <option value="all">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">WoW 🤩</option>
          </Form.Select>
        </FloatingLabel>
        <Button className="mt-2" variant="primary" type="submit">
          submit
        </Button>
      </Form>
    );
  }
}

export default FormBeast;
