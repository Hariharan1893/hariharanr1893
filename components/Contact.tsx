'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Message Sent Successfully!!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center lg:items-start gap-6 lg:w-1/3"
        >
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#7b61ff] to-[#ff69b4] bg-clip-text">
            Let&apos;s Connect!
          </h2>

          <p className="text-lg text-[#d1c1e8]/80">
            Feel free to reach out to me via any of these platforms.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/hariharanr18/"
              target="_blank"
              className="flex items-center gap-3 text-lg text-[#d1c1e8] hover:text-[#7b61ff] transition"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
            <a
              href="https://github.com/Hariharan1893"
              target="_blank"
              className="flex items-center gap-3 text-lg text-[#d1c1e8] hover:text-[#7b61ff] transition"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>
            <a
              href="mailto:hariramesh1893@gmail.com"
              className="flex items-center gap-3 text-lg text-[#d1c1e8] hover:text-[#7b61ff] transition"
            >
              <FaEnvelope className="text-2xl" /> Email
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-lg text-[#d1c1e8] hover:text-[#7b61ff] transition"
            >
              <FaPhone className="text-2xl" /> +91 9342510436
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-[#1a1a2e] p-8 rounded-3xl shadow-xl lg:w-2/3 w-full"
        >
          <h2 className="text-3xl font-bold text-[#d1c1e8] mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 bg-[#24243e] border border-white/10 rounded-lg focus:border-[#7b61ff] outline-none text-[#d1c1e8]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 bg-[#24243e] border border-white/10 rounded-lg focus:border-[#7b61ff] outline-none text-[#d1c1e8]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-4 bg-[#24243e] border border-white/10 rounded-lg focus:border-[#7b61ff] outline-none text-[#d1c1e8]"
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="w-full py-4 rounded-lg bg-[#7b61ff] text-white font-semibold shadow-lg 
                         hover:bg-[#5a3ec8] transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
