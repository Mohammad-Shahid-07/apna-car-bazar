import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <section className="p-8 md:p-16 bg-dark-secondary">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="h1-heading  font-bold mb-4">
          Terms and Conditions for apnacarbazar.in
        </h1>

        <p className="text-sm md:text-base mb-4">
          <em>Last Updated: 08/11/2023</em>
        </p>

        <p className="text-base para-2">
          By accessing and using apnacarbazar.in, you agree to abide by the
          following terms and conditions.
        </p>
        <div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            1. Use of Content:
            </h2>
            <p className="text-base para-2 mb-8">
            All content on this website, including text, images, and media, is
            protected by copyright. Users are not permitted to reproduce,
            distribute, or use any content from this website without prior written
            consent.
            </p>
        </div>
        <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          2. Compliance with Laws:
        </h2>
        <p className="text-base para-2 mb-8">
          Users are expected to comply with all applicable laws and regulations
          when using this website. Any unlawful or malicious activities are
          strictly prohibited.
        </p>
        </div>
        <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          3. Website Availability:
        </h2>
        <p className="text-base para-2 mb-8">
          This website is provided "as is," and we make no warranties regarding
          its availability, accuracy, or suitability for any purpose. We reserve
          the right to modify or discontinue the website at any time.
        </p>
        </div>
        <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          4. Acceptance of Terms:
        </h2>
        <p className="text-base para-2">
          By using apnacarbazar.in, you acknowledge and agree to these terms and
          conditions.
        </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
