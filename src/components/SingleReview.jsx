import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleReview } from '../utils/api';

const SingleReview = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({});

    useEffect(() => {
        getSingleReview(review_id).then((res) => {
            setReview(res);
        });
    }, [review_id]);

    return (
        <div>
            <h1>{review.title}</h1>
            <img src={review.review_img_url} alt="" />
            <p>{review.owner}</p>
            <p>{review.votes}</p>
        </div>
    );
};

export default SingleReview;