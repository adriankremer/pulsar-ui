import React, { useContext } from "react";
import { ThemeContext } from "../containers/ThemeContext";

const Header = () => {
  const { styleguidist } = useContext(ThemeContext);
  return (
    <ul>
      {styleguidist.sections.map((item, key) => (
        <li key={key}>{item.slug}</li>
      ))}
    </ul>
  );
};

export default Header;
