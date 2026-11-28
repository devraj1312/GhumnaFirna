
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TravelImage from "../../assets/himachal.png"

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import "./AboutContact.scss";

function AboutContact() {
  const location = useLocation();
  const enquiryCategory = location.state?.category || "";
  const enquiryDescription = location.state?.description || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const category = formData.get("category");
    const description = formData.get("description");

    const message = `
      Hello GhumnaFirna!

      I want to make an enquiry.

      *Customer Details*
      Name: ${name}
      Phone: ${phone}
      Category: ${category}

      *Enquiry Details*
      ${description}

      Thank you.
    `.trim();

    // GhumnaFirna WhatsApp number
    const whatsappNumber = "918450811911";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Clear form fields
    form.reset();
    // Explicitly clear category and description
    form.elements.namedItem("category").value = "";
    form.elements.namedItem("description").value = "";
  };

  // Scroll to the requested section when navigating with a URL hash
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content about-contact-page">

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">

          <div className="about-content">
            <span className="section-tag">ABOUT GHUMNAFIRNA</span>

            <h1>
              Every Journey Has a Story.
              <span> Let's Make Yours Memorable.</span>
            </h1>

            <p className="about-description">
              At GhumnaFirna, we believe every journey should be
              comfortable, memorable and hassle-free. Whether you're
              planning a spiritual visit, a family vacation or a
              weekend getaway, we're here to make your travel easier.
            </p>

            <p>
              From hotel bookings and comfortable cab services to
              carefully planned travel packages, we bring your
              travel needs together in one place.
            </p>

            <div className="about-actions">
              <Link to="/packages" className="primary-btn">
                Explore Packages <span>→</span>
              </Link>

              <a href="#contact" className="secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-main">
              <div className="about-image-placeholder">
                {/* <span>YOUR TRAVEL IMAGE</span> */}
                <img src={TravelImage} />
              </div>
            </div>

            <div className="about-highlight">
              <strong>Travel Made Simple</strong>
              <span>Explore more. Worry less.</span>
            </div>
          </div>

        </div>

        <div className="about-features">
          <div>
            <span>01</span>
            <h3>Easy Bookings</h3>
            <p>Simple and convenient travel planning.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Comfortable Travel</h3>
            <p>Make every journey more comfortable.</p>
          </div>

          <div>
            <span>03</span>
            <h3>All-in-One Service</h3>
            <p>Packages, hotels and cab services together.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-container">

          <div className="contact-info">
            <span className="section-tag">CONTACT US</span>

            <h2>
              Let's Plan Your
              <span> Next Journey</span>
            </h2>

            <p className="contact-description">
              Have a question or need help planning your trip?
              Get in touch with us. Our team will be happy to help.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Ujjain, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 8450-811-911</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>support@ghumnafirna.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday – Saturday</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Fill out the form and we'll get back to you.</p>
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    required
                  />
                </div>

                <div className="form-row">
                  <select
                    name="category"
                    defaultValue={enquiryCategory}
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>

                    <option value="Darshan">Darshan</option>
                    <option value="Cab">Cab</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Package">Package</option>
                    <option value="Heritage">Heritage</option>
                  </select>
                </div>

                <textarea
                  name="description"
                  placeholder="Tell us how we can help you..."
                  rows="7"
                  defaultValue={enquiryDescription}
                  readOnly={Boolean(enquiryDescription)}
                  required
                />

                <button type="submit" className="primary-btn">
                  Send Message <FaPaperPlane />
                </button>
              </form>
          </div>

        </div>
      </section>
      {/* LOCATION MAP */}
      <div className="contact-map">
        <iframe
          title="GhumnaFirna Location - Ujjain"
          src="https://www.google.com/maps?q=Ujjain,Madhya+Pradesh,India&output=embed"
          width="100%"
          height="600px"
          style={{ border: 0, display: "block"}}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutContact;
