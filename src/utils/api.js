import axios from 'axios';

const gameApi = axios.create({
    baseURL: 'https://frontendproject-jr.herokuapp.com/api'
});

export const getReviews = () => {
    return gameApi.get('/reviews').then((res) => {
        return res.data.reviews;
    });
};

export const getSingleReview = (review_id) => {
    return gameApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review;
    });
};

export const getComments = (review_id) => {
    return gameApi.get(`/reviews/${review_id}/comments`).then((res => {
        return res.data.comments;
    }))
}

export const postSingleComment = (commentToAdd) => {
    return gameApi.post(`/reviews/review_id/comments`, commentToAdd).then((res) => {
        return res.data.comment;
    });
}

export const getUsers = () => {
    return gameApi.get('/users').then((res) => {
        return res.data.users;
    });
};