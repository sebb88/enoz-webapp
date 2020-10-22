const initState = {};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('creado', action.project);
            return state;
        case 'CREATE_POST_ERROR':
            console.log("Error con el post", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer