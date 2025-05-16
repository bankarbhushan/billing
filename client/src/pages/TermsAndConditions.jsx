import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Terms & Conditions
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          1. Introduction
        </h2>
        <p className="text-gray-600">
          Welcome to Mauli Print Billing System. By accessing or using our
          platform, you agree to be bound by these Terms and Conditions. If you
          do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          2. User Responsibilities
        </h2>
        <p className="text-gray-600">
          Users must ensure that all information provided is accurate and
          up-to-date. Any misuse of the system or fraudulent activities will
          result in account termination.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          3. Service Usage
        </h2>
        <p className="text-gray-600">
          Our system is intended for billing and invoicing purposes only.
          Unauthorized use of the platform for other purposes is strictly
          prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          4. Payment & Billing
        </h2>
        <p className="text-gray-600">
          All payments made through the system are final. Please review all
          details carefully before processing any transactions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          5. Termination
        </h2>
        <p className="text-gray-600">
          We reserve the right to suspend or terminate access to the system at
          any time for violations of these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          6. Changes to Terms
        </h2>
        <p className="text-gray-600">
          We may modify these Terms and Conditions at any time. Continued use of
          the system after changes constitutes acceptance of those changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          For questions or concerns about these Terms and Conditions, please
          contact us at support@mauliprint.com.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
