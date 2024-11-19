import { useMemo } from "react";
import { getChecklistUI } from "../config/checklist-actions";

type Props = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
};

export function ChecklistItem({ id, title, description, isDone }: Props) {
  const view = useMemo(() => {
    return getChecklistUI(id);
  }, [id]);

  return (
    <li>
      <>
        {title}
        {description}
        {view}
        {isDone ? "isDone" : "notDone"}
      </>
    </li>
  );
}
