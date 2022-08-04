import { getPosts } from "./services/getPosts";
import { Section, Title, Logo, Nav, Search, Input, Header } from "./styles";
import { Card } from "./components/Card";
import logo from "./assets/logo.svg";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const posts = getPosts("./stays.json");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cityState, setCityState] = useState("Add Location");
  const [bedsState, setBedsState] = useState("");
  const handleCitys = (selectedCity: any) => {
    setCityState(selectedCity);
  };

  const handleBeds = (selectedBeds: any) => {
    setBedsState(selectedBeds);
  };

  const bedsStateNum = bedsState.replace(/[^0-9]/g, "");
  const numsBeds = bedsStateNum != "" ? parseInt(bedsStateNum) : 0;
  const city = cityState.split(", ")[0];

  console.log(city);

  return (
    <>
      {open ? (
        <Modal
          handleClose={handleClose}
          handleCitys={handleCitys}
          handleBeds={handleBeds}
          cityState={cityState}
          bedsState={bedsState}
        />
      ) : null}
      <Nav>
        <a href="/">
          <Logo src={logo} />
        </a>
        <Search onClick={handleOpen}>
          <p>{cityState}</p> {/* provisório */}
          <div>
            <Input
              type="text"
              placeholder="Add Beds"
              name="beds"
              id="beds"
              readOnly
              value={bedsState}
            />
          </div>
          <FontAwesomeIcon icon="magnifying-glass" color="#EB5757" />
        </Search>
      </Nav>

      <Header>
        <Title>Stay in Filand</Title>
        <p>12+stays</p>
      </Header>

      <Section>
        {posts?.map((post) =>
          city != "Add Location" ? (
            numsBeds != 0 ? (
              post.city == city && post.beds >= numsBeds ? (
                <Card posts={post} />
              ) : null
            ) : post.city == city ? (
              <Card posts={post} />
            ) : null
          ) : post.beds >= numsBeds ? (
            <Card posts={post} />
          ) : null
        )}
      </Section>
    </>
  );
}

export default App;
