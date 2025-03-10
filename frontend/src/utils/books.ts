import { Book, Discount } from "../types";

export const calculateDiscount = (book: Book): number => {
  let totalDiscount = 0;
  book.discounts.forEach((discount: Discount) => {
    totalDiscount += discount.discount;
  });
  return totalDiscount;
};
export const calculatePricePerDay = (book: Book): number => {
  let totalPrice = Number(book.rental_price);
  let totalDiscount = calculateDiscount(book);
  return totalPrice - totalPrice * (totalDiscount / 100);
};

export const calculatePricePerPeriod = (book: Book, period: number): number => {
  return calculatePricePerDay(book) * period;
};
