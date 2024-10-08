import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import classname from "classnames";
import { withTranslation } from "react-i18next";
import { useStores } from "store/storeProvider";
import { observer } from "mobx-react-lite";

const Navbar = props => {
  const { layoutStore } = useStores();
  const { leftMenu } = layoutStore;

  const [dashboard, setdashboard] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }


  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {"Dashboard"} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      {"Default"}
                    </Link>
                    <Link to="/dashboard-saas" className="dropdown-item">
                      {"Saas"}
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      {"Crypto"}
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      {"Blog"}
                    </Link>
                    <Link to="/dashboard-job" className="dropdown-item">
                      {"Jobs"}
                    </Link>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(
  withTranslation()(observer(Navbar))
);
