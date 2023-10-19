import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <div className="top">
    <h1> Task Board</h1>
    <h1 >Welcome <span>{userName} </span> </h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  color: white;
  flex-direction: column;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  }
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
