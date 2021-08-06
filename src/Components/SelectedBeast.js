import React, { Component } from 'react'
import {Modal,Button} from "react-bootstrap";


class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hideModel}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><p> {this.props.desc} </p>
            <img style={{width: "18rem"}} src = {this.props.url} alt={this.props.title}  />

            <h4> {this.props.likes}</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.hideModel}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default SelectedBeast
