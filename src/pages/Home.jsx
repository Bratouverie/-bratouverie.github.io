import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ProjectsSection from "../components/landing/ProjectsSection";
import TrainingSection from "../components/landing/TrainingSection";
import GuaranteesSection from "../components/landing/GuaranteesSection";
import StepsSection from "../components/landing/StepsSection";
import RewardsSection from "../components/landing/RewardsSection";
import ReviewsSection from "../components/landing/ReviewsSection";
import FAQSection from "../components/landing/FAQSection";
import CTAFormSection from "../components/landing/CTAFormSection";
import ContactsSection from "../components/landing/ContactsSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="font-body">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TrainingSection />
      <GuaranteesSection />
      <StepsSection />
      <RewardsSection />
      <ReviewsSection />
      <FAQSection />
      <CTAFormSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}