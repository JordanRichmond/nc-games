import React, { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getReviews().then((res) => {
            setReviews(res);
        });
    }, []);

    return (
        <main>
            <h1>REVIEWS!</h1>
            <ul>
                {reviews.map((review) => {
                    console.log(review)
                    return (
                        
                        <Link to={`/reviews/${review.review_id}`}>
                            <li key={review.review_id}>{review.review_body}</li>
                        </Link>
                    );
                })}
            </ul>
        </main>
    );
};

export default ReviewList;