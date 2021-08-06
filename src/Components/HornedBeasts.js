import React from 'react'
import {Card,Button} from "react-bootstrap";



 class HornedBeasts extends React.Component {
     constructor(props){
super (props);
this.state = {
    likes:0
}

     }
     
likesNum=()=>{
this.setState({
    likes: this.state.likes+1
})

}

    render() {
        return (
        

<Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.likesNum} variant="top" src={this.props.imageUrl} />
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
