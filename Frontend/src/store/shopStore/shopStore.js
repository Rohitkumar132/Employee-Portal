import { makeAutoObservable, runInAction } from "mobx";
import { addUser, getCategoriesList, getList } from "service/shop";

class ShopStore {
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

    getCategoriesList = async () => {
        try {
            const response = await getCategoriesList();
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

export default ShopStore;