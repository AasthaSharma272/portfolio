'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can replace this with your email service, backend route, or API call
    console.log('Submitted:', form);
    alert('Thank you! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-6">
        Contact Me 🤝
      </h2>

      <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
        Whether you have a question, idea, or opportunity — I’d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-all"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-all"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-all resize-none"
        />
        <button
          type="submit"
          className="inline-block border border-transparent text-indigo-500 bg-indigo-100 px-6 py-2 hover:border-indigo-500 hover:border rounded-full transition-all text-sm font-medium"
        >
          Send Message
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-12 text-2xl">
        <a
          href="https://github.com/AasthaSharma272"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-amber-500 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aasthasharma272/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-amber-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:aastha.sharma@mail.utoronto.ca"
          className="text-black hover:text-amber-500 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.youtube.com/@codewithaastha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-amber-500 transition-colors"
          aria-label="YouTube">
            <FaYoutube />
          </a>
      </div>
    </section>
  );
}
