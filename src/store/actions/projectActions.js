export const createProject = (project) => {
    return (dispatch, getState) => {
        // async code
        dispatch({type: 'CREATE_PROJECT', project})
    }
};