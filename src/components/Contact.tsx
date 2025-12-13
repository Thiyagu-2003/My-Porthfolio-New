import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const headingAnimation = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/thiyaguscloud@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("There was an error sending your message. Please try again or email directly.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headingAnimation.ref} className={`text-center mb-16 scroll-animate ${headingAnimation.isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively seeking entry-level opportunities in cloud computing
            and AWS
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* LEFT - Contact Info */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <Mail className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    thiyaguscloud@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <Phone className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8015113607
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="mr-4 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <MapPin className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chennai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/thiyagu-s-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Thiyagu-2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918015113607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21l1.7-4.8a9 9 0 1 1 3.3 3.2L3 21z" />
                    <path d="M16.7 13.4c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1c-.2.2-.6.7-.7.8s-.3.2-.5.1c-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.2-.5.1-.1.2-.3.3-.4.1-.2.1-.3.2-.5 0-.2 0-.4 0-.5s-.5-1.4-.7-1.9c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.7 2.6 4.2 3.6.6.2 1.1.4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.3-.9.2-.4.2-.8.2-.9 0-.1-.1-.2-.3-.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {submitSuccess && (
              <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                <p>Thanks for your message! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.name
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-700"
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.email
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-700"
                      } bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.message
                      ? "border-red-500 dark:border-red-400"
                      : "border-gray-300 dark:border-gray-700"
                    } bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
