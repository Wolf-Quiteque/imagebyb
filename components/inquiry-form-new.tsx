"use client"

import type React from "react"

import { useState } from "react"

export default function InquiryFormNew() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDate: "",
    weddingVenue: "",
    weddingGuestCount: "",
    weddingBudget: "",
    couplesBudget: "",
    couplestheme: "",
    eventsType: "",
    otherDetails: "",
    additionalNotes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.serviceType) newErrors.serviceType = "Please select a service"
    if (formData.serviceType && !formData.eventDate) newErrors.eventDate = "Event date is required"

    if (formData.serviceType === "wedding") {
      if (!formData.weddingVenue.trim()) newErrors.weddingVenue = "Venue is required"
      if (!formData.weddingGuestCount.trim()) newErrors.weddingGuestCount = "Guest count is required"
    } else if (formData.serviceType === "couples") {
      if (!formData.couplestheme.trim()) newErrors.couplestheme = "Theme/vibe is required"
    } else if (formData.serviceType === "events") {
      if (!formData.eventsType.trim()) newErrors.eventsType = "Event type is required"
    } else if (formData.serviceType === "other") {
      if (!formData.otherDetails.trim()) newErrors.otherDetails = "Please describe your inquiry"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      eventDate: "",
      weddingVenue: "",
      weddingGuestCount: "",
      weddingBudget: "",
      couplesBudget: "",
      couplestheme: "",
      eventsType: "",
      otherDetails: "",
      additionalNotes: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-pretty">ImageryBYB Inquiry Form</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">
              Submit your inquiry and we'll be in touch to begin your photography journey!
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">We typically respond within 24-48 hours during business days.</p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Professional consultation</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Custom package options</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">Premium editing & Online gallery</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 order-1 md:order-2">
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your inquiry! We'll be in touch soon.
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors text-sm sm:text-base ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors text-sm sm:text-base ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors text-sm sm:text-base ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors text-sm sm:text-base ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="(000) 000-0000"
              />
              {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold mb-2">What are you inquiring about?</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors bg-white text-sm sm:text-base ${
                  errors.serviceType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="couples">Together Forever Session (Couples + Engagement)</option>
                <option value="events">Events</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.serviceType}</p>}
            </div>

            {/* Event Date */}
            {formData.serviceType && (
              <div>
                <label className="block text-sm font-semibold mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:border-black transition-colors text-sm sm:text-base ${
                    errors.eventDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.eventDate && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.eventDate}</p>}
              </div>
            )}

            {formData.serviceType === "wedding" && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Wedding Venue</label>
                  <input
                    type="text"
                    name="weddingVenue"
                    value={formData.weddingVenue}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black transition-colors ${
                      errors.weddingVenue ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="e.g., The Grand Ballroom"
                  />
                  {errors.weddingVenue && <p className="text-red-500 text-sm mt-1">{errors.weddingVenue}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Guest Count</label>
                    <input
                      type="number"
                      name="weddingGuestCount"
                      value={formData.weddingGuestCount}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black transition-colors ${
                        errors.weddingGuestCount ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Approximate count"
                    />
                    {errors.weddingGuestCount && (
                      <p className="text-red-500 text-sm mt-1">{errors.weddingGuestCount}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Budget (Optional)</label>
                    <input
                      type="text"
                      name="weddingBudget"
                      value={formData.weddingBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="e.g., $3000-5000"
                    />
                  </div>
                </div>
              </>
            )}

            {formData.serviceType === "couples" && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Theme/Vibe</label>
                  <input
                    type="text"
                    name="couplestheme"
                    value={formData.couplestheme}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black transition-colors ${
                      errors.couplestheme ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="e.g., Romantic, Fun, Intimate, Adventurous"
                  />
                  {errors.couplestheme && <p className="text-red-500 text-sm mt-1">{errors.couplestheme}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Location (Optional)</label>
                  <input
                    type="text"
                    name="couplesBudget"
                    value={formData.couplesBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g., Outdoor, Studio, Downtown"
                  />
                </div>
              </>
            )}

            {formData.serviceType === "events" && (
              <div>
                <label className="block text-sm font-semibold mb-2">What type of event?</label>
                <input
                  type="text"
                  name="eventsType"
                  value={formData.eventsType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black transition-colors ${
                    errors.eventsType ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., Corporate, Birthday, Graduation, Proposal"
                />
                {errors.eventsType && <p className="text-red-500 text-sm mt-1">{errors.eventsType}</p>}
              </div>
            )}

            {formData.serviceType === "other" && (
              <div>
                <label className="block text-sm font-semibold mb-2">Tell us about your inquiry</label>
                <textarea
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black transition-colors ${
                    errors.otherDetails ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Describe what you're looking for..."
                  rows={3}
                />
                {errors.otherDetails && <p className="text-red-500 text-sm mt-1">{errors.otherDetails}</p>}
              </div>
            )}

            {/* Additional Notes */}
            {formData.serviceType && (
              <div>
                <label className="block text-sm font-semibold mb-2">Additional Notes (Optional)</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Tell us anything else we should know..."
                  rows={3}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-2.5 sm:py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
