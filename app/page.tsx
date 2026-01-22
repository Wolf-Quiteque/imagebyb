import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import PortfolioNew from "@/components/portfolio-new"
import Services from "@/components/services"
import AboutNew from "@/components/about-new"
import TestimonialsNew from "@/components/testimonials-new"
import ProcessNew from "@/components/process-new"
import BudgetPlanner from "@/components/budget-planner"
import InquiryFormNew from "@/components/inquiry-form-new"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <PortfolioNew />
      <Services />
      <AboutNew />
      <TestimonialsNew />
      <ProcessNew />
      {/* <BudgetPlanner /> */}
      <InquiryFormNew />
      <Footer />
    </main>
  )
}
