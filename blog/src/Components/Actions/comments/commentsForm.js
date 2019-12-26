import React, { Component } from 'react'


export default class commentsForm extends Component {
    state = {
        name : "",
        content :"",
        author :"",
        success: false
    }
    hundleSubmit = (e) => {
        e.preventDefault();
        console.log('submited');
        console.log(e);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.hundleSubmit}>
                    <fieldset>
                        <legend>Comment</legend>
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
                                <button className="button is-info" type="submit">Comment</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
