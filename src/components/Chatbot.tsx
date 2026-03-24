import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPaperPlane, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';

import { haptics } from '../utils/haptics';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Greetings seeker! How can the cosmos guide you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    haptics.medium();
    const newMsgs = [...messages, { text: input, isBot: false }];
    setMessages(newMsgs);
    setInput('');
    
    // Mock bot response
    setTimeout(() => {
      setMessages([...newMsgs, { text: "The alignment of the stars suggests a period of patience. Your inquiry is being decoded by the Nakath engine...", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 h-[450px] bg-[var(--midnight)] border border-[var(--panel-border)] shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] p-4 flex justify-between items-center">
              <div className="flex items-center gap-3 text-[var(--midnight)]">
                <FontAwesomeIcon icon={faRobot} />
                <span className="font-cinzel text-xs font-bold tracking-widest uppercase">Ask the Cosmos</span>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  haptics.light();
                }} 
                className="text-[var(--midnight)]/60 hover:text-[var(--midnight)]"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[var(--panel-bg)] scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[80%] p-3 text-[0.7rem] font-poppins shadow-lg ${msg.isBot ? 'bg-[var(--panel-bg)] text-[var(--text-main)] self-start border border-[var(--panel-border)]' : 'bg-[var(--gold)]/10 text-[var(--gold)] self-end border border-[var(--gold)]/20'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[var(--panel-border)] bg-[var(--midnight)]">
               <div className="flex gap-2">
                 <Input 
                   placeholder="Ask about your Nakath..." 
                   className="bg-[var(--panel-bg)] border-[var(--panel-border)] text-[var(--text-main)] placeholder:text-[var(--text-dim)]/40 text-xs"
                   value={input}
                   onChange={e => setInput(e.target.value)}
                   onPressEnter={sendMessage}
                 />
                 <Button type="primary" className="bg-[var(--gold)] border-none text-[var(--midnight)]" onClick={sendMessage}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                 </Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          haptics.medium();
        }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] text-[var(--midnight)] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faCommentDots} className="text-xl" />
      </button>
    </div>
  );
};
