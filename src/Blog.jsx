import React, {useState} from 'react';
import Article from './Article';
import {Foo, Bar} from './components/FooBar'
import Hoge from './components/Hoge'

const Blog = () => {

    // super(props);

    //     isPublished:false,
    //     count: 0,
    
    // }

    // // componentDidMount() {
    // //     document.getElementById('counter').addEventListener('click', this.countUp)
    // // }

    // // componentDidUpdate() {
    // //     console.log(this.state.count)
    // //     if (this.state.count >= 10){
    // //         this.setState({count: 0 })
    // //     }
    // // }

    // // conponentWillUnmount() {
    // //     document.getElementById('counter').removeEventListener('click', this.countUp)
    // // }

    // togglePublished = () => {
    //     this.setState({
    //         isPublished:!this.state.isPublished
    //     })
    // };

    // // countUp = () => {
    // //     this.setState({count:this.state.count+1})
    // // }


        return (
            <React.Fragment>
                    <Article    title="Reactの使い方" />
                <Foo />
                <Bar />
            </React.Fragment>
        )
    
}

export default Blog;