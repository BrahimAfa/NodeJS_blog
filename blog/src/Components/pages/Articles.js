import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Data from '../ArticlesListe/ArticlesListe';
import "./css/articles.css";

class Articles extends Component {

    showData = () => {
        let Liste = Data.map((item, key) => {
            let content = item.body.substring(0, 189) + "...";
            return (
                <div key={key} className="card">
                    <div className="card-image">
                        <figure className="image is-3by1">
                            <img src={item.picture} alt="Placeholder image" />
                        </figure>
                    </div>
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
                            <time dateTime="2019-1-1">{item.registered}</time>
                            <div class="buttons has-addons is-right">
                                <button class="button">Read More</button>

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
                <NavBar />
                {this.showData()}
            </div>
        )
    }
}

export default Articles;
