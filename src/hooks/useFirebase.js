import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,getIdToken, signOut} from "firebase/auth";
import intilizeAuthentication from "../Authentication/firebase.init"; 

intilizeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState('');
    const [error,setError] = useState('');

    // Auth
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
           
    }

    // Log out
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            console.log("Log Out Done!!");
            setUser('');
        }).catch((error) => {
            console.log("Log Out Error!!");
        });
    }

    // Use effect
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

                getIdToken(user)
                    .then(idToken => localStorage.setItem("idToken", idToken))
                    .catch(function(error) {
                    // Handle error
                  });
                // ...
            } else {
                // User is signed out
                setUser("");
            }
        });
    },[])

    return {
        user,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;