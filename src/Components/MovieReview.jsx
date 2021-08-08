import React, { Component } from 'react';
import './MovieReview.css'

class MovieReview extends Component {
    constructor(props){
        super(props);
        this.state = null;
    }

    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR")
        .then(res => {
            if(!res.ok){
                throw Error('Unable to fetch data');
            }
            return res.json();
        })
        .then(data =>{
            this.setState(data);
            console.log(this.state.results);
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            this.state && this.state.results.map((review,idx)=>{
                return(
                    
                    <div className="review-box" key={idx}>
                          <div className="img-box">
                              <img src={review.multimedia.src} alt="movie" />
                          </div>
                          <div>
                              <h3><span className="headings">Movie Title:</span> {review.display_title}</h3>
                              <p><span className="headings">Headline:</span> {review.headline}</p>
                              <p><span className="headings">Overview:</span> {review.summary_short}</p>
                              <p><span className="headings">Critics Pick:</span> {review.critics_pick}</p>
                              <p><span className="headings">Byline:</span> {review.byline}</p>
                          </div>
                    </div>
                )
            })
        );
    }
}

export default MovieReview;
