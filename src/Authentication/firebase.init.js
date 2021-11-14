import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intilizeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default intilizeAuthentication;