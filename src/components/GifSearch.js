import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Enter a Search Term:</div>
                <input type='text' value={this.state.query} onChange={this.handleChange} />
                <button>Find GIF</button>
            </form>
        )
    }
}