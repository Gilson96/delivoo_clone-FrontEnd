import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://delivroo-clone-v2-d179eabd4124.herokuapp.com",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

       
    },
    withCredentials: true
});
