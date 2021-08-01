import React from 'react';
import HornedBeasts from './HornedBeasts';
// import { data } from 'jquery';

 class main extends React.Component {
    render() {
        return (
            <main>
            <div>
                <HornedBeasts
title="Uni-Corn Fake"
imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
description="cartoon character"
keyword="animal1"
horns="1"
/>



<HornedBeasts
title="Uni-Corn Real"
imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q"
description="real animal"
keyword="animal2"
horns="2"
/>


            </div>
</main>
            
        )
    }
}
export default main;
