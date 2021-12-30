import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Spacer } from "../../../components/styled/Spacer.style";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
  }, []);

  const [formData, setFormData] = useState({
    type: "",
    contentEn: "",
    contentAr: "",
  });

  const setInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AdminContainer>
      <form>
        <div>
          <label>
            Select content:{" "}
            <select name="type" value={formData.name} onChange={setInput}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </div>
        <Spacer top="20px" />
        <div>
          <label>Arabic Content:</label>
          <textarea
            style={{
              width: "100%",
              height: "500px",
              direction: "rtl",
              resize: "vertical",
            }}
          />
        </div>
        <Spacer top="20px" />
        <div>
          <label>English Content:</label>
          <textarea
            style={{ width: "100%", height: "500px", resize: "vertical" }}
          />
        </div>
      </form>
    </AdminContainer>
  );
};

export default Content;
