import React from "react";
import { useSelector } from "react-redux";

import { CallButtons } from "./CallButton.styles";

function CallButton({ data }) {
  const { value, nameAR, nameEN, icon } = data;

  const { language } = useSelector((state) => state.root);

  return (
    <a href={`tel:${value}`} style={{ textDecoration: "none" }}>
      <CallButtons>
        <div className="iconCircle">
          <img
            src={
              icon !== ""
                ? `${'https://api.cccht.org'}${icon}`
                : "/images/defaultIcon.png"
            }
            alt=""
          />
        </div>

        <div className="text">
          <h1>{value}</h1>
          <h1 style={{ color: "black" }}>
            {language === "en" ? nameEN : language === "ar" ? nameAR : ""}
          </h1>
        </div>
      </CallButtons>
    </a>
  );
}

export default CallButton;
