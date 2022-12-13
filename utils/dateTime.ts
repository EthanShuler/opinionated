export const formatDate = (date: string) => {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8)

  return `${month}/${day}/${year}`
}

export const formatTime = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60

  return `${hours}h ${minutes}m`
}