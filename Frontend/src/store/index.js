import LayoutStore from "./layout/layoutStore";
import userStore from "./userStore/UserStore";

class RootStore {
  constructor() {
    this.layoutStore = new LayoutStore();
    this.userStore = new userStore();
  }
}

export default RootStore;
