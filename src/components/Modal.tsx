import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getPosts } from "../services/getPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Select } from "./Select";
import { Input } from "./Input";

const ModalContent = styled("div")`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  & > section {
    background-color: #fefefe;
    padding: 20px;
    width: 100%;
    position: absolute;
    height: 70%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
export const Section = styled("section")`
  width: 80%;
  height: 55px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  border-radius: 16px;
  font-size: 14px;
  border: none;
  outline: none;
  @media(min-width: 590px) {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    flex-wrap: nowrap;
  }

  label {
    width: 100%;
    font-family: "Mulish";
    font-weight: 800;
    font-size: 9px;
    text-transform: uppercase;
    color: #333333;
    position: relative;
    height: 55px;
    padding: 10px 0px 10px 20px;
    flex-grow: 1;
    border-right: 1px #f2f2f2 solid;
    @media(max-width: 590px) {
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
  }
    option{
      color:red;
    }
  }
  .border-focus {
    border: 1px solid black;
    border-radius: 16px;
  }
`;

export const Button = styled("button")`
  flex: 1 1 auto;
  background-color: transparent;
  border: 0;
  height: 55px;
  width: 100%;
  border-left: 1px #f2f2f2 solid;
  @media(max-width: 600px) {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%)
  }

  .btn {
    width: 127px;
    height: 48px;
    background: #eb5757;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    color: white;
    margin: 0 auto;
    padding: 20px;
  }
`;

interface ModalInterface {
  handleClose: () => void;
  handleCitys: any;
  handleBeds: any;
  cityState: string;
  bedsState: string;
}

//export function Modal(Bla) {
export const Modal: React.FC<ModalInterface> = ({
  handleClose,
  handleCitys,
  handleBeds,
  cityState,
  bedsState,
}) => {
  const [selectedCity , setSelectedCity] = React.useState(cityState);
  const [selectedBeds , setSelectedBeds] = React.useState(bedsState);

  const handleSelectedCity = (selectedCity: any) => {
    setSelectedCity(selectedCity);
  };

  const handleSelectedBeds = (selectedBeds: any) => {
    setSelectedBeds(selectedBeds);
  };

  const seach = () => {
    handleCitys(selectedCity);
    handleBeds(selectedBeds);
    handleClose();
  };

  const [valueS, setValueS] = useState(false);
  const [valueI, setValueI] = useState(false);

  const newValueS = (valor: any) => {
    setValueS(valor)
  }

  const newValueI = (valor: any) => {
    setValueI(valor)
  }

  const tt = (event: any) => {
    if((event.target.id == "labelSelect") || event.target.tagName == "SELECT"){
      valueS == false ? setValueS(true) : setValueS(false)
      setValueI(false)
    } else{
      setValueS(false)
    }

    if((event.target.id == "labelInput") || event.target.tagName == "INPUT"){
      valueI == false ? setValueI(true) : setValueI(false)
      setValueS(false)
    } else{
      setValueI(false)
    }
  }

  return (
    <ModalContent>
      <section>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <Section onClick={tt}>
          <Select cityState={cityState} handleSelected={handleSelectedCity} valueS={valueS} newValueS={newValueS}/>
          <Input bedsState={bedsState} handleSelected={handleSelectedBeds} valueI={valueI} newValueI={newValueI}/>
          <Button type="button" onClick={seach}>
            <div className="btn">
              <FontAwesomeIcon icon="magnifying-glass" color="#fff" />
              Search
            </div>
          </Button>
        </Section>
      </section>
    </ModalContent>
  );
};
