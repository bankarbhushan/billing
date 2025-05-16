import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Refund & Cancellation Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          1. No Refund Policy
        </h2>
        <p className="text-gray-600">
          All payments made to Mauli Print Billing System are final. We do not
          offer refunds once a transaction is completed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          2. Cancellation Policy
        </h2>
        <p className="text-gray-600">
          Users may cancel their subscription at any time. However, cancellation
          will only prevent the next billing cycle; no refunds will be issued
          for the current or past billing cycles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          3. Dispute Resolution
        </h2>
        <p className="text-gray-600">
          In case of any payment-related disputes, users are encouraged to
          contact our support team at support@mauliprint.com. We will do our
          best to resolve the issue.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          4. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about our Refund & Cancellation Policy,
          please contact us at support@mauliprint.com.
        </p>
      </section>
    </div>
  );
};

export default RefundCancellationPolicy;
