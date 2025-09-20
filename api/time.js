export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let currentTime = new Date().toISOString()

  return res.status(200).json({ 
    currentTime
   })
}
