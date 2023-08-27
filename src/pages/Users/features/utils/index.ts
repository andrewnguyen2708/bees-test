import { IUser } from "@/Type/Users";
import dayjs from "dayjs";

const sortByName = (array: IUser[]) => {
  const newArray = [...array];
  return newArray.sort((prev: IUser, next: IUser) => {
    const namePrev: string = prev.name.toUpperCase();
    const nameNext: string = next.name.toUpperCase();
    if (namePrev > nameNext) {
      return 1;
    }
    if (namePrev < nameNext) {
      return -1;
    }

    return 0;
  });
};

const sortByBalance = (array: IUser[]) => {
  const newArray = [...array];
  return newArray.sort(
    (prev: IUser, next: IUser) => prev.balance - next.balance
  );
};

const sortByDate = (array: IUser[]) => {
  const newArray = [...array];
  return newArray.sort((prev: IUser, next: IUser) => {
    const prevDate = dayjs(prev.registerAt);
    const nextDate = dayjs(next.registerAt);
    return prevDate.diff(nextDate);
  });
};

export { sortByBalance, sortByDate, sortByName };
