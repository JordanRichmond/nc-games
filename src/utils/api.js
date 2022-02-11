import axios from 'axios';

const gameApi = axios.create({
    baseURL: 'https://frontendproject-jr.herokuapp.com/api'
});

export const getReviews = () => {
    console.log(gameApi)
    return gameApi.get('/reviews').then((res) => {
        console.log(res)
        return res.data.reviews;
    });
};

export const getSingleReview = (review_id) => {
    return gameApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review;
    });
};

export const postSingleComment = (commentToAdd) => {
    return gameApi.post(`/reviews/review_id/comments`, commentToAdd).then((res) => {
        return res.data.comment
    });
}