import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = ({ theme = "#3b82f6" }) => {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_f98ta9b", 
            "template_bktad65", 
            formRef.current,
            "DZFjT8fKzeiWJKR4k"
        )
        .then(
            () => {
                setStatus("Message sent successfully!");
                e.target.reset();
            },
            (error) => {
                setStatus("Failed to send message. Try again.");
                console.error(error);
            }
        );
    };

    return (
        <div className="bg-[#171717] text-amber-50 flex flex-col gap-4 py-6 px-6 border border-white rounded-lg">
            <h1 className="text-xl">Let's start working together!</h1>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">
                <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Your Name" 
                    required
                    className="px-3 py-2 bg-gray-800 text-white border border-gray-500 rounded-md"
                />
                <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Your Email" 
                    required
                    className="px-3 py-2 bg-gray-800 text-white border border-gray-500 rounded-md"
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="4" 
                    required
                    className="px-3 py-2 bg-gray-800 text-white border border-gray-500 rounded-md"
                ></textarea>

                <button
                    type="submit"
                    className="py-2 px-4 rounded-md transition-colors duration-300"
                    style={{
                        backgroundColor: theme,
                        color: "#ffffff",
                        border: `1px solid ${theme}`,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.opacity = "1";
                    }}
                >
                    Send Message
                </button>
            </form>

            {status && <p className="text-green-400">{status}</p>}
        </div>
    );
};

export default ContactMe;
