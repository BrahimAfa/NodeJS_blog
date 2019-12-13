import React, { Component } from 'react'
import Data from '../../ArticlesListe/ArticlesListe';
import NotFound from './NotFound'
import Rating from '@material-ui/lab/Rating'
import CommentsForm from '../../Actions/comments/commentsForm';
import './single.css';
class Single extends Component {
    state = {
        item: Data.find(e => e.id == this.props.match.params.id)
    }
    // showComments = () => {
    //     let com = this.state.item.comments;
    //     let comments = com.map((key, item) => {
    //         console.log(item)
    //         return (
    //             <div key={key}>
    //                 <div className="card">
    //                     <div className="card-content">
    //                         <div className="media">
    //                             <div className="media-left">
    //                                 <figure className="image is-48x48">
    //                                     <img src={item.avatar} alt="Placeholder image" />
    //                                 </figure>
    //                             </div>
    //                             <div className="media-content">
    //                                 <p className="title is-4">{item.author}</p>
    //                                 <p className="subtitle is-6">@{item.date}</p>
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>

    //             </div>
    //         );
    //     });
    //     return comments;
    // }
    showInfo = () => {
        let date = new Date();
        console.log(date.toUTCString());
        if (this.state.item == undefined) {
            return <NotFound />;
        } else {
            return (
                <div>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by1">
                                <img src={this.state.item.picture} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={this.state.item.picture} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.item.title}</p>
                                    <p className="subtitle is-6">@{this.state.item.author}</p>
                                </div>
                            </div>

                            <div className="content">
                                {this.state.item.body}
                                <br />
                                <time dateTime="2019-1-1">{this.state.item.registered}</time><br />
                                <Rating name="half-rating" value={3} precision={0.5} />
                            </div>

                        </div>
                    </div>
                    {/* {this.showComments()} */}
                </div>

            );
        }

    }






    render() {
        return (
            <div className='container'>
                {this.showInfo()}
                <CommentsForm />
            </div>
        )
    }
}

export default Single;