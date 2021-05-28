export const RemoveOneItemFromList = (list, item) => {
  return list.reduce((acc, current) => {
    const newItem = { ...current };
    if (newItem.id === item.id) {
      if (newItem.count > 1) {
        newItem.count--;
        acc.push(newItem);
      }
    } else {
      acc.push(newItem);
    }
    return acc;
  }, []);

  //   const newList = list.map((listItem) => {
  //     const newItem = { ...listItem };
  //     if (newItem.id === item.id) {
  //       newItem.count--;
  //     }
  //     return newItem;
  //   });

  // return newList.filter((listItem) => listItem.count > 0);
};
