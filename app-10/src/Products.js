import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Products extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/products').then( element => {
            // console.log(element.data);
            this.setState({data: element.data})
        }).catch( err => {
            console.log(err);
        });
    }

    render(){
        // let list = this.state.data.map( (element) => {
        //     return (<div key={element.id}><p>{`Name: ${element.desc} ${element.title}, Price: ${element.price}`}</p> <img className='pic' src={element.image} alt='' /></div>)
        // })

        let picList = this.state.data.map( (product, index) =>{
            return (
                <Link key={index}   to={`/details/${product.id}`} ><img className='pic' src={product.image} alt='' /></Link>
            )
        })
        return(
            <div>
                <h1>Available Products</h1>
                {picList}
                {/* {list} */}
                {/* {this.componentDidMount} */}
            </div>
        )
    }
}

export default Products;