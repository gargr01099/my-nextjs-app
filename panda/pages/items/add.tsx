import { useRouter } from 'next/router';
import ItemForm from '../../components/ItemForm';
import { addItem } from '../../utils/api';

export default function AddItem() {
  const router = useRouter();

  const handleSubmit = async (data:any) => {
    await addItem(data);
    router.push('/items');
  };

  return <ItemForm onSubmit={handleSubmit} />;
}
