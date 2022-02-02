import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { rate } from "../../actions/ratingActions";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContainer } from "../styled/Modal.style";
import { changeUserModal } from "../../actions/rootActions";
import { Button } from "../styled/form/Button.style";
import { Spacer } from "../styled/Spacer.style";


const RatingModal = (props) => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    useEffect(() => {
        if (rating > 0) {
            dispatch(rate("website", rating));

            setRated(rating);
        }
        const serviceRatingFromStorage = localStorage.getItem("webstieRate")
            ? JSON.parse(localStorage.getItem("webstieRate"))
            : null;
        if (serviceRatingFromStorage) {
            setRated(serviceRatingFromStorage.rate);
        }
    }, [rating]);

    return (
        <ModalContainer style={{ zIndex: "99" }}>
            <div className="modal">
                <FontAwesomeIcon
                    icon={faTimes}
                    className="style-fa-times"
                    onClick={props.close}
                />

                <div>
                    <h1>Before Leaving Please Rate Us</h1>
                </div>


                <div className="star-container-self">
                    {rated ? (
                        <StarRatings
                            rating={rated}
                            starRatedColor="#02a89e"
                            starHoverColor="#02a89e"
                        />
                    ) : (
                        <StarRatings
                            rating={rating}
                            starRatedColor="#02a89e"
                            starHoverColor="#02a89e"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name="rating"
                        />
                    )}
                </div>

                <Spacer top="20px" />
                <Button onClick={props.close} bg="#02a89e" fg="#ffffff">
                    Close
                </Button>

            </div>
        </ModalContainer>
    );
};

export default RatingModal;
