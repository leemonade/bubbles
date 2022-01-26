import { find } from 'lodash';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;

export const reorderQuoteMap = ({ columns, source, destination }) => {
  const current = find(columns, { id: source.droppableId });
  const next = find(columns, { id: destination.droppableId });
  const target = current.cards[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    current.cards = reorder(current.cards, source.index, destination.index);
  } else {
    // moving to different list

    // remove from original
    current.cards.splice(source.index, 1);
    // insert into next
    next.cards.splice(destination.index, 0, target);
  }

  return columns;
};
