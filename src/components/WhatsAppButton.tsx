
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the WhatsApp button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const phoneNumber = "+919407882260"; // Replace with actual WhatsApp number
  const message = "Hello, I'm interested in your accounting services. Can you provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500 transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    )}>
      {/* Chat Popup */}
      <div className={cn(
        "absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 transform origin-bottom-right",
        isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
      )}>
        <div className="bg-primary text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">WhatsApp Chat</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-4">
            Hello! 👋 How can we help you with your accounting and CA needs? Chat with us on WhatsApp for quick assistance.
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 bg-[#25D366] hover:bg-[#1fb956] text-white text-center rounded-md transition-colors"
          >
            Start Chat
          </a>
        </div>
      </div>
      
      {/* Button */}
      <button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1fb956] transition-all",
          isOpen ? "rotate-0" : "rotate-0",
          "animate-float"
        )}
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className={cn(
          "h-6 w-6 transition-all duration-300",
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )} />
        <X className={cn(
          "h-6 w-6 absolute transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
