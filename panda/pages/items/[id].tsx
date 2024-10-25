import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemForm from "../../components/ItemForm";
import { getItem, updateItem } from "../../utils/api";

export default function EditItem() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (id) {
      getItem(Number(id)).then((response) => setItem(response.data));
    }
  }, [id]);
  const handleSubmit = async (data:any) => {
    await updateItem(Number(id), data);
    router.push("/items");
  };
  return item ? (
    <ItemForm onSubmit={handleSubmit} initialData={item} />
  ) : (
    <p>Loading...</p>
  );
}
