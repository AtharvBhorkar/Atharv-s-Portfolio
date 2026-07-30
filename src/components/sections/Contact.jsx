import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin, Clock, User, Tag, MessageSquare, ShieldCheck, Check } from "lucide-react";
import { fadeUp, fadeIn, viewportOnce } from "../../utils/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        "service_dcezl7z",
        "template_k21026p",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "RKjYcDsWHpsLMXTZ0"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isEmailValid =
    formData.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const inputBaseClass =
    "w-full bg-neutral-900/60 border rounded-xl pl-16 pr-4 py-3 text-white text-sm font-sans placeholder:font-normal placeholder:tracking-wide placeholder-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-200";

  return (
    <section
      id="contact"
      className="relative w-full bg-neutral-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <span className="h-px w-8 bg-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
            Contact
          </span>
          <span className="h-px w-8 bg-cyan-400" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Let's Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Together
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-center text-sm md:text-base mb-12 max-w-xl mx-auto"
        >
          Have a project in mind or just want to say hi? Fill out the form
          below and I'll get back to you as soon as possible.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          <div className="relative bg-neutral-900/50 backdrop-blur-sm p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full border border-cyan-500/30 bg-cyan-500/5 shrink-0"
                style={{ boxShadow: "0 0 20px rgba(34,211,238,0.25)" }}
              >
                <Send size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-white text-xl font-semibold leading-snug">
                Let's Build Something{" "}
                <span className="text-cyan-400">Amazing</span> Together
              </h3>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              I'm open to exciting opportunities, collaborations, or just a
              friendly chat about your ideas.
            </p>

            <div className="h-px w-full bg-neutral-800 mb-6" />

            <p className="text-blue-400 text-sm font-semibold mb-4">
              Reach Me On
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/5 shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </span>
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-neutral-400 text-xs">atharvbhorkar19@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-500/30 bg-teal-500/5 shrink-0">
                  <MapPin size={16} className="text-teal-400" />
                </span>
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-neutral-400 text-xs">Nagpur, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/30 bg-purple-500/5 shrink-0">
                  <Clock size={16} className="text-purple-400" />
                </span>
                <div>
                  <p className="text-white text-sm font-medium">Response Time</p>
                  <p className="text-neutral-400 text-xs">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative bg-neutral-950/60 backdrop-blur-sm p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-cyan-300 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center border-r border-neutral-800 text-neutral-500">
                    <User size={16} />
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`${inputBaseClass} ${
                      errors.name
                        ? "border-red-500/60 focus:ring-red-500/30"
                        : "border-neutral-800 focus:ring-cyan-500/40"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-cyan-300 text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <span className="absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center border-r border-neutral-800 text-neutral-500">
                    <Mail size={16} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail id"
                    className={`${inputBaseClass} ${
                      errors.email
                        ? "border-red-500/60 focus:ring-red-500/30"
                        : "border-neutral-800 focus:ring-cyan-500/40"
                    }`}
                  />
                  {isEmailValid && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-400">
                      <Check size={12} />
                    </span>
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block text-cyan-300 text-sm font-medium mb-2"
              >
                Subject
              </label>
              <div className="relative">
                <span className="absolute left-0 top-0 bottom-0 w-14 flex items-center justify-center border-r border-neutral-800 text-neutral-500">
                  <Tag size={16} />
                </span>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`${inputBaseClass} ${
                    errors.subject
                      ? "border-red-500/60 focus:ring-red-500/30"
                      : "border-neutral-800 focus:ring-cyan-500/40"
                  }`}
                />
              </div>
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-cyan-300 text-sm font-medium mb-2"
              >
                Message
              </label>
              <div className="relative">
                <span className="absolute left-0 top-3 w-14 flex items-center justify-center text-neutral-500">
                  <MessageSquare size={16} />
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputBaseClass} resize-none ${
                    errors.message
                      ? "border-red-500/60 focus:ring-red-500/30"
                      : "border-neutral-800 focus:ring-cyan-500/40"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-neutral-950 text-sm font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <span className="flex items-center gap-1.5 text-neutral-500 text-xs">
                <ShieldCheck size={14} />
                Your information is safe with me.
              </span>
            </div>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-4"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-4"
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;