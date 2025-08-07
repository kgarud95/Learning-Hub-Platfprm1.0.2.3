import React from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import CourseCategories from './components/CourseCategories';
import TrendingCourses from './components/TrendingCourses';
import ProfessionalCertificates from './components/ProfessionalCertificates';
import InstructorSpotlight from './components/InstructorSpotlight';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Header />
      <Hero />
      <TrustedBy />
      <CourseCategories />
      <TrendingCourses />
      <ProfessionalCertificates />
      <InstructorSpotlight />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;