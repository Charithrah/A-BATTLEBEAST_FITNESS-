import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // IMPORTANT: Replace this with your Render backend URL after deployment
  const API_URL = "https://your-render-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      alert(data.message || "Submitted successfully!");

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  const packages = [
    { name: "1 Month", price: "₹2,500", validity: "30 days" },
    { name: "3 Months", price: "₹6,500", validity: "90 days" },
    { name: "1 Year", price: "₹20,000", validity: "365 days" },
  ];

  const trainers = [
    { name: "Raj Kumar", specialty: "Strength Training", experience: "8+ Years" },
    { name: "Priya Singh", specialty: "Cardio & Fat Loss", experience: "6+ Years" },
    { name: "Arun Patel", specialty: "Personal Training", experience: "10+ Years" },
  ];

  const reviews = [
    {
      name: "Amit Sharma",
      rating: 5,
      review:
        "Best gym in Coimbatore! Clean equipment, supportive trainers, and great atmosphere. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Transformed my fitness journey here. The trainers are professional and the facility is world-class.",
    },
    {
      name: "Ravi Patel",
      rating: 4,
      review:
        "Great experience. Very affordable pricing and excellent trainer guidance. Worth every penny!",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      review:
        "Amazing community here. The gym is well-maintained and the staff is very helpful and motivating.",
    },
  ];

  return (
    <div className="app">

      {/* HERO */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>BATTLE BEAST FITNESS STUDIO</h1>
          <p>Train Hard. Transform Strong.</p>
          <p>Build strength, endurance, and a better lifestyle</p>
        </div>
      </div>

      {/* LOCATION */}
      <section className="location-section">
        <div className="location-content">
          <div className="location-text">
            <h2>📍 Our Location</h2>
            <p><strong>Kunniyamuthur, Coimbatore, Tamil Nadu</strong></p>

            <a
              href="https://maps.app.goo.gl/aqSgRk7rVyyYvj4A8"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              View on Google Maps
            </a>
          </div>

          <div className="location-images">
            <img src="/image8.jpg" alt="Gym Equipment" />
            <img src="/image2.jpg" alt="Training Area" />
            <img src="/images.jpg" alt="Fitness Facility" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <h2>About Battle Beast Fitness Studio</h2>
        <p>
          Modern gym with professional equipment, clean environment, and expert trainers.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-card">🏋️ Modern Equipment</div>
          <div className="feature-card">✨ Clean Environment</div>
          <div className="feature-card">👨‍🏫 Expert Trainers</div>
          <div className="feature-card">💪 Personalized Plans</div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages-section">
        <h2>Membership Plans</h2>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <h3>{pkg.name}</h3>
              <p>{pkg.price}</p>
              <p>{pkg.validity}</p>

              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="trainers-section">
        <h2>Expert Trainers</h2>

        <div className="trainers-grid">
          {trainers.map((t, i) => (
            <div key={i} className="trainer-card">
              <h3>{t.name}</h3>
              <p>{t.specialty}</p>
              <p>{t.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <p>{"⭐".repeat(r.rating)}</p>
              <p>"{r.review}"</p>
              <p>- {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>📞 9363070998</p>
      </section>

      {/* FORM */}
      <section className="form-section">
        <h2>Join Our Community</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2024 Battle Beast Fitness Studio</p>
      </footer>
    </div>
  );
}

export default App;