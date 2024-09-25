import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import withRouter from "./Common/withRouter";
import { useStores } from "store/storeProvider";

const NonAuthLayout = (props) => {
  // Get layout mode from layoutStore
  const { layoutStore } = useStores();
  const { layoutModeType, changeLayoutMode } = layoutStore;

  useEffect(() => {
    if (layoutModeType) {
      changeLayoutMode(layoutModeType);
    }
  }, [layoutModeType, changeLayoutMode]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(observer(NonAuthLayout));
