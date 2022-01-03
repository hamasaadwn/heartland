import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContact } from "../../../actions/contactActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const Contact = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(changeNavbar("side"));
    dispatch(changeBackgroundToWhite());
    dispatch(loadContact());
  }, []);

  return (
    <AdminContainer>
      <ul>
        {
          console.log(contacts) /* {contacts &&
          contacts.map((c) => (
            <li>
              <TwoColFlex className="space_between">
                <div>test</div>
              </TwoColFlex>
            </li>
          ))} */
        }
      </ul>
    </AdminContainer>
  );
};

export default Contact;
