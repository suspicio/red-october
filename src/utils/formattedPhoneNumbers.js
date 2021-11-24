export function russianNoPrefix (number) {
  if (number) {
    number = number.toString()

    if (number.length === 10) {
      return `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}`
    }
  }
  return number
}
