import { makeAutoObservable, runInAction } from "mobx";
import { loginUser } from "service/user";

class UserStore {
    user = null;
    loading = false;
    response = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    // Action to handle login
    loginUser = async (data) => {
        this.loading = true;
        this.error = "";

        try {
            const response = await loginUser(data);
            runInAction(() => {
                if (response.status) {
                    this.user = response.data;
                    this.loading = false;

                    localStorage.setItem(
                        "authUser",
                        JSON.stringify({
                            uid: response.data?.token,
                            email: response.data?.email,
                            role: response.data?.role,
                        })
                    );
                };
                this.response = response;
            });
        } catch (error) {
            this.response = error;
        }
        return this.response
    }

    // Action to handle logout
    logoutUser(navigate) {
        this.user = null;
        localStorage.removeItem("authUser");
        this.isUserLogout = true;
        navigate('/login');
    }
}

export default UserStore;
