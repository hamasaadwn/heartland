import React from "react";
import RatingModal from "./components/modals/RatingModal";

import { Container } from "./components/styled/Container.style";


function Test() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { t } = useTranslation();

    // useEffect(() => {
    //     dispatch(changeBackgroundToBlack());
    //     dispatch(changeNavbar("black"));
    // }, []);

    return (
        <Container>
            <div className="testBorder" style={{ height: "50vh" }}>
                <RatingModal />
            </div>
        </Container>
    );

}

export default Test;
