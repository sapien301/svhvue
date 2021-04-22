//import { store } from '../store'

export const isLoggedIn = () => {
    const data = this.$store.getters.getLoggedUser;
    if (data) {
        return true;
    }
    return false;
}


export const getLoggedInUser = () => {
    const data = this.$store.getters.getLoggedUser;

    return data;
}