import { useState } from "react";
import { ChecklistItem } from "./ChecklistItem";

type Props = {
  data: any;
};

export function ChecklistContainer({ data }: Props) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [initialPageCoords, setInitialPageCoords] = useState({
    pageX: 0,
    pageY: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "0px",
        right: "0px",
        transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
        padding: "20px",
        background: "red",
      }}
      onMouseDown={(e) => {
        setIsDragging(true);
        if (coordinates.x === 0 && coordinates.y === 0) {
          setInitialPageCoords({
            pageX: e.pageX,
            pageY: e.pageY,
          });
        }
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
      onMouseMove={(e) => {
        if (!isDragging) {
          return;
        }

        const diffPageX = e.pageX - initialPageCoords.pageX;
        const diffPageY = e.pageY - initialPageCoords.pageY;

        setCoordinates({
          x: diffPageX,
          y: diffPageY,
        });
      }}
    >
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <ul>
        {data.items.map((item) => (
          <ChecklistItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            isDone={item.isDone}
          />
        ))}
      </ul>
    </div>
  );
}
