import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      await response.json();
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Check console for details.");
    }
  };

  // Your coordinates (from IP: 162.120.188.235)
  const latitude = 9.03;
  const longitude = 38.74;

  return (
    <div
      style={{
        padding: "40px",
        background: "linear-gradient(to bottom, #f9f9f9, #e0f7fa)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Map with Marker */}
        <div
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            title="Company Location"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ color: "#0D6EFD", marginBottom: "25px", textAlign: "center" }}>
            Contact Us
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                margin: "10px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                margin: "10px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                margin: "10px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
                minHeight: "120px",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "12px 25px",
                marginTop: "15px",
                backgroundColor: "#0D6EFD",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              Send Message
            </button>
          </form>

          {status && (
            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: status.includes("successfully") ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
