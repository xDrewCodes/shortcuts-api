export default async function time(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' })
    }

    return res.status(200).json({
        'success'
    })
}