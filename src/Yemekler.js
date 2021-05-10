import React, { Component } from 'react'

class Yemekler extends Component {
    constructor(){
        super()
        this.state={
            message:"Yemekler bölümündesiniz"
        }
    }

    changeMessage (){
        this.setState({
            message:"Afiyet olsun"
        })

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Yemegi Al</button>
            </div>
        )
    }
}

export default Yemekler