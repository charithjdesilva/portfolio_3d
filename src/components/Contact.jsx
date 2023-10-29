import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { mail, linkedIn } from "../assets";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_n4ifa5f",
        "template_rjycyi4",
        {
          from_name: form.name,
          to_name: "Charith",
          // from_email: form.email,
          reply_to: form.email,
          to_email: "charithjdesilva@gmail.com",
          message: form.message,
        },
        "2YkMoJWcRWy8lA6-a"
      )
      .then(() => {
        setLoading(false),
          alert("Thank you! I will get back to you as soon as possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);

            console.log(error);

            alert("Something went wrong.");
          }
        );
      });
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border border-blue-500 hover:bg-white hover:text-blue-800"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <p className={`flex justify-center my-3 ${styles.sectionSubText}`}>
          Or, contact me via
          <br />
        </p>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("mailto:charithjdesilva@gmail.com", "_blank")
            }
            className="black p-2 m-2 w-12 h-12 rounded-full border border-blue-500 flex justify-center items-center cursor-pointer hover:bg-blue-500"
          >
            <img
              src={mail}
              alt="Gmail"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/charith-jayodya-de-silva-918115197/",
                "_blank"
              )
            }
            className="black p-2 m-2 w-12 h-12 rounded-full border border-blue-500 flex justify-center items-center cursor-pointer hover:bg-blue-500"
          >
            <img
              src={linkedIn}
              alt="LinkedIn"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
