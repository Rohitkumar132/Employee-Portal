import EmployeeStore from "./employeeStore/EmployeeStore";
import LayoutStore from "./layout/layoutStore";
import ShopStore from "./shopStore/shopStore";
import UserStore from "./userStore/UserStore";

class RootStore {
  constructor() {
    this.shopStore = new ShopStore();
    this.userStore = new UserStore();
    this.layoutStore = new LayoutStore();
    this.employeeStore = new EmployeeStore();
  }
}

export default RootStore;
