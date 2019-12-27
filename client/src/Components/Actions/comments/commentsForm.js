import React, { Component } from 'react'

export default class commentsForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.hundleSubmit}>
                    <fieldset>
                        <legend>Comment</legend>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" name="email" value={this.props.email} onChange={this.props.hundleChanged} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Author</label>
                            <div className="control">
                                <input className="input" type="text" name="author" value={this.props.author} onChange={this.props.hundleChanged} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Content</label>
                            <div className="control">
                                <textarea className="textarea" name="content" value={this.props.content} onChange={this.props.hundleChanged} />
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
