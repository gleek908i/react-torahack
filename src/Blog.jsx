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
                <Article    title="React"
                            order={3}
                            author={authorName} />
            </React.Fragment>
        )
    }
}

export default Blog;