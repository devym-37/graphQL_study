export const people = [
  {
    id: "1",
    name: "Young",
    age: 20,
    gender: "male",
  },
  {
    id: "2",
    name: "lee",
    age: 21,
    gender: "male",
  },
  {
    id: "3",
    name: "min",
    age: 22,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
};
