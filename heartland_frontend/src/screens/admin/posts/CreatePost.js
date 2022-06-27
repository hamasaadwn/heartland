import React, { useEffect, useState, useRef } from "react";
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
import { toast, ToastContainer } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: 'https://api.cccht.org'
});

const CreatePost = () => {
  const dispatch = useDispatch();
  const refs = useRef([]);

  const { errors } = useSelector((state) => state.post);

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
  }, [dispatch]);

  useEffect(() => {
    if (errors) {
      for (const e in errors) {
        toast.error(`Error! \n ${errors[e]}`, {
          theme: "colored",
        });
      }
    }
  }, [errors]);

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
      const { data } = await axiosInstance.post(
        "/api/upload",
        formDataU,
        config
      );
      setFormData({ ...formData, image: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      toast.error("Error! File Type is not supported", {
        theme: "colored",
      });
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
      const { data } = await axiosInstance.post(
        "/api/upload/multi",
        formDataU,
        config
      );

      setFormData({ ...formData, pictures: data });
      // setUploading(false);
    } catch (error) {
      console.error(error);
      toast.error("Error! File Type is not supported", {
        theme: "colored",
      });
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
      const { data } = await axiosInstance.post(
        "/api/upload/pdf",
        formDataU,
        config
      );

      setFormData({ ...formData, pdf: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      toast.error("Error! File Type is not supported", {
        theme: "colored",
      });
      setUploading(false);
    }
  };

  const { title, describtion, image, pictures, video, language, type, pdf } =
    formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        addPost(title, describtion, image, pictures, video, language, type, pdf)
      );
      if (data) {
        setFormData({
          title: "",
          describtion: "",
          image: "",
          pictures: [],
          video: "",
          language: "en",
          pdf: "",
          type: "International",
        });
        refs.current[0].value = "";
        refs.current[1].value = "";
        refs.current[2].value = "";
        toast.success("Successful", {
          theme: "colored",
        });
      }
      // console.log(errors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminContainer>
      <ToastContainer position="bottom-right" autoClose={5000} />
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
            <input
              type="file"
              name="image"
              onChange={uploadImageHandler}
              ref={(element) => {
                refs.current[0] = element;
              }}
            />
          </div>

          <div>
            <label>Album </label>
            <input
              type="file"
              name="pictures"
              onChange={uploadPicturesHandler}
              multiple={true}
              ref={(element) => {
                refs.current[1] = element;
              }}
            />
          </div>
          <div>
            <label>pdf </label>
            <input
              type="file"
              name="pdf"
              onChange={uploadPDFHandler}
              multiple={true}
              ref={(element) => {
                refs.current[2] = element;
              }}
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
              <option value="Training">Training</option>
              <option value="Guide">Guide</option>
              <option value="Form">Form</option>
              <option value="Flyer And Brochure">Flyer And Brochure</option>
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
