import React, { Component } from 'react'
import './add.css'

class Add extends Component {
    hundleClick = (e) => {

        console.log(e)
    }
    hundleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.hundleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Author</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                    <div class="field">
                        <div class="file is-info">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume" />
                                <img src="https://image.flaticon.com/icons/png/512/685/685685.png" alt="add img" />
                                <span class="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
      </span>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea"></textarea>
                        </div>
                        <div className="buttons is-right">
                            <button className="button is-info" onSubmit={this.hundleClick}>Save</button>
                            <button className="button is-success " onSubmit={this.hundleClick}>Published</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;