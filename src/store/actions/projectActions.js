export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        //const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('posts').doc(authorId).set({
            ...project,
            contenido: project.contenido,
            creadoFch: new Date(),
            linkRef: project.linkRef,
            picLink: project.picLink,
            picRef: project.picRef,
            titulo: project.titulo,
            clipRef1: project.clipRef1,
            clipRef2: project.clipRef2,
            clipRef3: project.clipRef3,
            uid: authorId
        }).then(() => {
            dispatch({type:'CREATE_PROJECT' }, project);
        }).catch(err => {
            dispatch({ type:'CREATE_POST_ERROR' } , err );
        });
    }
};

export const updateProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        //const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('posts').doc(authorId).set({
            ...project,
            contenido: project.contenido,
            creadoFch: new Date(),
            linkRef: project.linkRef,
            picLink: project.picLink,
            picRef: project.picRef,
            titulo: project.titulo,
            clipRef1: project.clipRef1,
            clipRef2: project.clipRef2,
            clipRef3: project.clipRef3,
            uid: authorId
        }).then(() => {
            dispatch({type:'CREATE_PROJECT' }, project);
        }).catch(err => {
            dispatch({ type:'CREATE_POST_ERROR' } , err );
        });
    }
};
