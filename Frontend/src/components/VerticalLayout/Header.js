import React from "react";
import { Link } from "react-router-dom";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import logo from "../../assets/images/logo.svg";
import logoLightSvg from "../../assets/images/logo-light.svg";
import { useStores } from 'store/storeProvider';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const { layoutStore } = useStores();
  const { showRightSidebarAction, showRightSidebar, toggleLeftMenu } = layoutStore;

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-lg-none d-md-block">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={toggleLeftMenu}
              className="btn btn-sm px-3 font-size-16 header-item"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className="d-flex">

            <NotificationDropdown />
            <ProfileMenu />

            <div
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                onClick={() => {
                  showRightSidebarAction(!showRightSidebar);
                }}
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default observer(Header);
