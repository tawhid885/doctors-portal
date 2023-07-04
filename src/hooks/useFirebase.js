import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { updateProfile, GoogleAuthProvider ,getIdToken, getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";



// Initialize Firebase 
initializeFirebase();
const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading ]= useState(true); 
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    // const navigate = useNavigate();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // send user data to the server
    const sendUserData=(email, displayName, method)=>{
        const user = {email:email, displayName:displayName};
        fetch("http://localhost:5000/users",{
          method: method,
          headers: {
            'content-type':'application/json'
          },
          body : JSON.stringify(user),
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data)
        })
    }

    const googleLoginHandler=(location, navigate)=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError("");
            sendUserData(user.email, user.displayName, 'PUT');
            navigate("/");
        }).catch((error) => {
            // Handle Errors here.
            setAuthError(error.message)

    })
    .finally(()=> setIsLoading(false));

    }


    // register function 
    const registerUser=(email, password, navigate, name)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const newUser = {email: email, displayName: name}
            setUser(newUser);

            // send user to the database 
            sendUserData(email, name, 'POST')

            // send to firebase 
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            setAuthError("")
            navigate("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(error.message)
            // ..
        })
        .finally(()=>setIsLoading(false));
    }

    // login user 
    const loginUser=(email, password, redirect_url, navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem("user", email);
            navigate(redirect_url);
            setAuthError("")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    // manage user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setUser(user)
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken)
              })
            //   console.log("after login", user.displayName)
              // ...
            } else {
              // User is signed out
              // ...
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe
    },[])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=> res.json())
      .then(data => setAdmin(data.isAdmin))
    },[user.email])
    
    // logout function 
    const logout=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
                // Sign-out successful.
                localStorage.removeItem("user");
            }).catch((error) => {
                // An error happened.
            })
            .finally(()=> setIsLoading(false));
    }
    return {
        user,
        token,
        admin,
        isLoading,
        authError,
        googleLoginHandler,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;