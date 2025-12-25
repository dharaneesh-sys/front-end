import { useState } from "react";

export default function ConnectWithUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("Thank you. Our team will contact you shortly.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="connect-light">
      <div className="connect-wrapper">
        {/* LEFT CONTENT */}
        <div className="connect-info">
          <h1>Tell Us About Your Project</h1>

          <p className="connect-sub">
            We collaborate with farmers, agri-businesses, and supply-chain
            partners to reduce food waste, improve logistics, and build a more
            sustainable food system.
          </p>

          <ul className="connect-points">
            <li>Response within 24 hours</li>
            <li>Data privacy & NDA available</li>
            <li>Focused on real agricultural impact</li>
          </ul>

          <div className="cause-box">
            <h3>🌾 Why FarmAlert?</h3>
            <p>
              A significant portion of food loss occurs after harvest due to
              delayed decisions and inefficient routing. FarmAlert helps
              producers detect surplus early and move it efficiently reducing
              waste while increasing value across the supply chain.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form className="connect-form-light" onSubmit={handleSubmit}>
          <div className="row">
            <input
              name="firstName"
              placeholder="First name*"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last name*"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              name="email"
              type="email"
              placeholder="Email address*"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Phone number*"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project or challenge*"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit inquiry</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

