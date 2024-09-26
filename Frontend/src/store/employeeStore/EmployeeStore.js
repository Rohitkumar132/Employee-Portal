import { makeAutoObservable, runInAction, toJS } from "mobx";
import { getList } from "service/employee";

class EmployeeStore {
    list = [];
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    getList = async () => {
        try {
            const response = await getList();
            runInAction(() => {
                this.list = response?.data;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }

        return this.list;
    }
}

export default EmployeeStore;