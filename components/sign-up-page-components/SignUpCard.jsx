import React from 'react';
import Link from 'next/link';

function SignUpCard() {
  return (
    <section
      className="sign-up-card w-full xsm:w-[350px] mx-auto py-10 px-6 rounded dark:border"
      style={{ boxShadow: '0 0 26px -10px rgba(50, 50, 50, 0.4)' }}
    >
      <form action="#" className="sign-in-form">
        <div className="input-wrapper flex flex-col">
          <label htmlFor="fullName" className="montserrat text-[13px]">
            Email Address
          </label>
          <input
            className="custom--input w-full py-2 px-4 mt-2 rounded"
            type="email"
            name="user-email"
            id="userEmail"
          />
        </div>
        <div className="input-wrapper flex flex-col mt-4">
          <label htmlFor="fullName" className="montserrat text-[13px]">
            Password
          </label>
          <input
            className="custom--input w-full py-2 px-4 mt-2 mb-2 rounded"
            type="email"
            name="user-email"
            id="userEmail"
          />
          {/* <span className="text--colors_primary text-[14px]">forgot password?</span> */}
        </div>
        <div className="input-wrapper flex flex-col mt-4">
          <label htmlFor="fullName" className="montserrat text-[13px]">
            Confirm password
          </label>
          <input
            className="custom--input w-full py-2 px-4 mt-2 mb-2 rounded"
            type="email"
            name="user-email"
            id="userEmail"
          />
          {/* <span className="text--colors_primary text-[14px]">forgot password?</span> */}
        </div>
        <Link href="/account">
          <a>
            <button
              // type="submit"
              type="button"
              className="montserrat btn--colors_regular mt-6 w-full font-bold py-3 px-4 rounded"
            >
              Create account
            </button>
          </a>
        </Link>
      </form>
    </section>
  );
}

export default SignUpCard;
