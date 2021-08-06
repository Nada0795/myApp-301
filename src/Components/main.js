import React from 'react';
import HornedBeasts from './HornedBeasts';
import Col from "react-bootstrap/Col";

// import { data } from 'jquery';

 class Main extends React.Component {
    render() {
        return (
            <>
            {this.props.data.map(item=>
              
              {
                  return (
                <Col>

                <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
              
                />
                
                            </Col> )
              }  
                )}
    

            
</>
        )
    }
}
export default Main;
