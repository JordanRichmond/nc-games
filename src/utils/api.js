import axios from 'axios';

const gameApi = axios.create({
    baseURL: 'https://frontendproject-jr.herokuapp.com/api'
});

export const getReviews = () => {
    console.log('Hello!')
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