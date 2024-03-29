import React from 'react';
import Socials from '../Socials';
import NewsletterSection from '../NewsletterSection';

function Footer() {
  return (
    <footer className="border-t pt-16 pb-24 sm:py-32 px-3 sm:px-8 flex flex-col mt-12 xl:px-20">
      <section className="flex flex-col lg:flex-row justify-between w-full md:flex-wrap">
        <div className="mb-20 md:w-1/2 lg:w-2/12">
          <div className="brand italic text--colors_primary montserrat text-3xl font-bold md:w-1/2 lg:w-1/3">
            tilo.
          </div>
          <div className="mt-3 md:mt-4">
            <Socials />
          </div>
        </div>
        <div className="menu-items flex justify-between gap-x-4 md:w-1/2 lg:w-1/3">
          <div>
            <h4 className="text--colors_primary font-bold text-base">Services</h4>
            <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
              <li>Crypto</li>
              <li>Forex</li>
              <li>Stocks</li>
              <li>Exchange</li>
            </ul>
          </div>
          <div>
            <h4 className="text--colors_primary font-bold text-base">Help</h4>
            <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
              <li>FAQs</li>
              <li>Security</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="text--colors_primary font-bold text-base">Transparency</h4>
            <ul className="flex flex-col gap-y-3 pt-4 text-[12px]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <NewsletterSection />
      </section>
      <div className="mt-24 text-center text--colors_secondary text-[14px] w-full">
        APIs by{' '}
        <a href="https://coingecko.com" className="text--colors_primary">
          coingecko
        </a>
      </div>
    </footer>
  );
}

export default Footer;
