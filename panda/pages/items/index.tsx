import { useEffect, useState } from "react";
import Link from "next/link";
import { getItems, deleteItem } from "../../utils/api";

export default function ItemList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((response) => setItems(response.data));
  }, []);

  const handleDelete =async(id:number)=>{
    await deleteItem(id);
    setItems(items.filter((item)=>item.id!==id);
  };
  return (
    <div>
        <h1>Item List</h1>
        <Link href = "/items/add">Add Item</Link>
        <ul>
            {items.map((item)=>(
        <li key = {item.id}>
            {item.name}
            <Link href={`/items/${item.id}`}>Edit</Link>
         <button onClick = {()=>handleDelete(item.id)}>Delete</button>
        </li>    
        ))}
        </ul>
    </div>
  )
}
