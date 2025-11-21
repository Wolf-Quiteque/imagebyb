"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

export default function BudgetPlanner() {
  const [weddingDate, setWeddingDate] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)

  const calculateMonthlyPayment = (date: string) => {
    if (!date) {
      setMonthlyPayment(null)
      return
    }

    const wedding = new Date(date)
    const today = new Date()

    // Calculate difference in months
    const months = (wedding.getFullYear() - today.getFullYear()) * 12 + (wedding.getMonth() - today.getMonth())

    if (months <= 0) {
      setMonthlyPayment(1500) // If date is in the past or current month, show full amount
    } else {
      setMonthlyPayment(1500 / months)
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setWeddingDate(date)
    calculateMonthlyPayment(date)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-neutral-800">Wedding Photography Budget Planner</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Our wedding photography packages start at just{" "}
            <span className="font-semibold text-neutral-800">$1,500</span>. Plan your budget by seeing how much you'd
            need to save each month leading up to your big day.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
          <div className="mb-6 sm:mb-8">
            <label htmlFor="wedding-date" className="block text-base sm:text-lg font-medium text-neutral-800 mb-3">
              When is your wedding date?
            </label>
            <div className="relative">
              <input
                type="date"
                id="wedding-date"
                value={weddingDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors text-neutral-800 text-sm sm:text-base"
              />
              <Calendar
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {monthlyPayment !== null && (
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 text-white rounded-lg p-6 sm:p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-neutral-300">Your Monthly Payment Plan</p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-2">${monthlyPayment.toFixed(2)}</p>
              <p className="text-neutral-300 text-sm sm:text-base">
                Save this amount each month to reach your $1,500 photography investment
              </p>
            </div>
          )}

          {!weddingDate && (
            <div className="text-center py-6 sm:py-8 text-neutral-500">
              <p className="text-sm sm:text-base">Select your wedding date above to calculate your monthly savings plan</p>
            </div>
          )}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-neutral-600">
            Ready to book your date?{" "}
            <a href="#inquiry" className="font-semibold text-neutral-800 hover:underline">
              Get in touch today
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
