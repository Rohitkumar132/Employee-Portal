import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "../CommonForBoth/RightSidebar";
import { useStores } from "store/storeProvider";

const Layout = (props) => {
  const { layoutStore } = useStores();
  const {
    isPreloader,
    layoutModeType,
    leftSideBarThemeImage,
    leftSideBarType,
    layoutWidth,
    topbarTheme,
    showRightSidebar,
    leftSideBarTheme,
    changeSidebarTheme,
    showRightSidebarAction,
    changeSidebarType,
    changeSidebarThemeImage,
    changeTopbarTheme,
    changeLayout,
    changeLayoutMode,
    changeLayoutWidth
  } = layoutStore;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      changeSidebarType("condensed", isMobile);
    } else if (leftSideBarType === "condensed") {
      changeSidebarType("default", isMobile);
    }
  };

  // Hides right sidebar on body click
  const hideRightbar = (event) => {
    var rightbar = document.getElementById("right-bar");
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      showRightSidebarAction(false);
    }
  };

  useEffect(() => {
    // Initialize body click event for toggling rightbar
    document.body.addEventListener("click", hideRightbar, true);
    return () => document.body.removeEventListener("click", hideRightbar, true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    changeLayout("vertical");
  }, []);

  useEffect(() => {
    if (leftSideBarTheme) {
      changeSidebarTheme(leftSideBarTheme);
    }
  }, [leftSideBarTheme]);

  useEffect(() => {
    if (layoutModeType) {
      changeLayoutMode(layoutModeType);
    }
  }, [layoutModeType]);

  useEffect(() => {
    if (leftSideBarThemeImage) {
      changeSidebarThemeImage(leftSideBarThemeImage);
    }
  }, [leftSideBarThemeImage]);

  useEffect(() => {
    if (layoutWidth) {
      changeLayoutWidth(layoutWidth);
    }
  }, [layoutWidth]);

  useEffect(() => {
    if (leftSideBarType) {
      changeSidebarType(leftSideBarType);
    }
  }, [leftSideBarType]);

  useEffect(() => {
    if (topbarTheme) {
      changeTopbarTheme(topbarTheme);
    }
  }, [topbarTheme]);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        />
        <div className="main-content">{props.children}</div>
        {/* <Footer /> */}
      </div>
      {showRightSidebar ? <RightSidebar /> : null}
    </React.Fragment>
  );
};

export default observer(Layout);
