import { useState, useEffect } from "react";

function Home() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/home/")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
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
      {homeData.length === 0 && (
        <p style={{ textAlign: "center", color: "#555" }}>Loading content...</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
        }}
      >
        {homeData.map((item) => (
          <div
            key={item.id}
            style={{
              background: "linear-gradient(145deg, #ffffff, #e3f2fd)",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
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
                fontSize: "clamp(22px, 3vw, 28px)",
              }}
            >
              {item.title}
            </h2>

            {item.description && (
              <p
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: "1.8",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                {item.description
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

            {item.image && (
              <img
                src={
                  item.image.startsWith("http")
                    ? item.image
                    : `http://127.0.0.1:8000${item.image}`
                }
                alt={item.title}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
