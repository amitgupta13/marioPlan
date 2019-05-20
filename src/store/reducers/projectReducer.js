const initState = {
    projects: [
        {id:1, title:'Help me find peach', content:'blah blah blah'},
        {id:2, title:'Help me find shawn', content:'blah blah blah'},
        {id:3, title:'Help me find orio', content:'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state;
}

export default projectReducer;