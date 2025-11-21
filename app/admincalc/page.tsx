"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, DollarSign } from "lucide-react"

export default function AdminCalculator() {
  const [totalAmount, setTotalAmount] = useState<string>("1500")
  const [frequency, setFrequency] = useState<"monthly" | "biweekly">("monthly")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [payment, setPayment] = useState<number | null>(null)

  const calculatePayment = () => {
    const amount = parseFloat(totalAmount)
    if (!amount || !startDate || !endDate) {
      setPayment(null)
      return
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    if (end <= start) {
      setPayment(null)
      return
    }

    // Calculate difference in days
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    let periods: number
    if (frequency === "monthly") {
      periods = Math.ceil(diffDays / 30)
    } else {
      periods = Math.ceil(diffDays / 14)
    }

    if (periods <= 0) {
      setPayment(amount)
    } else {
      setPayment(amount / periods)
    }
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    calculatePayment()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-neutral-800">
            Advanced Payment Calculator
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Customize your payment plan with flexible options for consultation purposes
          </p>
        </div>

        <form onSubmit={handleCalculate} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
          <div className="space-y-6">
            {/* Total Amount */}
            <div>
              <label htmlFor="total-amount" className="block text-base sm:text-lg font-medium text-neutral-800 mb-3">
                Total Package Amount
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={20}
                />
                <input
                  type="number"
                  id="total-amount"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  min="0"
                  step="0.01"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors text-neutral-800 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Payment Frequency */}
            <div>
              <label className="block text-base sm:text-lg font-medium text-neutral-800 mb-3">
                Payment Frequency
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`px-4 py-3 border-2 rounded-lg transition-all text-sm sm:text-base font-medium ${
                    frequency === "monthly"
                      ? "border-neutral-800 bg-neutral-800 text-white"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("biweekly")}
                  className={`px-4 py-3 border-2 rounded-lg transition-all text-sm sm:text-base font-medium ${
                    frequency === "biweekly"
                      ? "border-neutral-800 bg-neutral-800 text-white"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300"
                  }`}
                >
                  Bi-weekly
                </button>
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label htmlFor="start-date" className="block text-base sm:text-lg font-medium text-neutral-800 mb-3">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors text-neutral-800 text-sm sm:text-base"
                  required
                />
                <Calendar
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label htmlFor="end-date" className="block text-base sm:text-lg font-medium text-neutral-800 mb-3">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors text-neutral-800 text-sm sm:text-base"
                  required
                />
                <Calendar
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 sm:py-4 px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              Calculate Payment Plan
            </button>
          </div>

          {/* Results */}
          {payment !== null && (
            <div className="mt-8 bg-gradient-to-br from-neutral-800 to-neutral-700 text-white rounded-lg p-6 sm:p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-neutral-300">
                Your {frequency === "monthly" ? "Monthly" : "Bi-weekly"} Payment
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-2">${payment.toFixed(2)}</p>
              <p className="text-neutral-300 text-sm sm:text-base">
                {frequency === "monthly" ? "Per month" : "Every two weeks"} to reach your ${totalAmount} investment
              </p>
            </div>
          )}

          {!payment && startDate && endDate && (
            <div className="mt-8 text-center py-6 sm:py-8 text-neutral-500">
              <p className="text-sm sm:text-base">Click calculate to see your payment plan</p>
            </div>
          )}
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm text-neutral-500">Admin calculator for consultation purposes</p>
        </div>
      </div>
    </div>
  )
}
