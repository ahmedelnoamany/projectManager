import React, { Component } from 'react';
import moment from 'moment';

export default class ProjectChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      comments: [
        { author: "Bob Bobby", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam.", date: "10/15/2018 11:00" },
        { author: "Ahmed Gouda", text:"nice work, I'll talk to you later", date: "10/15/2018 10:00" },
        { author: "Fred Ted", text:"Can you change x y and z completely", date: "10/15/2018 13:00" },
        { author: "Todd Teddy", text:"I dont like the design", date: "10/14/2018 11:00"},
        { author: "Jenny May", text:"woooow, you suck!", date: "10/13/2018 11:00" }
      ]
    }
  }
  renderComments() {
    let { comments } = this.state;
    if(comments.length < 1) {
      return <span>When you communicate with team members, comments, will appear here.</span>
    }
    return (
      comments.map((comment, index) => (
        
          <div className="project-chat__comment u-margin-bottom-small">
            <div className="project-chat__user-details u-margin-bottom-small">
              <span style={{height: '25px', width: '25px', backgroundColor: '#6987C9', display: 'inline-block', borderRadius: '50%'}}> </span>
              <span className="project-chat__user-details--user-name">{comment.author}</span>
              <span className="project-chat__user-details--time-stamp">1h ago</span>
            </div>
            <div className="project-chat--comment-text"><span>{comment.text}</span></div>
          </div>

      ))
    )
  }
  handleCommentSubmit() {
    let { newComment, comments } = this.state;
    if (newComment.length < 1) {
      return null;
    }
    let commentObject = {};
    commentObject.author = "Ahmed Gouda";
    commentObject.text = newComment;
    commentObject.date = moment();
    comments.push(commentObject);
    this.setState({ comments, newComment: "" });
  }
  render() {
    return (
      <div className="project-chat">
        <h3 className="heading-3 heading-3--dark u-margin-top-small u-margin-left-small">Project Chat</h3>
        <div className="project-chat__response-container u-margin-top-small u-margin-bottom-medium">
          <textarea 
            name="response"
            placeholder="Write a Response..."
            className="project-chat__response-textarea"
            value={this.state.newComment}
            onChange={e => this.setState({ newComment: e.target.value })}
          />
          <button 
            onClick={() => this.handleCommentSubmit()}
            className="btn btn__chat-btn"
          >Send</button>
        </div>
        <div className="project-chat__comments-container">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}