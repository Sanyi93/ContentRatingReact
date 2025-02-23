import React, { Component } from 'react';
import './ContentRating.css';
class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>If you like this random text, click the "like" button please. If not, leave this site please, and do not event try to click the "dislike" button.
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
     </div>
     </>
    );
  }
}
export default ContentRating;
