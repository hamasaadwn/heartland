import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";

import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Input } from "../../../components/styled/form/Input.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const AddCity = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    thumbnail: "",
    countryMap: "",
    cityMap: "",
    cityMapAdd: "",
    branch: [],
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
    // const file = e.target.files[0];
    // const formDataU = new FormData();
    // formDataU.append("image", file);
    // setUploading(true);
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };
    //   const { data } = await axios.post("/api/upload", formDataU, config);
    //   setFormData({ ...formData, [event.target.name]: data });
    //   setUploading(false);
    // } catch (error) {
    //   console.error(error);
    //   // addToast("دانانی وێنەکە سەرکەوتە نەبوو", {
    //   //   appearance: "error",
    //   // });
    //   setUploading(false);
    // }
  };

  return (
    <AdminContainer>
      <form>
        <div>
          <label>Name</label>
          <Input
            bg="#ffffffdb"
            fg="#3d3d3d80"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
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
            <label>Country map </label>
            <input type="file" name="image" onChange={uploadImageHandler} />
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
        <TwoColFlex>
          <div>
            <label>City Map </label>
            <input type="file" name="image" onChange={uploadImageHandler} />
          </div>
          <div>
            <label>City map with address</label>
            <input type="file" name="image" onChange={uploadImageHandler} />
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
      </form>
    </AdminContainer>
  );
};

export default AddCity;
