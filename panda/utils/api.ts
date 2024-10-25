import axios from 'axios';

export const getItems = async()=>axios.get('/api/items');
export const getItem = async(id:number)=>axios.get(`/api/items/${id}`);
export const addItem = async(data:object)=>axios.post('/api/items',data);
export const updateItem = async(id:number,data:object)=>axios.put(`/api/items/${id}`,data);
export const deleteItem = async(id:number)=>axios.delete(`/api/items/${id}`);