import React, { useEffect } from "react";
import LOGO from "../../../public/images/policeman.png"
import { Container } from "../../components/styled/Container.style";
import { CallButtons } from "./CallButton.styles";

function CallButton() {


    return <Container>
        <CallButtons>
            <div className="iconCircle">
                <img src={LOGO} />
            </div>

            <div className="text">
                <h1>104</h1>
                <h1 style={{ color: "black" }}>Police Number</h1>
            </div>



        </CallButtons>
    </Container>;
}

export default CallButton;
