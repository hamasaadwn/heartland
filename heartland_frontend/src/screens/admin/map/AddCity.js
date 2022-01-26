import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";

import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Border } from "../../../components/styled/Border.style";
import { Button } from "../../../components/styled/form/Button.style";
import { Input } from "../../../components/styled/form/Input.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";
import { addMap } from "../../../actions/mapsActions";

const AddCity = () => {
  const dispatch = useDispatch();

  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    thumbnail: "",
    countryMap: "",
    cityMap: "",
    cityMapAdd: "",
    branch: [
      {
        address: "",
        phone: "",
        email: "",
        lat: "",
        lang: "",
      },
    ],
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
      setFormData({ ...formData, [e.target.name]: data });
      setUploading(false);
    } catch (error) {
      console.error(error);
      // addToast("دانانی وێنەکە سەرکەوتە نەبوو", {
      //   appearance: "error",
      // });
      setUploading(false);
    }
  };

  const { name, thumbnail, countryMap, cityMap, cityMapAdd, branch } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        addMap(name, thumbnail, countryMap, cityMap, cityMapAdd, branch)
      );

      if (data) {
        setFormData({
          name: "",
          thumbnail: "",
          countryMap: "",
          cityMap: "",
          cityMapAdd: "",
          branch: [
            {
              address: "",
              phone: "",
              email: "",
              lat: "",
              lang: "",
            },
          ],
        });
      }
      // console.log(errors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminContainer>
      <form onSubmit={submitHandler}>
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
            <input type="file" name="thumbnail" onChange={uploadImageHandler} />
          </div>
          <div>
            <label>Country map </label>
            <input
              type="file"
              name="countryMap"
              onChange={uploadImageHandler}
            />
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
        <TwoColFlex>
          <div>
            <label>City Map </label>
            <input type="file" name="cityMap" onChange={uploadImageHandler} />
          </div>
          <div>
            <label>City map with address</label>
            <input
              type="file"
              name="cityMapAdd"
              onChange={uploadImageHandler}
            />
          </div>
        </TwoColFlex>
        <Spacer top="20px" />
        {formData.branch.map((b, i) => (
          <Border>
            <h2>Branch Info</h2>
            <hr />
            <Spacer top="10px" />
            <TwoColFlex>
              <div>
                <label>Address</label>

                <input
                  bg="#ffffffdb"
                  fg="#3d3d3d80"
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={b.address}
                  onChange={(e) => {
                    let newArr = [...formData.branch];
                    newArr[i].address = e.target.value;
                    setFormData({ ...formData, branch: newArr });
                  }}
                  required={true}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  bg="#ffffffdb"
                  fg="#3d3d3d80"
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={b.phone}
                  onChange={(e) => {
                    let newArr = [...formData.branch];
                    newArr[i].phone = e.target.value;
                    setFormData({ ...formData, branch: newArr });
                  }}
                  required={true}
                />
              </div>
            </TwoColFlex>
            <TwoColFlex>
              <div>
                <label>Email</label>
                <input
                  bg="#ffffffdb"
                  fg="#3d3d3d80"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={b.email}
                  onChange={(e) => {
                    let newArr = [...formData.branch];
                    newArr[i].email = e.target.value;
                    setFormData({ ...formData, branch: newArr });
                  }}
                  required={true}
                />
              </div>
              <div>
                <label>Latitude</label>
                <input
                  bg="#ffffffdb"
                  fg="#3d3d3d80"
                  placeholder="Latitude"
                  type="text"
                  name="lat"
                  value={b.lat}
                  onChange={(e) => {
                    let newArr = [...formData.branch];
                    newArr[i].lat = e.target.value;
                    setFormData({ ...formData, branch: newArr });
                  }}
                />
              </div>
            </TwoColFlex>
            <TwoColFlex>
              <div>
                <label>Longitude</label>
                <input
                  bg="#ffffffdb"
                  fg="#3d3d3d80"
                  placeholder="Longitude"
                  type="text"
                  name="lang"
                  value={b.lang}
                  onChange={(e) => {
                    let newArr = [...formData.branch];
                    newArr[i].lang = e.target.value;
                    setFormData({ ...formData, branch: newArr });
                  }}
                />
              </div>
              <div></div>
            </TwoColFlex>
          </Border>
        ))}
        <Spacer top="20px" />
        <TwoColFlex>
          <div>
            <Button
              onClick={() => {
                setFormData({
                  ...formData,
                  branch: [
                    ...formData.branch,
                    {
                      address: "",
                      phone: "",
                      email: "",
                      lat: "",
                      lang: "",
                    },
                  ],
                });
              }}
            >
              Add A Branch
            </Button>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </TwoColFlex>
      </form>
    </AdminContainer>
  );
};

export default AddCity;
