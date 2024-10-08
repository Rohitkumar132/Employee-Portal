import { makeAutoObservable, runInAction, toJS } from "mobx";
import { addUser, getList } from "service/employee";

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

    addUser = async (data) => {
        try {
            const response = await addUser(data);
            runInAction(() => {
                this.list = response?.data;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });
        }
    }
}

export default EmployeeStore;