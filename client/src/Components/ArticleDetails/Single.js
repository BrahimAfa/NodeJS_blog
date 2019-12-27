import React, { Component } from 'react'
import NotFound from '../NotFound/NotFound'
import Rating from '@material-ui/lab/Rating'
import CommentsForm from '../Actions/comments/commentsForm';
import { getArticle, PostComment } from "../../api/Articles.api";
import './single.css';

class Single extends Component {
    state = {
        id: "",
        item: {},
        comments: [],
        email: "",
        content: "",
        author: "",
        success: false
    }
    hundleSubmit = (e) => {
        e.preventDefault();
        console.log('submited');
        // const data = new FormData();
        // data.append("email", this.state.email);
        // data.append("content", this.state.content);
        // data.append("author", this.state.author);
        const data = {
            email: this.state.email,
            content: this.state.content,
            author: this.state.author
        }
        console.log(data);

        //   console.log(this.state.email);
        // for (var pair of data.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }

        PostComment(data, this.state.id).then(comments => this.setState({ comments }));

    }
    hundleChanged = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        //  console.log('did mount')
        this.setState({ id: this.props.match.params.id });
        getArticle(this.props.match.params.id)
            .then(article => this.setState({ item: article, comments: article.Comments || [], success: true }))
            .catch(err => this.setState({ item: undefined, success: true }));
    }
    formatdate = (date) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-GB', options);
    }
    showComments = () => {

        let cmts = this.state.comments.map((item, key) => {
            return (
                <div key={key}>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">

                                        <img src="/logo192.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{item.author}</p>
                                    <p className="subtitle is-6">@{this.formatdate(item.date)}</p>
                                </div>

                            </div>
                            <div className="content">
                                {item.content}
                                <br />
                                <time dateTime="2019-1-1">{this.formatdate(item.date)}</time><br />
                                <Rating name="half-rating" value={3} precision={0.5} />
                            </div>

                        </div>
                    </div>

                </div >
            );
        });
        return cmts;
    }
    showInfo = () => {
        if (this.state.item == undefined) {
            return <NotFound />;
        } else {
            return (
                <div>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by1">
                                <img src={`http://localhost:3030/images/${this.state.item.imagePath}`} alt="Placeholder image" />
                            </figure>
                        </div>

                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={`http://localhost:3030/images/${this.state.item.imagePath}`} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.item.name}</p>
                                    <p className="subtitle is-6">@{this.state.item.author}</p>
                                </div>
                            </div>

                            <div className="content">
                                {this.state.item.content}
                                <br />
                                <time dateTime="2019-1-1">{this.state.item.date}</time><br />
                                <Rating name="half-rating" value={3} precision={0.5} />
                            </div>
                        </div>
                    </div>
                    <p className="title is-4">Comments</p>
                    {this.showComments()}
                </div>
            );
        }

    }

    render() {
        return (
            <div className='container'>
                {this.state.success ? this.showInfo() : < h1 > Loading Article...</h1>}

                <CommentsForm hundleChanged={this.hundleChanged}
                    hundleSubmit={this.hundleSubmit}
                    content={this.state.content}
                    email={this.state.email}
                    author={this.state.author} />
            </div >
        )
    }
}

export default Single;