import { createArray } from "@/utils";
import names from "./name.json";

const ramdom = (max: number) => {
  return Math.floor(Math.random() * max);
};

const createUser = (id: number) => {
  const index: number = ramdom(names.length - 1);
  return {
    id: `user__${index}__${id}`,
    name: names[index],
    balance: 1000.25 * index,
    email: `${names[index]}${index}@gmail.com`,
    registerAt: new Date(),
    active: index % 2 === 0,
  };
};

const createUsers = (length: number) => {
  const newArray = createArray(length);

  return newArray.map((item) => createUser(item));
};

export { createUser, createUsers };
