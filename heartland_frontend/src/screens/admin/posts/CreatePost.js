import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Input } from "../../../components/styled/form/Input.style";
import { TextArea } from "../../../components/styled/form/TextArea.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";
import { Button } from "../../../components/styled/form/Button.style";
import { addPost } from "../../../actions/postActions";

const CreatePost = () => {
  const dispatch = useDispatch();

  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    describtion: "",
    image: "",
    pictures: [],
    video: "",
    language: "en",
    pdf: "",
    type: "International",
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

  //upload image handler
  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const formDataU = new FormData();
    formDataU.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formDataU, config);

      setFormData({ ...formData, image: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      // addToast("دانانی وێنەکە سەرکەوتە نەبوو", {
      //   appearance: "error",
      // });
      setUploading(false);
    }
  };

  //upload pictures handler
  const uploadPicturesHandler = async (e) => {
    const files = e.target.files;

    const formDataU = new FormData();
    for (const key of Object.keys(files)) {
      formDataU.append("pictures", files[key]);
    }

    // setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload/multi", formDataU, config);

      setFormData({ ...formData, pictures: data });
      // setUploading(false);
    } catch (error) {
      console.error(error);
      // addToast("دانانی وێنە سەرکەوتوو نەبوو", {
      //   appearance: "error",
      // });
      // setUploading(false);
    }
  };

  //upload pdf handler
  const uploadPDFHandler = async (e) => {
    const file = e.target.files[0];
    const formDataU = new FormData();
    formDataU.append("pdf", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload/pdf", formDataU, config);

      setFormData({ ...formData, pdf: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      // addToast("دانانی وێنەکە سەرکەوتە نەبوو", {
      //   appearance: "error",
      // });
      setUploading(false);
    }
  };

  const { title, describtion, image, pictures, video, language, type, pdf } =
    formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        addPost(title, describtion, image, pictures, video, language, type, pdf)
      );

      // console.log(errors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminContainer>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <Input
            bg="#ffffffdb"
            fg="#3d3d3d80"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={setInput}
            required={true}
            maxLength="150"
          />
        </div>
        <Spacer top="20px" />
        <div>
          <label>Description</label>
          <TextArea
            placeholder="Description"
            type="text"
            name="describtion"
            value={formData.describtion}
            onChange={setInput}
            required={true}
          />
        </div>
        <Spacer top="20px" />
        <TwoColFlex>
          <div>
            <label>Main Image </label>
            <input type="file" name="image" onChange={uploadImageHandler} />
          </div>

          <div>
            <label>Album </label>
            <input
              type="file"
              name="pictures"
              onChange={uploadPicturesHandler}
              multiple={true}
            />
          </div>
          <div>
            <label>pdf </label>
            <input
              type="file"
              name="pdf"
              onChange={uploadPDFHandler}
              multiple={true}
            />
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
        <div>
          <label>Youtube Video</label>
          <Input
            bg="#ffffffdb"
            fg="#3d3d3d80"
            placeholder="Youtube Video"
            type="text"
            name="video"
            value={formData.video}
            onChange={setInput}
          />
        </div>
        <Spacer top="20px" />
        <TwoColFlex>
          <div>
            <label>Language </label>
            <select
              name="language"
              value={formData.language}
              onChange={setInput}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          <div>
            <label>Law </label>
            <select name="type" value={formData.type} onChange={setInput}>
              <option value="International">International Law</option>
              <option value="Iraq">Iraqi Law</option>
            </select>
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
        <Button bg="#02a89e" fg="#ffffff">
          Submit
        </Button>
      </form>
    </AdminContainer>
  );
};

export default CreatePost;
