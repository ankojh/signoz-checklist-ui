import { useContext } from "react";
import { DataContext } from "../../App";

export function InviteUserButton({ id }: { id: string }) {
  const { data, setData } = useContext(DataContext);

  const handleAction = () => {
    const newItems = [...data.items];
    const currentItemIndex = data.items.findIndex((d) => d.id === id);
    const currentItem = data.items[currentItemIndex];
    newItems.splice(currentItemIndex, 1, {
      ...currentItem,
      isDone: true,
    });

    setData({ ...data, items: newItems });

    //refetch()
  };
  return <button onClick={handleAction}>Invite User</button>;
}
