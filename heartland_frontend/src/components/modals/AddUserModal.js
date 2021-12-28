import { useDispatch, useSelector } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconButton } from "../styled/IconButton.style";
import { ModalContainer } from "../styled/Modal.style";
import { changeUserModal } from "../../actions/rootActions";
import { TwoColFlex } from "../styled/TwoColFlex.style";
import { Input } from "../styled/Input.style";

const AddUserModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <div className="modal">
        <FontAwesomeIcon
          icon={faTimes}
          className="style-fa-times"
          onClick={() => dispatch(changeUserModal(false))}
        />
        <TwoColFlex>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
        </TwoColFlex>
      </div>
    </ModalContainer>
  );
};

export default AddUserModal;
