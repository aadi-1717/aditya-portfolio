import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const serviceId = "service_zeajo3e";
  const templateId = "template_egr9fga";
  const publicKey = "ZnH0KKp-M6KMZ7cOu";

  const handleSubmit = (el) => {
    el.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, el.target, {publicKey: publicKey})
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try  again..");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(el) => {
                  setFormData({ ...formData, name: el.target.value });
                }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(el) => {
                  setFormData({ ...formData, email: el.target.value });
                }}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="your message.."
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(el) => {
                  setFormData({ ...formData, message: el.target.value });
                }}
              />
            </div>
            <button
              type="submit"
              required
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
