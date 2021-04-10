export const parseDate = date => {
  const d = new Date(date)
  const day = d.getDate()
  const month = d.toLocaleString("en-GB", { month: "short" })
  const year = d.getFullYear().toString().slice(2)
  return `${month} ${day}, ${year}`
}