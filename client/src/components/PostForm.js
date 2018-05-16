import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }

    render() {
        return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.onChange} />
                </div>
                <div>
                    <label>Body:</label><br />
                    <textarea name="body" value={this.state.body} onChange={this.onChange} />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

// const mapStateToProps = state => ({
//     post: state.posts.item
// });

export default connect(null, { createPost })(PostForm);
