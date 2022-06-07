import { auth, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div >
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in With Google Popup
            </button>

        </div>
    )
}

export default SignIn