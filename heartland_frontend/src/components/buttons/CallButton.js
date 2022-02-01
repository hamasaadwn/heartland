import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CallButtons } from "./CallButton.styles";

function CallButton({ data }) {
  const { number, nameAr, nameEn, icon } = data;

  const { language } = useSelector((state) => state.root);

  return (
    <a href={`tel:${number}`} style={{ textDecoration: "none" }}>
      <CallButtons>
        <div className="iconCircle">
          <img src={icon} />
        </div>

        <div className="text">
          <h1>{number}</h1>
          <h1 style={{ color: "black" }}>
            {language === "en" ? nameEn : language === "ar" ? nameAr : ""}
          </h1>
        </div>
      </CallButtons>
    </a>
  );
}

export default CallButton;
