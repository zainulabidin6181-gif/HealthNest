import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMassage } from "react-icons/tb";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
export default function RobotChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am Zain Ul Abidin. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your message! We will get back to you shortly." }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button with infinite up-down animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -10, 0] }} // up-down animation
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="fixed bottom-5 right-0 md:right-5 bg-lime-600 text-white p-5 rounded-full shadow-lg hover:bg-lime-700 z-50 flex items-center justify-center"
      >
        {/* Robot / Message Icon */}
        <span className="text-4xl"><ChatBubbleBottomCenterIcon className="w-10 h-10" /></span> {/* Icon size bada */}
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-lime-600 text-white p-3 font-semibold flex justify-between items-center">
              RoboBot Chat
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-lg p-2 max-w-[70%] ${
                      msg.sender === "user" ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-2 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-lime-600 text-white px-3 py-1 rounded-lg hover:bg-lime-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
