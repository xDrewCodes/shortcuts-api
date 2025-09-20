export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"]
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    const dayOfWeek = days[date.getDay()]
    const month = months[date.getMonth()]
    const day = getOrdinal(date.getDate())
    const year = date.getFullYear()

    const hours = (date.getHours() - 4).toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${dayOfWeek} ${month} ${day} ${year}, ${hours}:${minutes}:${seconds}`
  }
  const currentTime = formatDate(new Date())


  return res.status(200).json({
    currentTime
  })
}
