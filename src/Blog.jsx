import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
        const authorName="Taichi"
        return (
            <React.Fragment>
                <Article    title="React"　order={1} />
                <Article    title="JSXの使い方" order={2}/>
                <Article    title="環境構築をしてみよう" order={3}/>
            </React.Fragment>
        )
    }
}

export default Blog;