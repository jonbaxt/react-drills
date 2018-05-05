import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            item: {},
            product: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let brokenDown = this.props.location.pathname.split('/');
        let lastElement = brokenDown.length - 1;
        let newPath = brokenDown[lastElement];

        axios.get(`https://practiceapi.devmountain.com/products/${newPath}`).then((element) => {
            this.setState({ item: element.data })
            this.destructure();
        }).catch(err => console.log(err));
    }
    destructure(){
        const { title, price, image } = this.state.item;
        let newArray = [];
        newArray.push(title, price, image);
        // console.log(newArray);
        this.setState({product: newArray})
    }


    render() {
        return (
            <div>
                {/* <h1>This awesome nested product</h1> */}
                    <h2>{this.state.product[0]}</h2>
                    <img className='pic' src={this.state.product[2]} alt='' />
                    <h4>Price ${this.state.product[1]}.00</h4>
            </div>
        )
    }
}

export default Details;