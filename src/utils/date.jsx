import { MONTHS_LIST } from "./list";

export const convertDate = (time) => {
    const date = new Date(time); 

    const year = date.getFullYear();
    const month = MONTHS_LIST[date.getMonth()];
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    return `${year}-${month}-${day}`;
  };