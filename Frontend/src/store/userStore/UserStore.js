import { makeAutoObservable, runInAction } from "mobx";
import { postFakeLogin, postJwtLogin, postSocialLogin } from "helpers/fakebackend_helper";

class UserStore {
    user = null;
    loading = false;
    error = "";
    succuss = "";
    isUserLogout = false;

    constructor() {
        makeAutoObservable(this);
    }

    // Action to handle login
    async loginUser(data, navigate) {
        this.loading = true;
        this.error = "";

        try {
            const response = await postFakeLogin(data);

            localStorage.setItem("authUser", JSON.stringify(response));

            runInAction(() => {
                this.user = response;
                this.loading = false;
                this.isUserLogout = false;
            });

            navigate('/dashboard');
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.loading = false;
                this.isUserLogout = false;
            });
        }
    }

    // Action to handle logout
    logoutUser(navigate) {
        this.user = null;
        localStorage.removeItem("authUser");
        this.isUserLogout = true;
        navigate('/login');
    }

    // Action to handle social login
    async socialLogin(type, navigate) {
        this.loading = true;
        this.error = "";

        try {
            const response = await postSocialLogin(type);

            if (response) {
                localStorage.setItem("authUser", JSON.stringify(response));

                runInAction(() => {
                    this.user = response;
                    this.loading = false;
                });

                navigate('/dashboard');
            }
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.loading = false;
            });
        }
    }
}

export default UserStore;
