import React from 'react'
import {Card,Button} from "react-bootstrap";



 class HornedBeasts extends React.Component {
     constructor(props){
super (props);
this.state = {
    likes:0
}

     }
     
likesNum=async()=>{
await this.setState({
    likes: this.state.likes+1
})

}

dataHandle = async()=>{
await this.likesNum();
this.props.modalData(this.props.title,this.props.imageUrl , this.props.description ,this.state.likes);
this.props.show ();

}

    render() {
        return (
        

<Card onClick={this.dataHandle} style={{ width: '18rem' }} >
  <Card.Img variant="top" src={this.props.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button variant="success" size="lg">{this.state.likes}</Button>
  </Card.Body>
</Card>

         
        )
    }
}

export default HornedBeasts;
