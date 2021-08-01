import React from 'react'


 class HornedBeasts extends Component {
    render() {
        return (
            <div>
<h2>{this.props.title}</h2>
<img src={this.props.imageUrl} alt="" title=""/>
<p>{this.props.description}</p>
<p>{this.props.keyword}</p>
<p>{this.props.horns}</p>



            </div>
        )
    }
}

export default HornedBeasts;
