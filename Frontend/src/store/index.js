import EmployeeStore from "./employeeStore/EmployeeStore";
import LayoutStore from "./layout/layoutStore";
import UserStore from "./userStore/UserStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.layoutStore = new LayoutStore();
    this.employeeStore = new EmployeeStore();
  }
}

export default RootStore;
