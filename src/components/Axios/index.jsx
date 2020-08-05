import axios from 'axios';

const baseURL = "https://5e9ec500fb467500166c4658.mockapi.io/todos"

const getAllItems = axios.create({baseURL:baseURL});

const addTodoItem = (data) => axios.post(baseURL, data);

export default {
    getAllItems,
    addTodoItem
};