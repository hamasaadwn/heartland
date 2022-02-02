import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
    changeBackgroundToBlack,
    changeNavbar,
} from "./actions/rootActions";
import { Container } from "./components/styled/Container.style";
import { FlexRow } from "./components/styled/FlexRow.style";
import { GuideContainer } from "./screens/guide/Guide.styles";
import { GreenButton } from "./components/styled/form/GreenButton.style";
import RatingModal from "./components/modals/RatingModal";

function Test() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { t } = useTranslation();

    // useEffect(() => {
    //     dispatch(changeBackgroundToBlack());
    //     dispatch(changeNavbar("black"));
    // }, []);


    return <Container>
        <div className="testBorder" style={{ height: "50vh" }}>

            <div>
                <RatingModal />
            </div>


        </div>
    </Container>;
}

export default Test;
