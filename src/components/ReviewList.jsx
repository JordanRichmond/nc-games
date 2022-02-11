import React, { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';
import { Link } from 'react-router-dom';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("All");


    useEffect(() => {
        getReviews().then((res) => {
            if (category === 'All') {
            setReviews(res);
            } else {
                const filteredItems = res.filter(
                    (review) => review.category === category
                );
                setReviews(filteredItems);
            }
        });
    }, [category]);

    function onChange(event) {
        setCategory(event.target.value);
    }

    return (
        <main>
            <h1>REVIEWS!</h1>
            <form>
                <label>Filter by Category:</label>
                <select onChange={onChange}>
                    <option>All</option>
                    <option>Hidden-Roles</option>
                    <option>Dexterity</option>
                    <option>Strategy</option>
                    <option>Deck-Building</option>
                    <option>Engine-Building</option>
                    <option>Push-Your-Luck</option>
                    <option>Roll-And-Write</option>
                    </select>
            </form>

            <ul>
                {reviews.map((review) => {
                    return (
                        
                        <Link to={`/reviews/${review.review_id}`}>
                            <li key={review.review_id}>{review.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </main>
    );
};

export default ReviewList;