import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

import {
    createOrUpdateContact,
    loadContact,
    removeContact,
} from "../../../actions/contactActions";

import {
    changeBackgroundToWhite,
    changeNavbar,
} from "../../../actions/rootActions";
import { AdminContainer } from "../../../components/styled/AdminContainer";
import { Button } from "../../../components/styled/form/Button.style";
import { IconButton } from "../../../components/styled/form/IconButton.style";
import { Input } from "../../../components/styled/form/Input.style";
import { Select } from "../../../components/styled/form/Select.style";
import { Spacer } from "../../../components/styled/Spacer.style";
import { Table } from "../../../components/styled/Table.style";
import { TwoColFlex } from "../../../components/styled/TwoColFlex.style";

const Rating = () => {
    const dispatch = useDispatch();
    // const { contacts } = useSelector((state) => state.contacts);

    const [rating, setrating] = useState([]);



    useEffect(() => {
        axios.get("https://api.cccht.org/api/rating/all/all").then((response) => {
            setrating(response.data)

        });
    }, []);


    console.log(rating)


    useEffect(() => {
        dispatch(changeNavbar("side"));
        dispatch(changeBackgroundToWhite());
        dispatch(loadContact());
    }, [dispatch]);


    return (
        <AdminContainer>

            <Spacer top="40px" />
            <h1>Website</h1>
            <Table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>stars</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5</td>
                        {/* <td>{rating.filter(q => q.scope === website).reduce((a, v) => a = a + v.total, 0) / 100}</td> */}
                        <td>{rating.filter(q => q.scope === 'website').filter(q => q.rate === 5).length}</td>
                    </tr>
                    <tr>

                        <td>4</td>
                        <td>{rating.filter(q => q.scope === 'website').filter(q => q.rate === 4).length}</td>
                    </tr>
                    <tr>

                        <td>3</td>
                        <td>{rating.filter(q => q.scope === 'website').filter(q => q.rate === 3).length}</td>
                    </tr>
                    <tr>

                        <td>2</td>
                        <td>{rating.filter(q => q.scope === 'website').filter(q => q.rate === 2).length}</td>
                    </tr>
                    <tr>

                        <td>1</td>
                        <td>{rating.filter(q => q.scope === 'website').filter(q => q.rate === 1).length}</td>
                    </tr>

                </tbody>
            </Table>
            <ul></ul>

            <Spacer top="40px" />
            <h1>Service</h1>
            <Table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>stars</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5</td>
                        {/* <td>{rating.filter(q => q.scope === website).reduce((a, v) => a = a + v.total, 0) / 100}</td> */}
                        <td>{rating.filter(q => q.scope === 'service').filter(q => q.rate === 5).length}</td>
                    </tr>
                    <tr>

                        <td>4</td>
                        <td>{rating.filter(q => q.scope === 'service').filter(q => q.rate === 4).length}</td>
                    </tr>
                    <tr>

                        <td>3</td>
                        <td>{rating.filter(q => q.scope === 'service').filter(q => q.rate === 3).length}</td>
                    </tr>
                    <tr>

                        <td>2</td>
                        <td>{rating.filter(q => q.scope === 'service').filter(q => q.rate === 2).length}</td>
                    </tr>
                    <tr>

                        <td>1</td>
                        <td>{rating.filter(q => q.scope === 'service').filter(q => q.rate === 1).length}</td>
                    </tr>

                </tbody>
            </Table>
            <ul></ul>
        </AdminContainer>
    );
};

export default Rating;
