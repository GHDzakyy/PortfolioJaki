// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Integrasi dengan Formspree
  const [state, handleSubmit] = useForm("mvgorpqg");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Menampilkan alert setelah pengiriman sukses menggunakan useEffect
  useEffect(() => {
    if (state.succeeded) {
      alert("Message sent successfully! Thank you for contacting us.");
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative h-screen flex items-center justify-center bg-[#3581B8]">
      {/* Background bulat */}
      <div className="absolute left-0 w-[140vh] h-[100vh] bg-[#D9D9D9] rounded-full -translate-x-1/2" />

      {/* Kontainer utama untuk memisahkan teks dan formulir */}
      <div className="relative z-10 flex w-full max-w-7xl px-10 gap-40">
        {/* Konten teks di sebelah kiri */}
        <div className="flex-1 text-[#2D2D2D]">
          <h1 className="font-bold text-6xl mb-4 mt-48">Contact Me</h1>
          <p className="mb-4 leading-relaxed text-start">
            Email, call, or complete the form to learn how I can solve your design problem.
          </p>
          <p>@_dzakysupp on IG</p>
          <p>+62 8xx xxxx xxxx</p>
        </div>

        {/* Formulir */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-4xl font-bold text-[#2D2D2D] mb-6 text-center">Tell Us!</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 bg-[#CCCCCC] rounded-lg focus:outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 bg-[#CCCCCC] rounded-lg focus:outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 bg-[#CCCCCC] rounded-lg focus:outline-none"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 bg-[#CCCCCC] rounded-lg focus:outline-none h-32 resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-4 bg-[#3581B8] text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
