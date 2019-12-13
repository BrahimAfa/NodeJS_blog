import React, { Component } from 'react'
import Data from '../ArticlesListe/ArticlesListe';
import "./css/articles.css";
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';


class Articles extends Component {

    showData = () => {
        let Liste = Data.map((item, key) => {
            let content = item.body.substring(0, 189) + "...";
            let id = item.id;
            return (
                <div key={key} className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={item.picture} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{item.title}</p>
                                <p className="subtitle is-6">@{item.author}</p>
                            </div>
                        </div>

                        <div className="content">
                            {content}
                            <br />
                            <time dateTime="2019-1-1">{item.registered}</time><br />
                            <Rating name="half-rating" value={item.rating} precision={0.5} />

                            <div className="buttons has-addons is-right">
                                <Link to={`articles/${item.id}`}> <button className="button">Read More</button></Link>

                            </div>
                        </div>

                    </div>
                </div>
            );
        })
        return Liste;
    }
    render() {
        return (
            <div className="container">
                {this.showData()}
            </div>
        )
    }
}

export default Articles;
