import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  //const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loggedIn);
  return (
    <nav>
      <ul className="list">
        <li className="element">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {!isLoggedIn ? (
          <div>
            <li className="element">
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li className="element">
              <NavLink to="/signup" activeClassName="active">
                Sign up
              </NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li className="element">
              <NavLink to="/logout" activeClassName="active">
                Log out
              </NavLink>
            </li>
            <li className="element">
              <NavLink to="/tweets" activeClassName="active">
                Tweets
              </NavLink>
            </li>
            <li className="element">
              <NavLink to="/new-tweet" activeClassName="active">
                New Tweet
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
