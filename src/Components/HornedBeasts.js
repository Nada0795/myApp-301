import React from 'react'


 class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
<h2>{this.props.title}</h2>
<img style={{width:"400px"} } src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
<p>{this.props.description}</p>
{/* <p>{this.props.alt}</p> */}
{/* <p>Number Of Horns : {this.props.horns}</p> */}



            </div>
        )
    }
}

export default HornedBeasts;
