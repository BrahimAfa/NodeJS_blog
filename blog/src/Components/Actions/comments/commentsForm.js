import React, { Component } from 'react'


export default class commentsForm extends Component {
    hundleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.hundleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Author</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>
                        <div className="buttons is-right">
                            <button className="button is-info" onSubmit={this.hundleClick}>Comment</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
