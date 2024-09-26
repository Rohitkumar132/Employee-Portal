import { makeAutoObservable, runInAction } from "mobx";

class LayoutStore {
  layoutType = "vertical";
  layoutModeType = "light";
  layoutWidth = "fluid";
  leftSideBarTheme = "dark";
  leftSideBarThemeImage = "none";
  leftSideBarType = "default";
  topbarTheme = "light";
  isPreloader = true;
  showRightSidebar = false;
  showSidebar = true;
  leftMenu = false;

  constructor() {
    makeAutoObservable(this);
  }

  manageBodyClass(cssClass, action = "toggle") {
    switch (action) {
      case "add":
        if (document.body) document.body.classList.add(cssClass)
        break
      case "remove":
        if (document.body) document.body.classList.remove(cssClass)
        break
      default:
        if (document.body) document.body.classList.toggle(cssClass)
        break
    }

    return true
  }

  changeBodyAttribute = (attribute, value) => {
    if (document.body) document.body.setAttribute(attribute, value)
    return true
  }

  changeLayout = (layout) => {
    this.layoutType = layout;
    document.body.setAttribute("data-layout", layout);
  };

  changeLayoutMode = (mode) => {
    this.layoutModeType = mode;
    document.documentElement.setAttribute("data-bs-theme", mode);
  };

  changeLayoutWidth = (width) => {
    this.layoutWidth = width;
    if (width === "boxed") {
      this.changeSidebarType("icon");
      document.body.setAttribute("data-layout-size", width);
      document.body.setAttribute("data-layout-scrollable", false);
    } else if (width === "scrollable") {
      this.changeSidebarType("default");
      document.body.setAttribute("data-layout-scrollable", true);
    } else {
      this.changeSidebarType("default");
      document.body.setAttribute("data-layout-size", width);
      document.body.setAttribute("data-layout-scrollable", false);
    }
  };

  changeSidebarTheme = (theme) => {
    this.leftSideBarTheme = theme;
    document.body.setAttribute("data-sidebar", theme);
  };

  changePreloader = (open) => {
    runInAction(() => {
      this.isPreloader = open;
    })
  }

  showRightSidebarAction = (open) => {
    runInAction(() => {
      this.showRightSidebar = open;
      this.manageBodyClass("right-bar-enabled", 'add')
    })
  }

  changeSidebarThemeImage = (themeImage) => {
    this.leftSideBarThemeImage = themeImage;
    document.body.setAttribute("data-sidebar-image", themeImage);
  };

  // changeSidebarType = (sidebarType) => {
  //   this.leftSideBarType = sidebarType;
  //   if (sidebarType === "icon") {
  //     document.body.setAttribute("data-sidebar-size", "");
  //     document.body.classList.add("vertical-collpsed");
  //   } else {
  //     document.body.setAttribute("data-sidebar-size", sidebarType === "compact" ? "small" : "");
  //     document.body.classList.toggle("vertical-collpsed", sidebarType !== "compact");
  //   }
  // };

  changeTopbarTheme = (theme) => {
    this.topbarTheme = theme;
    document.body.setAttribute("data-topbar", theme);
  };

  toggleRightSidebar = (isOpen) => {
    this.showRightSidebar = isOpen;
    document.body.classList.toggle("right-bar-enabled", isOpen);
  };

  toggleSidebar = (isOpen) => {
    this.showSidebar = isOpen;
  };

  toggleLeftMenu = () => {
    var body = document.body;
    if (window.innerWidth <= 998) {
      body.classList.remove("vertical-collpsed");
      this.leftMenu = !body.classList.toggle("sidebar-enable")
    } else {
      this.leftMenu = !body.classList.toggle("vertical-collpsed")
      body.classList.toggle("sidebar-enable");
    }
  };

  changeSidebarType(sidebarType, isMobile) {

    try {
      switch (sidebarType) {
        case "compact":
          changeBodyAttribute("data-sidebar-size", "small")
          this.manageBodyClass("sidebar-enable", "remove")
          this.manageBodyClass("vertical-collpsed", "remove")
          break
        case "icon":
          changeBodyAttribute("data-sidebar-size", "")
          changeBodyAttribute("data-keep-enlarged", "true")
          this.manageBodyClass("vertical-collpsed", "add")
          break
        case "condensed":
          this.manageBodyClass("sidebar-enable", "add")
          if (window.screen.width >= 992) {
            this.manageBodyClass("vertical-collpsed", "remove")
            this.manageBodyClass("sidebar-enable", "remove")
            this.manageBodyClass("vertical-collpsed", "add")
            this.manageBodyClass("sidebar-enable", "add")
          } else {
            this.manageBodyClass("sidebar-enable", "add")
            this.manageBodyClass("vertical-collpsed", "add")
          }
          break
        default:
          changeBodyAttribute("data-sidebar-size", "")
          this.manageBodyClass("sidebar-enable", "remove")
          if (!isMobile)
            this.manageBodyClass("vertical-collpsed", "remove")
          break
      }
    } catch (error) { }
  }
}

export default LayoutStore;
