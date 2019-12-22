import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchTodos = () => async dispatch =>{
    const response = await jsonPlaceholder.get('/todos');
    dispatch({
        type:'FETCH_TODOS',
        payload: response.data
    })
};


