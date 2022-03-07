import React from "react";
import { useSelector } from "react-redux";
import { HugeSuccessContainer } from "../styled/HugeSuccessContainer";

const HugeSuccess = () => {
  const { success } = useSelector((state) => state.root);
  return (
    <HugeSuccessContainer
      className={success && "showSuccess"}
      style={{ zIndex: "1000" }}
    >
      <div className="content">
        <p className="text">Successful</p>
      </div>
    </HugeSuccessContainer>
  );
};

export default HugeSuccess;
