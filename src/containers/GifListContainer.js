import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            results: ""
        }
    }

    handleSubmit = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => this.setState({
            results: json.data
        }))
    }

    render() {
        return (
            <div>
                < GifList results={this.state.results} />
                < GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}