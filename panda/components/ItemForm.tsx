import { useState } from 'react';

export default function ItemForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input name="name" value={form.name || ''} onChange={handleChange} placeholder="Item Name" required />
      <button type="submit">Submit</button>
    </form>
  );
}
