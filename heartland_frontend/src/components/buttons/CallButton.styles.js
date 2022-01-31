import styled from "styled-components";

export const CallButtons = styled.div`
border: white solid 10px;
border-radius: 60px;
background-color: white;
    width:300px;
    height:90px;
display: flex;
justify-content: space-between;
    .iconCircle{
        width: 26%;
        height: 100%;
        border: red solid 8px;
        border-radius: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .iconCircle img{
        width: 80%;
        height: 45px;
    }
    .text{
width: 70%;
    }
.text h1{
    color: red;
}

`;
