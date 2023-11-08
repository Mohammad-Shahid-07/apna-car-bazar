import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="p-8 md:p-16 bg-dark-secondary">
      <div className="max-w-4xl mx-auto">
        <h1 className="h1-heading font-bold mb-4">
          Privacy Policy for apnacarbazar.in
        </h1>

        <p className="text-sm md:text-base mb-4">
          <em>Last Updated: 08/11/2023</em>
        </p>

        <p className="para-1 mb-8">
          At apnacarbazar.in, we are committed to protecting your privacy and
          ensuring a safe browsing experience. This Privacy Policy explains how
          we handle information, even though we do not collect or track user
          data. By accessing and using our website, you agree to the terms
          outlined in this policy.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Information We Do Not Collect:
        </h2>
        <ol className="list-decimal pl-4 para-1 mb-8">
          <li>
            <strong>Personal Information:</strong> We do not collect any
            personal information such as names, email addresses, or phone
            numbers.
          </li>
          <li>
            <strong>User Tracking:</strong> We do not engage in any user
            tracking, data analytics, or any form of data collection that would
            identify individual users.
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Third-Party Services:
        </h2>
        <p className="para-1 mb-8">
          We may use third-party services or tools, such as Google Analytics, to
          improve the performance and functionality of our website. These third
          parties may have their own privacy policies. Please refer to their
          respective policies for information on how they collect and handle
          data.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Cookies:</h2>
        <p className="para-1 mb-8">
          We may use cookies to ensure the basic functionality of our website,
          such as session management and user preferences. Cookies are small
          text files stored on your device. You can adjust your browser settings
          to disable cookies if you choose.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us:</h2>
        <p className="para-1 mb-8">
          If you have any questions or concerns about your privacy when using
          our website, please contact us at{" "}
          <Link
            href="mailto:Pb89209@gmail.com"
            target="_blank"
            className="text-prime"
          >
            Pb89209@gmail.com
          </Link>
          . We are here to address any inquiries you may have.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Changes to this Privacy Policy:
        </h2>
        <p className="para-1">
          We reserve the right to make changes to this Privacy Policy. Any
          revisions will be posted on this page, and the date of the last update
          will be modified accordingly. By continuing to use apnacarbazar.in,
          you acknowledge and agree to any changes made to this Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
