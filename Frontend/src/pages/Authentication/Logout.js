import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { useNavigate } from "react-router-dom";
import { useStores } from "store/storeProvider";

const Logout = () => {
  const history = useNavigate();
  const { userStore } = useStores();

  useEffect(() => {
    userStore.logoutUser(history);
  }, []);

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);