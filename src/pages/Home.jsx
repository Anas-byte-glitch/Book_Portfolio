import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../sections/Hero/HeroSection';
import Bestsellers from '../sections/Bestsellers/Bestsellers';
import AboutAuthor from '../sections/About/AboutAuthor';
import BookPreview from '../sections/BookPreview/BookPreview';
import Features from '../sections/Features/Features';
import ChapterLessons from '../sections/Chapters/ChapterLessons';
import Testimonials from '../sections/Testimonials/Testimonials';
import StoreLinks from '../sections/Pricing/StoreLinks';
import BlogGrid from '../sections/Blog/BlogGrid';
import FinalCTA from '../sections/CTA/FinalCTA';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Bestsellers />
      <AboutAuthor />
      <BookPreview />
      <Features />
      <ChapterLessons />
      <Testimonials />
      <StoreLinks />
      <BlogGrid />
      <FinalCTA />
    </MainLayout>
  );
}
