import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.min.css";

import {
  createOrUpdateContent,
  loadContent,
  resetContent,
  resetUpdatedContent,
} from "../../../actions/contentActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { TextArea } from "../../../components/styled/form/TextArea.style";
import { Spacer } from "../../../components/styled/Spacer.style";

const axiosInstance = axios.create({
  baseURL: 'https://api.cccht.org'
});

const Content = () => {
  const dispatch = useDispatch();

  const { content, errors } = useSelector((state) => state.updateContent);

  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    type: "About",
    contentEn: "",
    contentAr: "",
    image: "",
  });

  useEffect(() => {
    dispatch(resetContent());
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
  }, [dispatch]);

  useEffect(() => {
    if (content) {
      toast.success("Successful", {
        theme: "colored",
      });
    }
    if (errors) {
      for (const e in errors) {
        toast.error(`Error! \n ${errors[e]}`, {
          theme: "colored",
        });
      }
    }
    dispatch(resetUpdatedContent());
  }, [content, errors, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(loadContent(formData.type));
        if (result) {
          setFormData({
            ...formData,
            contentEn: result.contentEn,
            contentAr: result.contentAr,
            image: result.image,
          });
        } else {
          setFormData({
            ...formData,
            contentEn: "",
            contentAr: "",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [formData.type]);

  const setInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        createOrUpdateContent(
          formData.type,
          formData.contentEn,
          formData.contentAr,
          formData.image
        )
      );
    } catch (err) {
      console.log(err);
    }
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

  return (
    <AdminContainer>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Select content:{" "}
            <select name="type" value={formData.type} onChange={setInput}>
              <option value="About">About</option>
              <option value="Human Trafficing">Human Trafficing</option>
              <option value="Activity">Activity</option>
            </select>
          </label>
        </div>
        <Spacer top="20px" />
        <div>
          <label>Arabic Content:</label>
          <TextArea
            name="contentAr"
            value={formData.contentAr}
            onChange={setInput}
            placeholder="النص هنا...."
          />
        </div>
        <Spacer top="20px" />
        <div>
          <label>English Content:</label>
          <TextArea
            name="contentEn"
            value={formData.contentEn}
            onChange={setInput}
            placeholder="Text Here...."
          />
        </div>
        <Spacer top="20px" />
        {formData.type === "About" && (
          <div>
            <label>Main Image </label>
            <input type="file" name="image" onChange={uploadImageHandler} />
          </div>
        )}

        <Spacer top="20px" />
        <Button bg="#02a89e" fg="#ffffff">
          Submit
        </Button>
      </form>
    </AdminContainer>
  );
};

export default Content;
