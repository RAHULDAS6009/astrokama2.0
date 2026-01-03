"use client";
import { Header } from "@/components/common/Header";
import CourseHero from "@/components/CourseHero";
import AboutModernAstrology from "@/components/AboutModernAstrology";
import WhyChooseModernAstrology from "@/components/WhyChooseModernAstrology";
import AllBatchesAndCourse from "@/components/AllBatchesAndCourse";

const CoursePage = () => {
  return (
    <div className="bg-primary w-full overflow-x-hidden">
      <Header />
      <main>
        <CourseHero />
        <AboutModernAstrology />
        <WhyChooseModernAstrology />
        <AllBatchesAndCourse />
      </main>
    </div>
  );
};

export default CoursePage;
