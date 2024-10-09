import { makeAutoObservable, runInAction, toJS } from "mobx";
import { addUser, getEmployee, getList } from "service/employee";

class EmployeeStore {
    list = [];
    error = null;
    user = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    getList = async () => {
        try {
            const response = await getList();
            runInAction(() => {
                this.list = response?.data;
                this.user = undefined;
            });
        } catch (error) {
            console.log(error)
            runInAction(() => {
                this.error = error;
            });
        }

        return this.list;
    }

    getEmployee = async (id) => {
        try {
            const response = await getEmployee(id);
            runInAction(() => {
                this.user = response?.data;
            });
        } catch (error) {
            console.log(error)
            runInAction(() => {
                this.error = error;
            });
        }

        return this.user;
    }

    addUser = async (data) => {
        try {
            const response = await addUser(data);
            runInAction(() => {
                this.list = response?.data;
            });
        } catch (error) {
            console.log(error)
            runInAction(() => {
                this.error = error;
            });
        }
    }

}

export default EmployeeStore;