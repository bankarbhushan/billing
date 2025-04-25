import React from "react";

const WhatsAppButton = () => {
  return (
    <button
      className="bg-green-600 text-white px-6 py-2 cursor-pointer rounded shadow hover:bg-green-600"
      onClick={() => {
        const number = form.phone?.replace(/[^0-9]/g, ""); // Clean the number
        if (!number) return alert("फोन नंबर दिलेला नाही");

        const message = encodeURIComponent(
          `🌿 *माऊली भाजी भांडार बिल* 🌿\n\n` +
            `${
              userType === "farmer"
                ? `🧑‍🌾 *शेतकरी नाव:* ${form.farmerName}`
                : `🧑‍🌾 *व्यापारी नाव:* ${form.farmerName}`
            }\n` +
            `📞 *फोन नंबर:* ${form.phone}\n` +
            `📅 *दिनांक:* ${form.date} (${form.day})\n\n` +
            `📦 *भाजी माहिती:* \n` +
            products
              .map(
                (p, i) =>
                  `${i + 1}. ${p.name} - ${p.weight}kg x ₹${
                    p.rate
                  } = ₹${p.total.toFixed(0)}`
              )
              .join("\n") +
            `\n\n` +
            `*एकूण:* ₹${grandTotal.toFixed(0)}\n` +
            `नगदी: ₹${parseFloat(form.advance || 0).toFixed(0)}\n` +
            `पट्टी: ₹${parseFloat(form.vehicleCost || 0).toFixed(0)}\n` +
            `इतर शेतकरी माल: ₹${parseFloat(form.otherFarmerCost || 0).toFixed(
              0
            )}\n` +
            `----------------------------\n` +
            `*अंतिम रक्कम:* ₹${netTotal.toFixed(0)}`
        );

        const url = `https://wa.me/91${number}?text=${message}`;
        window.open(url, "_blank");
      }}
    >
      WhatsApp ने पाठवा
    </button>
  );
};

export default WhatsAppButton;
