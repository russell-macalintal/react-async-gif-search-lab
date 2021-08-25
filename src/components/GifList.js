import React from 'react'

export default class GifList extends React.Component {

    render() {
        if(this.props.results === ""){
            return null
        }
        return (
            <ul>
                <li>
                    <img src={this.props.results[0].images.original.url} alt={this.props.results[0].id}></img>
                </li>
                <li>
                    <img src={this.props.results[1].images.original.url} alt={this.props.results[1].id}></img>
                </li>
                <li>
                    <img src={this.props.results[2].images.original.url} alt={this.props.results[2].id}></img>
                </li>
            </ul>
        )
    }
}