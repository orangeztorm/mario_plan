const initState = {
    projects: [
        {id:1, title: 'help me find peach', content: 'blah blah blah blah'},
        {id:2, title: 'help me find the stars', content: 'blah blah blah blah'},
        {id:3, title: 'help me find the my sharingan', content: 'blah blah blah blah'},
    ]
};
const projectReducer = (state=initState, action) => {
    if (action.type === 'CREATE_PROJECT') {
        console.log('created project', action.project);
    }
    return state;
};

export default projectReducer