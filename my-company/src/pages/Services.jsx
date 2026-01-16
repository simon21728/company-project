import { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div
      style={{
        padding: "50px 20px",
        background: "linear-gradient(to bottom, #f0f4f8, #e0f7fa)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0D6EFD", marginBottom: "30px" }}>
        Our Services
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
        }}
      >
        {services.length > 0 ? (
          services.map((s) => (
            <div
              key={s.id}
              style={{
                background: "linear-gradient(145deg, #ffffff, #e3f2fd)",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              <h2
                style={{
                  color: "#0D6EFD",
                  marginBottom: "15px",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                }}
              >
                {s.name}
              </h2>

              {s.description && (
                <p
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    lineHeight: "1.8",
                    color: "#333",
                  }}
                >
                  {s.description
                    .split("**")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <span key={index}>
                        {line.trim()}
                        <br />
                      </span>
                    ))}
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>Loading services...</p>
        )}
      </div>
    </div>
  );
}

export default Services;
