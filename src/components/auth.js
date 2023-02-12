import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseconfig'


export const SignUp = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}