import { RemoveOneItemFromList } from "./util";

const list = [
  { id: "item1", count: 7 },
  { id: "item2", count: 2 },
  { id: "item3", count: 1 },
];

test("remove item from list", () => {
  const newList = RemoveOneItemFromList(list, { id: "item1" });
  expect(newList.length).toBe(3);
  expect(newList[0].count).toBe(6);
  expect(newList[1].count).toBe(2);
  expect(newList[2].count).toBe(1);
});

test("remove item with 1 count from list", () => {
  const newList = RemoveOneItemFromList(list, { id: "item3" });
  expect(newList.length).toBe(2);
  expect(newList[0].count).toBe(7);
  expect(newList[1].count).toBe(2);
});
