const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODOS':
            console.log('reducer works')
            return [...state,...action.payload];
        default:
            return state;
    }
};

export default todosReducer
