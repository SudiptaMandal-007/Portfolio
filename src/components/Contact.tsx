import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { Send, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';


interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;



    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mandalsudipta968@gmail.com',
      link: 'mailto:mandalsudipta968@gmail.com',
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9733953078',
      link: 'tel:+91973953078',
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, India',
      link: null,
      color: 'text-red-500',
    },
  ];
  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/Mr.SudiptaMandal007',
      color: 'hover:text-[#1877F2]',
      bgColor: 'hover:bg-[#F0F7FF] dark:hover:bg-[#1E2F40]',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/_sudipta_mandal007/',
      color: 'hover:text-[#E4405F]',
      bgColor: 'hover:bg-[#FFF2F4] dark:hover:bg-[#3B2A2E]',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sudipta-mandal-267907223/',
      color: 'hover:text-[#0077B5]',
      bgColor: 'hover:bg-[#F2FAFD] dark:hover:bg-[#223645]',
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com',
      color: 'hover:text-[#5865F2]',
      bgColor: 'hover:bg-[#F2F3FF] dark:hover:bg-[#2F3255]',
    },
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 cursor-hover-scale">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities, projects, or just having a chat with me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cursor-hover-scale">
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`group flex items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-hover-scale ${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <item.icon className={`h-6 w-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={`text-lg font-bold transition-colors ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-hover-scale ${darkMode ? 'bg-gray-900 text-gray-400 hover:bg-gray-800' : 'bg-white text-gray-600 hover:bg-gray-50'} ${social.color} ${social.bgColor}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-lg cursor-hover-scale ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:scale-105 cursor-hover-scale ${darkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:scale-105 cursor-hover-scale ${darkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:scale-105 cursor-hover-scale ${darkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:scale-105 cursor-hover-scale resize-none ${darkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className={`inline-flex items-center justify-center rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-300 cursor-pointer ${darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
