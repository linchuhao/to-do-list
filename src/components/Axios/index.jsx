import axios from 'axios';
import {createStore} from 'redux'
import reducers from '../../reducers';
import {LOADING_TOGGLE} from "../action/actionTypes"

const store = createStore(reducers)

const baseURL = "http://localhost:8080/todoitems"

const todoApi = axios.create({baseURL:baseURL});

const getAllItems = () => todoApi.get('/');

const addTodoItem = (data) => todoApi.post(baseURL, data);

const deleteTodoItem = (id) => todoApi.delete(`/${id}`);

const updateTodoItem = (id,data) => todoApi.put(`/${id}`, data);

todoApi.interceptors.request.use(req=>{
    store.dispatch({type:LOADING_TOGGLE,payload :{loading:true}});
    return req;
},error=>error)

todoApi.interceptors.response.use(res=>{
    store.dispatch({type:LOADING_TOGGLE,payload :{loading:false}});
    return res;
},error=>error)

export default {
    getAllItems,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem
};