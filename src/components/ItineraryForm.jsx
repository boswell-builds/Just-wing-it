import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from './Toast.jsx'

export default function ItineraryForm() {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    guestNames: "",
    businessName: "",
    website: "",
    instagram: "",
    tiktok: "",
    facebook: ""
  })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      // Swap this with your actual n8n webhook URL
      // const res = await fetch('https://YOUR-N8N-WEBHOOK', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
      // if (!res.ok) throw new Error('Webhook failed')
      await new Promise(r => setTimeout(r, 600)) // demo delay
      toast.show("Submitted! We’ll draft your itinerary shortly.")
      setForm({ name:"", guestNames:"", businessName:"", website:"", instagram:"", tiktok:"", facebook:"" })
    } catch (err) {
      toast.show("Could not submit — check your connection and try again.", "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="card p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold">Your details</h2>
      <p className="text-sm opacity-70 mb-4">We’ll use this to generate your itinerary.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name">
          <input value={form.name} onChange={update('name')} placeholder="Jane Doe" required />
        </Field>
        <Field label="Guest names (optional)">
          <input value={form.guestNames} onChange={update('guestNames')} placeholder="John, Mia" />
        </Field>
        <Field label="Business name">
          <input value={form.businessName} onChange={update('businessName')} placeholder="PEI Lobster Tours" />
        </Field>
        <Field label="Website URL">
          <input type="url" value={form.website} onChange={update('website')} placeholder="https://example.com" />
        </Field>
        <Field label="Instagram">
          <input value={form.instagram} onChange={update('instagram')} placeholder="@handle" />
        </Field>
        <Field label="TikTok">
          <input value={form.tiktok} onChange={update('tiktok')} placeholder="@handle" />
        </Field>
        <Field label="Facebook">
          <input value={form.facebook} onChange={update('facebook')} placeholder="Page link" />
        </Field>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Generate itinerary"}
        </button>
        <span className="text-sm opacity-70">Submits to your n8n webhook.</span>
      </div>
    </motion.form>
  )
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold">{label}</label>
      {children}
    </div>
  )
}
