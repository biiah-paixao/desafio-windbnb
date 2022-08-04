import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useRef, useState } from "react";
import React from "react";
import { getCitysForPosts } from "../services/getCitysForPosts";

export const SelectContainer = styled("select")`
  width: 90%;
  height: 90%;
  flex: 1 1 auto;
  border: none;
  outline: none;
  -webkit-appearance: none;
  color: black;
`;

export const Options = styled.ul`
  padding: 5vh 0;
  @media (max-width: 590px) {
    padding: 10vh 0;
  }

  li {
    font-family: Mulish;
    text-transform: none;
    font-size: 16px;
    font-weight: 400;
    padding: 20px 0 20px 10px;
    list-style: none;
    .icon-location {
      padding-right: 10px;
    }
  }
`;

interface SelectInterface {
  handleSelected: any;
  cityState: string;
  valueS: boolean;
  newValueS: any;
}

export const Select: React.FC<SelectInterface> = ({
  cityState,
  handleSelected,
  valueS,
  newValueS,
}) => {
  const citys = getCitysForPosts();

  const ref = useRef(null);
  const selectedCity: any = ref.current;

  const label = document.querySelector("#labelSelect");
  if (valueS == true) {
    label?.classList.add("border-focus");
  } else if (valueS == false) {
    label?.classList.remove("border-focus");
  }

  const [selected, setSelected] = React.useState(cityState);
  const changeSelectOptionHandler = (event: any) => {
    selectedCity.value = event.target.innerText;
    setSelected(selectedCity.value);
    handleSelected(selectedCity.value);
    newValueS(false);
  };

  return (
    <>
      <label htmlFor="select" id="labelSelect">
        Location
        <SelectContainer
          ref={ref}
          value={selected}
          onChange={changeSelectOptionHandler}
          required={true}
          name="select"
          autoFocus
          disabled
          id="select"
        >
          <option value="Add Location" hidden>
            Add Location
          </option>
          {citys.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </SelectContainer>
        {valueS ? (
          <Options>
            {citys.map((city) => (
              <li onClick={changeSelectOptionHandler}>
                <FontAwesomeIcon
                  icon="location-dot"
                  className="icon-location"
                  size="lg"
                />
                {city}
              </li>
            ))}
          </Options>
        ) : null}
      </label>
    </>
  );
};
