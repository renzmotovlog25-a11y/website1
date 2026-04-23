import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden border border-white/5">
          <div className="grid md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 bg-blue-600 text-white">
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-blue-100 mb-12 text-lg">
                Have a project in mind or just want to talk bikes? Drop me a message!
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email Me At</p>
                    <p className="font-semibold">renzmotovlog25@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="font-semibold">Laguna, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Hey Renz, I love your videos!"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
