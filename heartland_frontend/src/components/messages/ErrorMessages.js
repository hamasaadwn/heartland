import React from "react";
import { useSelector } from "react-redux";

const ErrorMessages = ({ errors }) => {
  const { language } = useSelector((state) => state.root);
  return (
    <div>
      <ul>
        {errors.map((e, i) => (
          <li style={{ color: "red" }} key={i}>
            {language === "en"
              ? e.messageEn
              : language === "ar"
              ? e.messageAr
              : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessages;
