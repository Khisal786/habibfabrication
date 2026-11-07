document.addEventListener("DOMContentLoaded", () => {
  const rfqForm = document.getElementById("rfqForm");

  if (rfqForm) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("clientName").value.trim();
      const email = document.getElementById("clientEmail").value.trim();
      const phone = document.getElementById("clientPhone").value.trim();
      const material = document.getElementById("materialSelect").value;
      const thickness = document.getElementById("thicknessSelect").value.trim();
      const quantity = document.getElementById("quantityInput").value.trim();
      const notes = document.getElementById("projectNotes").value.trim();

      // Format WhatsApp Message Payload for Habib Blacksmith & Aluminum Co.
      const message = 
        `*New B2B RFQ Inquiry - Habib Blacksmith & Aluminum Co.*%0A%0A` +
        `*Name/Company:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Material & Range:* ${encodeURIComponent(material)}%0A` +
        `*Thickness:* ${encodeURIComponent(thickness)}%0A` +
        `*Quantity:* ${encodeURIComponent(quantity)}%0A` +
        `*Specifications:* ${encodeURIComponent(notes)}`;

      // Target Habib's Direct WhatsApp Number (+966 59 444 7801)
      const whatsappNumber = "966594447801";
      
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

      // Open WhatsApp Dispatch
      window.open(whatsappURL, "_blank");
    });
  }
});