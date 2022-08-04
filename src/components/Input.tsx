import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useRef, useState } from "react";
import React from "react";

export const InputOptions = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: none;
  padding: 20px 0 20px 10px;
  list-style: none;

  p {
    padding-top: 30px;
  }
  span {
    color: #bdbdbd;
    font-weight: 400;
  }
  div {
    padding: 10px 0;
    button {
      width: 23px;
      height: 23px;
      font-size: 18px;
      border: 1px solid #828282;
      border-radius: 4px;
      background-color: transparent;
    }
    input {
      border: none;
      outline: none;
      width: 30px;
      text-align: center;
      font-weight: 700;
    }
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`;

export const InputContainer = styled.input`
  outline: none;
  border: 0;
  flex: 1 1 auto;
  width: 96%;
  height: 90%;
  -webkit-appearance: none;
  &::placeholder {
    color: #bdbdbd;
  }
`;

interface SelectInterface {
  handleSelected: any;
  bedsState: string;
  newValueI: any;
  valueI: boolean;
}

export const Input: React.FC<SelectInterface> = ({
  bedsState,
  handleSelected,
  newValueI,
  valueI,
}) => {
  const ref = useRef(null);
  //const selectedGuests: any = ref.current;

  const label = document.querySelector("#labelInput");

  if (valueI == true) {
    label?.classList.add("border-focus");
  } else if (valueI == false) {
    label?.classList.remove("border-focus");
  }

  let [inputAdultsValue, setInputAdultsValue] = useState(0);
  let [inputChildrenValue, setInputChildrenValue] = useState(0);
  //let [ guests, setGuests] = useState("");
  let beds = "";

  const teste = (event: any) => {
    const button = event.target;

    if (button.tagName == "BUTTON" && button.innerText == "+") {
      if (button.title == "adults") {
        setInputAdultsValue(++inputAdultsValue);
      } else {
        setInputChildrenValue(++inputChildrenValue);
      }
    } else {
      if (button.title == "adults") {
        inputAdultsValue > 0
          ? setInputAdultsValue(--inputAdultsValue)
          : (inputAdultsValue = 0);
      } else {
        inputChildrenValue > 0
          ? setInputChildrenValue(--inputChildrenValue)
          : (inputChildrenValue = 0);
      }
    }

    let cont = inputAdultsValue + inputChildrenValue;
    beds = cont > 0 ? `${cont} beds` : "";
    //setGuests(beds)
  };

  const [selected, setSelected] = React.useState(bedsState);

  const changeInputOptionHandler = (event: any) => {
    setSelected(beds);
    handleSelected(beds);
  };

  return (
    <>
      <label htmlFor="guests" id="labelInput">
        Guests
        <InputContainer
          ref={ref}
          type="text"
          placeholder="Add guests"
          name="guests"
          id="guests"
          readOnly
          value={selected}
        />
        {valueI ? (
          <InputOptions onClick={changeInputOptionHandler}>
            <p>Adults</p>
            <span>Ages 13 or above</span>
            <div onClick={teste}>
              <button title="adults">-</button>
              <input
                type="number"
                defaultValue={0}
                min="0"
                name="adults"
                id="adults"
                placeholder="0"
                value={inputAdultsValue}
              />
              <button title="adults">+</button>
            </div>
            <p>Children</p>
            <span>Ages 2-12</span>
            <div onClick={teste}>
              <button title="children">-</button>
              <input
                type="number"
                defaultValue={0}
                min="0"
                name="children"
                id="children"
                placeholder="0"
                value={inputChildrenValue}
              />
              <button title="children">+</button>
            </div>
          </InputOptions>
        ) : null}
      </label>
    </>
  );
};
