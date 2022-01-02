import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Input } from "../../../components/styled/form/Input.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const CreatePost = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    describtion: "",
    image: "",
    pictures: [],
    tags: [],
    video: "",
    language: "",
  });

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
  }, []);

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
          <label>Title</label>
          <Input
            bg="#3d3d3d20"
            fg="#ffffffdb"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={setInput}
            required={true}
            maxLength="150"
          />
        </div>
      </form>
    </AdminContainer>
  );
};

export default CreatePost;
