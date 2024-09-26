import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import Footer from "./Footer";
import RightSidebar from "../CommonForBoth/RightSidebar";
import { useStores } from "store/storeProvider";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { layoutStore } = useStores();
  const {
    isPreloader,
    layoutModeType,
    layoutWidth,
    topbarTheme,
    showRightSidebar,
    showRightSidebarAction,
    changeSidebarThemeImage,
    changeLayout,
    changeLayoutMode,
    changeLayoutWidth
  } = layoutStore;


  const hideRightbar = (event) => {
    var rightbar = document.getElementById("right-bar");
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      showRightSidebarAction(false);
    }
  };

  useEffect(() => {
    changeLayout("horizontal")
  }, []);

  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  }, [isPreloader]);

  useEffect(() => {
    if (layoutModeType) {
      changeLayoutMode(layoutModeType);
    }
  }, [layoutModeType]);

  useEffect(() => {
    if (topbarTheme) {
      changeSidebarThemeImage(topbarTheme);
    }
  }, [topbarTheme]);

  useEffect(() => {
    if (layoutWidth) {
      changeLayoutWidth(layoutWidth);
    }
  }, [layoutWidth]);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <RightSidebar /> : null}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default observer(Layout);
