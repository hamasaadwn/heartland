import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { rate } from "../../actions/ratingActions";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContainer } from "../styled/Modal.style";
import { changeUserModal } from "../../actions/rootActions";
import { TwoColFlex } from "../styled/TwoColFlex.style";
import { Input } from "../styled/form/Input.style";
import { Button } from "../styled/form/Button.style";
import { Spacer } from "../styled/Spacer.style";
import { register, resetUserData } from "../../actions/userActions";
import ErrorMessages from "../messages/ErrorMessages";

import {
    changeBackgroundToWhite,
    changeNavbar,
    showSuccess,
} from "../../actions/ratingActions";
import CallButton from "../buttons/CallButton";
const RatingModal = () => {
    const dispatch = useDispatch();

    // const regUser = useSelector((state) => state.regUser);
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(0);

    const submitHandler = async (e) => {
        e.preventDefault();
        // dispatch(resetUserData());
        // setPassErr([]);
        // if (password !== confirmPassword) {
        //     setPassErr([
        //         {
        //             messageEn: "Passwords Should match",
        //             messageAr: "يجب أن تتطابق كلمات المرور",
        //             field: "general",
        //         },
        //     ]);
        // } else {
        //     try {
        //         await dispatch(register(name, email, password, isAdmin, isAuthor));
        //         // console.log(errors);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
    };

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    useEffect(() => {
        if (rating > 0) {
            dispatch(rate("service", rating));
            // dispatch(showSuccess());
            setRated(rating);
        }
        const serviceRatingFromStorage = localStorage.getItem("serviceRate")
            ? JSON.parse(localStorage.getItem("serviceRate"))
            : null;
        if (serviceRatingFromStorage) {
            setRated(serviceRatingFromStorage.rate);
        }
    }, [rating]);

    return (
        <ModalContainer>
            <div className="modal">
                <FontAwesomeIcon
                    icon={faTimes}
                    className="style-fa-times"
                    onClick={() => dispatch(changeUserModal(false))}
                />
                <form onSubmit={submitHandler}>
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
                    <Button bg="#02a89e" fg="#ffffff">
                        Rate
                    </Button>
                </form>
            </div>
        </ModalContainer>
    );
};

export default RatingModal;
