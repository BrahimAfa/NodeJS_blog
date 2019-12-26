import React, { Component } from 'react'
import NotFound from '../NotFound/NotFound'
import Rating from '@material-ui/lab/Rating'
import CommentsForm from '../Actions/comments/commentsForm';
import { getArticle } from "../../api/Articles.api";
import './single.css';
class Single extends Component {
    state = {
        item: {},
        done: false,
        newComment: false
    }

    componentDidMount() {
        //  console.log('did mount')
        getArticle(this.props.match.params.id).then(item => this.setState({ item, done: true }));
    }
    formatdate = (date) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-GB', options);
    }
    showComments = () => {
        console.log(this.state.item)

        let com = this.state.item.Comments || [];

        let comments = com.map((item, key) => {
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
        return comments;
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
                {this.state.done ? this.showInfo() : <h1>Loading...</h1>}
                <CommentsForm />
            </div>
        )
    }
}

export default Single;