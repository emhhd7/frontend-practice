import React from 'react';

class Cats extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        this._fetchCats()
    }

    async _fetchCats(){
        const response = await fetch('http://localhost:4000/cat1');
        const data = await response.json();
        this.setState({
            message: data.cat
        })
    }

    render() {
        return <div>{this.state.message}</div>
    }
}

export default Cats;