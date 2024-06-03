export const priceRu = (price: number): string => {
  return price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽')
}

export const getTotalCount = (count: number): string => {
  if (count < 10) {
    return `0${count}`
  }
  return `${count}`
}
