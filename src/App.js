import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    const res = await fetch("http://127.0.0.1:8000/submit", {
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
    setSubmitted(true);
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
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>BATTLE BEAST FITNESS STUDIO</h1>
          <p>Train Hard. Transform Strong.</p>
          <p>Build strength, endurance, and a better lifestyle</p>
        </div>
      </div>

      {/* LOCATION & AMBIENCE */}
      <section className="location-section">
        <div className="location-content">
          <div className="location-text">
            <h2>📍 Our Location</h2>
            <p>
              <strong>Kunniyamuthur, Coimbatore, Tamil Nadu</strong>
            </p>
            <p>
              Experience premium fitness facilities in a vibrant and welcoming
              environment. Our gym is strategically located for easy access with
              ample parking.
            </p>

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
          Battle Beast Fitness Studio is a modern and well-equipped gym designed
          with state-of-the-art equipment and a motivating atmosphere. We
          provide a clean, hygienic, and spacious workout environment where
          fitness enthusiasts can achieve their goals with professional guidance
          and community support.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="features-section">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">🏋️</span>
            <h3>Modern Equipment</h3>
            <p>
              State-of-the-art training equipment for all fitness levels
            </p>
          </div>

          <div className="feature-card">
            <span className="icon">✨</span>
            <h3>Clean Environment</h3>
            <p>Hygienic and well-maintained facilities</p>
          </div>

          <div className="feature-card">
            <span className="icon">👨‍🏫</span>
            <h3>Expert Trainers</h3>
            <p>Knowledgeable and supportive fitness professionals</p>
          </div>

          <div className="feature-card">
            <span className="icon">💪</span>
            <h3>Personalized Plans</h3>
            <p>Customized workout and diet programs</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2>Our Services</h2>

        <div className="services-list">
          <div className="service-item">
            Weight Training & Muscle Building
          </div>

          <div className="service-item">
            Cardio & Fat Loss Programs
          </div>

          <div className="service-item">
            Strength & Endurance Training
          </div>

          <div className="service-item">
            Personal Training Sessions
          </div>

          <div className="service-item">
            Customized Diet & Fitness Guidance
          </div>

          <div className="service-item">
            Group Fitness Classes
          </div>
        </div>
      </section>

      {/* GYM PACKAGES */}
      <section className="packages-section">
        <h2>Membership Plans</h2>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <h3>{pkg.name}</h3>

              <div className="package-price">{pkg.price}</div>

              <p className="package-validity">{pkg.validity}</p>

              <p className="package-note">
                Offer valid for full payment
              </p>

              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="trainers-section">
        <h2>Expert Trainers</h2>

        <p className="section-subtitle">
          Our certified trainers provide guidance, proper posture, motivation,
          and personalized fitness plans
        </p>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <h3>{trainer.name}</h3>

              <p className="trainer-specialty">
                {trainer.specialty}
              </p>

              <p className="trainer-experience">
                Experience: {trainer.experience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="review-text">
                "{review.review}"
              </p>

              <p className="review-author">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h2>Get In Touch</h2>

        <p className="contact-phone">
          📞 Phone: 9363070998
        </p>
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
            className="form-input"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          &copy; 2024 Battle Beast Fitness Studio. All rights reserved.
        </p>

        <p>
          Kunniyamuthur, Coimbatore | Phone: 9363070998
        </p>
      </footer>
    </div>
  );
}

export default App;