export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDateEST(date) {
    const options = {
        timeZone: 'America/New_York',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
    const partMap = Object.fromEntries(parts.map(p => [p.type, p.value]));

    const day = getOrdinal(parseInt(partMap.day));
    const formatted = `${partMap.weekday} ${partMap.month} ${day} ${partMap.year}, ${partMap.hour}:${partMap.minute}:${partMap.second}`;
    return formatted;
}

// Example usage:
const currentTime = new Date()



  return res.status(200).json({
    currentTime
  })
}
