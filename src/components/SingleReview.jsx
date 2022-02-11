import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleReview } from '../utils/api';
import { postSingleComment } from '../utils/api';

const SingleReview = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [comment, setComment] = useState({});

    useEffect(() => {
        getSingleReview(review_id).then((res) => {
            setReview(res);
        });
    }, [review_id]);

    function addComment(e) {
        e.preventDefault();
        const form = e.target;
        const commentToAdd = {
            username: form[0].value,
            body: form[1].value,
        };
        postSingleComment(commentToAdd).then((res) => {
            setComment((currComment) => {
                return [...currComment, res.data.comment]
            });
        });
    }
    function handleChange(event) {}

    return (
        <form onSubmit={addComment}>
        <div>
            <h1 className='reviewTitle'>{review.title}</h1>
            <img src={review.review_img_url} alt="" />
            <p className='reviewOwner'>Owner: {review.owner}</p>
            <p className='reviewBody'>{review.review_body}</p>
            <p className='reviewVotes'>Votes: {review.votes}</p>
            <p className='commentCount'>Comments: {review.comment_count}</p>
        </div>
        <label>Username </label>
        <input type="text" onChange={handleChange} username="username"></input>
        <br/>
        <br/>
        <label>Comment </label>
        <input type="text" onChange={handleChange} body="comment"></input>
        <br/>
        <br/>
        <button>Post Comment</button>
        </form>
    );
};

export default SingleReview;