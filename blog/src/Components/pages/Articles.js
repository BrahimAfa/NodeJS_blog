import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Data from '../ArticlesListe/ArticlesListe';

class Articles extends Component {

    showData = () => {
        let Liste = Data.map((item, key) => {
            return (
                <div key={key} class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={item.picture} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src={item.picture} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{item.title}</p>
                                <p class="subtitle is-6">@{item.author}</p>
                            </div>
                        </div>

                        <div class="content">
                            {item.body}
                            <br />
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
