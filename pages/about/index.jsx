import React from 'react';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import AboutContent from '../../components/about-page-components/AboutContent';

function AboutPage() {
  return (
    <MainAppLayout>
      <main className="px-3 w-full xsm:w-10/12 xsm:mx-auto lg:w-3/5 md:mt-6">
        <h1 className="text-center text--colors_primary text-3xl md:text-4xl mb-4 font-bold">
          About Tilo
        </h1>
        <AboutContent />
      </main>
    </MainAppLayout>
  );
}

export default AboutPage;
