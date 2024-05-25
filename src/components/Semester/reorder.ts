import { DraggableLocation, Droppable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderCourses = (
  courses: Course[],
  source: DraggableLocation,
  destination : DraggableLocation,
 ) => {
  const current = [...courses[source.droppableId]];
  const next = [...courses[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
      current,
      source.index,
      destination.index,
    );
    const result = {
      ...courses,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...courses,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };
};