
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0;
        dislikes: 0;
        HandleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1
            }));
        };
        HandleDislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1
            }));
        }
    };
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            //Add text here
        </p>
        <div className='rating-buttons'>
            <button className='like-button'>
                Like ({this.state.likes})
            </button>
            <button clasName='dislike-button'>
                Dislike ({this.state.dislikes})
            </button>
        </div>
     </div>
    );
  }
}

export default ContentRating;
