import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'maram.kouki@supcom.tn',
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    })
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Failed to send' })
  }
}
