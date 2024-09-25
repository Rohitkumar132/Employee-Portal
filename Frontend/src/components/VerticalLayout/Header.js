import PropTypes from 'prop-types';
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import megamenuImg from "../../assets/images/megamenu-img.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

import logo from "../../assets/images/logo.svg";
import logoLightSvg from "../../assets/images/logo-light.svg";

//i18n
import { withTranslation } from "react-i18next";
import { useStores } from 'store/storeProvider';

const Header = (props) => {
  const { layoutStore } = useStores();
  const { showRightSidebarAction, showRightSidebar } = layoutStore;
  const [search, setSearch] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [socialDrp, setSocialDrp] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const tToggle = () => {
    const body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  };

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
              onClick={tToggle}
              className="btn btn-sm px-3 font-size-16 header-item"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={megaMenu}
              toggle={() => setMegaMenu(!megaMenu)}
            >
              <DropdownToggle className="btn header-item" caret tag="button">
                {props.t("Mega Menu")} <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">{props.t("UI Components")}</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li><Link to="#">{props.t("Lightbox")}</Link></li>
                          <li><Link to="#">{props.t("Range Slider")}</Link></li>
                          <li><Link to="#">{props.t("Sweet Alert")}</Link></li>
                          <li><Link to="#">{props.t("Rating")}</Link></li>
                          <li><Link to="#">{props.t("Forms")}</Link></li>
                          <li><Link to="#">{props.t("Tables")}</Link></li>
                          <li><Link to="#">{props.t("Charts")}</Link></li>
                        </ul>
                      </Col>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">{props.t("Applications")}</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li><Link to="#">{props.t("Ecommerce")}</Link></li>
                          <li><Link to="#">{props.t("Calendar")}</Link></li>
                          <li><Link to="#">{props.t("Email")}</Link></li>
                          <li><Link to="#">{props.t("Projects")}</Link></li>
                          <li><Link to="#">{props.t("Tasks")}</Link></li>
                          <li><Link to="#">{props.t("Contacts")}</Link></li>
                        </ul>
                      </Col>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">{props.t("Extra Pages")}</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li><Link to="#">{props.t("Light Sidebar")}</Link></li>
                          <li><Link to="#">{props.t("Compact Sidebar")}</Link></li>
                          <li><Link to="#">{props.t("Horizontal layout")}</Link></li>
                          <li><Link to="#">{props.t("Maintenance")}</Link></li>
                          <li><Link to="#">{props.t("Coming Soon")}</Link></li>
                          <li><Link to="#">{props.t("Timeline")}</Link></li>
                          <li><Link to="#">{props.t("FAQs")}</Link></li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">{props.t("UI Components")}</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li><Link to="#">{props.t("Lightbox")}</Link></li>
                          <li><Link to="#">{props.t("Range Slider")}</Link></li>
                          <li><Link to="#">{props.t("Sweet Alert")}</Link></li>
                          <li><Link to="#">{props.t("Rating")}</Link></li>
                          <li><Link to="#">{props.t("Forms")}</Link></li>
                          <li><Link to="#">{props.t("Tables")}</Link></li>
                          <li><Link to="#">{props.t("Charts")}</Link></li>
                        </ul>
                      </Col>
                      <Col sm={5}>
                        <div>
                          <img src={megamenuImg} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => setSearch(!search)}
                type="button"
                className="btn header-item noti-icon"
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={search ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"}
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <LanguageDropdown />

            <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => setSocialDrp(!socialDrp)}
            >
              <DropdownToggle className="btn header-item noti-icon" tag="button">
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <h5 className="font-size-14 mt-0">{props.t("Find Us On")}</h5>
                      <ul className="list-unstyled social-list">
                        <li>
                          <Link to="#">
                            <img src={github} alt="Github" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={bitbucket} alt="Bitbucket" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={dribbble} alt="Dribbble" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={dropbox} alt="Dropbox" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={mail_chimp} alt="Mail Chimp" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={slack} alt="Slack" />
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <NotificationDropdown />
            <ProfileMenu />

            <div
              onClick={() => {
                showRightSidebarAction(!showRightSidebar);
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
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

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Header);
