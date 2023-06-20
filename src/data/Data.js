const books = [
  {
    name: "The Road",
    number: 21,
    amount: "50$",
    due: "19/06/2023",
  },
  {
    name: "Private Moscow",
    number: 22,
    amount: "65$",
    due: "30/08/2019",
  },
  {
    name: "Perfect Together",
    number: 23, 
    amount: "71$",
    due: "24/06/2003",
  },
  {
    name: "Identity",
    number: 24,
    amount: "43$",
    due: "27/06/2013",
  },
  {
    name: "Inside Threat",
    number: 25,
    amount: "17$",
    due: "11/05/2018",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find(book => book.number === number);
};
