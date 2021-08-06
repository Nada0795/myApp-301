import React from 'react';
import HornedBeasts from './HornedBeasts';
import Col from "react-bootstrap/Col";

// import { data } from 'jquery';

 class Main extends React.Component {
    render() {
        return (
            
            <Col>
                <HornedBeasts
title="Uni-Corn Fake"
imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
description="cartoon character"
alt="animal-1"
horns="1"
/>



<HornedBeasts
title="Uni-Corn Real"
imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q"
description="real animal"
alt="animal-2"
horns="2"
/>


            </Col>

            
        )
    }
}
export default Main;
