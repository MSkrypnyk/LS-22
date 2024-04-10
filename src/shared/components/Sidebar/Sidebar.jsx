import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink exact to="/" className="sidebar-link" activeClassName="active">
        <span className="sidebar-link__icon icon-home"></span>
      </NavLink>
      <NavLink exact to="/cart" className="sidebar-link" activeClassName="active">
        <span className="sidebar-link__icon icon-cart"></span>
      </NavLink>
      <NavLink exact to="/favorites" className="sidebar-link" activeClassName="active">
        <span className="sidebar-link__icon icon-heart"></span>
      </NavLink>
      <NavLink exact to="/notification" className="sidebar-link" activeClassName="active">
        <span className="sidebar-link__icon icon-bell"></span>
      </NavLink>
    </div>
  );
};
