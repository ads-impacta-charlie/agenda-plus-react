import firebase_app from '../../../firebaseConfig';
import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import {createToken} from '@/services/fetcher'

const auth = getAuth(firebase_app);


export default async function signIn(email:string , password:string) {
    let result = null,
    error = null;
    try{
        result = await signInWithEmailAndPassword(auth, email, password)
        const token = (await result.user.getIdToken()).valueOf();
        createToken(token)
    }catch(e){
        error = e
    }

    return{ result, error }
}
