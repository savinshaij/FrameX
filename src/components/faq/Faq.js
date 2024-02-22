import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden w-full  pb-12 pt-20 dark:bg-[#ffffff09] lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-gray-100 text-gray-900 sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-gray-700">
                There are many variations of passages of quwstions available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How do I create an account on your platform?"
              text=" To create an account, click on the 'Sign Up' button on the homepage. Fill in the required information, and follow the instructions to verify your email.
              "
            />
            <AccordionItem
              header="How can I search for job opportunities on your platform?"
              text="Use the search bar on the homepage to enter keywords, location, or job titles. You can also browse through categories or use advanced filters for a more specific search.
              "
            />
            <AccordionItem
              header="How do I apply for a job? 
              "
              text="Once you find a suitable job listing, click on it to view the details. If interested, click the 'Apply Now' button and follow the application process specified by the employer"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What should I include in my profile to stand out to employers? 
              "
              text="Complete your profile with accurate and detailed information about your education, skills, work experience, and any relevant certifications. Upload a professional-looking photo and write a compelling bio.
              "
            />
            <AccordionItem
              header=" What should I do if I forget my password? 
              "
              text="Click on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email to reset your password.
              "
            />
            <AccordionItem
              header="How do I report a technical issue or seek assistance?"
              text=" Visit the 'Support' or 'Contact Us' page to find information on reporting technical issues. You can also reach out to our support team via email or live chat for assistance."
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-2xl bg-[#ffffff14] border-[0.5px] dark:border-[#ffffff4a] border-[#3333337a] p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold dark:text-white ">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
};
