import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios'; //Now using our instance set up in axios.js

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostID : null,
        error: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log('response');
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Thomas"
                    }
                });
                // this.setState({posts: response.data});
                this.setState({posts: updatedPosts});
            })
            .catch( error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler( id ) {
        this.setState({selectedPostID: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}> Something went wrong! </p>;
        
        if ( !this.state.error ) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        } 

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
