const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Error al iniciar'
            }
        case 'LOGIN_OK':
            console.log("Logueado");
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_OK':
            return state;

        case 'REGISTRO_OK':
            return {
                ...state,
                authError: null
            }

        case 'ERROR_REG':
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state
    }
}

export default authReducer