
export const login = (credentials) => {

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
    
        firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_OK' });
        });
    }
}

