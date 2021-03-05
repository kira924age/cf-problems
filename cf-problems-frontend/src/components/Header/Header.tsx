import React from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { Row, Col } from "antd";
import { Input, Button } from "antd";
import { Link, useHistory } from "react-router-dom";

import { Collapse } from "react-collapse";

import "./Header.css";
import "./InputBox.css";

const colProps = [
  {
    xxl: 4,
    xl: 5,
    lg: 6,
    md: 6,
    sm: 8,
    xs: 20,
  },
  {
    xxl: 20,
    xl: 19,
    lg: 18,
    md: 18,
    sm: 16,
    xs: 0,
  },
  {
    xxl: 0,
    xl: 0,
    lg: 0,
    md: 0,
    sm: 0,
    xs: 4,
  },
];

interface Props {
  userId: string | undefined;
  location: string;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const [userId, setUserId] = React.useState(props.userId);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  let history = useHistory();

  const handleEnter = (e: React.FormEvent<HTMLInputElement>) => {
    history.push("/" + props.location + "/" + userId);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  let collapseId: string = isOpen
    ? "collapse-isOpen-true"
    : "collapse-isOpen-false";

  return (
    <div id="header">
      <Row style={{ flexFlow: "nowrap", height: 56 }}>
        <Col {...colProps[0]}>
          <Logo />
        </Col>
        <Col {...colProps[1]} className="menu-row" style={{ display: "flex" }}>
          <div id="input-box">
            <Input
              placeholder="Codeforces ID"
              value={userId}
              onChange={handleChange}
              onPressEnter={handleEnter}
            />
            <Button>
              <Link to={"/table/" + userId} replace>Table</Link>
            </Button>
            {userId === "" ? (
              <Button disabled>
                <Link to={"/user/" + userId} replace >User</Link>
              </Button>
            ) : (
              <Button>
                <Link to={"/user/" + userId} replace>User</Link>
              </Button>
            )}
          </div>
          <ThemeToggler />
        </Col>
        <Col {...colProps[2]}>
          <div onClick={() => toggleIsOpen()}>
            <Hamburger />
          </div>
        </Col>
      </Row>
      <Collapse isOpened={isOpen}>
        <div className={collapseId}>
          <div id="input-box">
            <Input
              placeholder="Codeforces ID"
              value={userId}
              onChange={handleChange}
              onPressEnter={handleEnter}
            />
            <Button>
              <Link to={"/table/" + userId} replace>Table</Link>
            </Button>
            {userId === "" ? (
              <Button disabled>
                <Link to={"/user/" + userId} replace>User</Link>
              </Button>
            ) : (
              <Button>
                <Link to={"/user/" + userId} replace>User</Link>
              </Button>
            )}
          </div>
          <ThemeToggler />
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
