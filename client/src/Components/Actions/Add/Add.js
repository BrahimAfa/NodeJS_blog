import React, { Component } from 'react'
import './add.css'
import { PostArticle } from "../../../api/Articles.api";

class Add extends Component {
    state = {
        name: "",
        content: "",
        author: "",
        imageName: "Select an image...",
        ImageArticle: null,
        success: false
    }

    hundleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("author", this.state.author);
        data.append("content", this.state.content);
        data.append("ImageArticle", this.state.ImageArticle);

        PostArticle(data).then(isSucces => this.setState({ success: isSucces }));
    }
    changeHandler = (e) => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }

    fileHandler = (e) => {
        // console.log(e);
        this.setState({ ImageArticle: e.target.files[0], imageName: e.target.files[0].name });
    }
    render() {
        return (
            <div className='container'>
                {this.state.success ? <h2>Article is Inserted ^^</h2> : null}
                <form onSubmit={this.hundleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" name="name" type="text" onChange={this.changeHandler} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Author</label>
                        <div className="control">
                            <input className="input" type="text" name="author" onChange={this.changeHandler} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="file is-info">
                            <label className="file-label">
                                <input className="file-input" type="file" name="ImageArticle" onChange={this.fileHandler} />
                                <img src="photo.png" alt="add img" />
                                <span className="file-name">
                                    {this.state.imageName}
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <textarea className="textarea" name="content" onChange={this.changeHandler} />
                        </div>
                        <div className="buttons is-right">
                            <button className="button is-info" type="submit">Save</button>
                            <button className="button is-success " type="reset">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;