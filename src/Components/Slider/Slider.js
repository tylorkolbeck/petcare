import React, { Component } from 'react'

export default class Slider extends Component {

    state = {
        words : [
            'word1', 
            'word2',
            'word3',
            'word4',
            'word5'
        ],
        count: 0
    }

    componentDidMount() {

    }

    getWord(count, words) {

        if (count < words) {
            return words[count]
        }
        
    }


    componentWillUnmount() {
        clearInterval(this.clearInterval)
    }
    render() {


        return (
            <div>
                <p>{setInterval(() => this.getWord(this.state.count, this.state.words), 1000)}</p>
            </div>
        )
    }
}
