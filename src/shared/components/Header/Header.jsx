import { useState } from "react";
import "/src/shared/components/Header/Header.scss";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";

export const Header = () => {
  const [navIsActive, SetNavIsActive] = useState(false);
  return (
    <div className="header">
      <div className="menu" onClick={() => SetNavIsActive(true)}>
        <span class="icon-menu"></span>
      </div>
      <div className="page-title"></div>
      <div className="user">
        <span className="icon-coffee"></span>
      </div>
      <HeaderMenu navIsActive={navIsActive} navClose={() => SetNavIsActive(false)} />
    </div>
  );
};
