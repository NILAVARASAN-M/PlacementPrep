import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const messagesEndRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const predefinedPrompts = [
    "How do I get started?",
    "What features are available?",
    "Can you help with troubleshooting?",
    "Tell me about pricing options",
    "Explain Big Data" // Added explanation prompt
  ];

  useEffect(() => {
    // Set initial position to bottom right
    setPosition({
      x: window.innerWidth - 240,
      y: window.innerHeight - 120
    });
  }, []);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      };
      
      const handleMouseUp = (e) => {
        setIsDragging(false);
        
        // Check if this was a click (minimal movement) or a drag
        const moveDistance = Math.sqrt(
          Math.pow(e.clientX - dragStartPos.x, 2) + 
          Math.pow(e.clientY - dragStartPos.y, 2)
        );
        
        // If movement was minimal (less than 5px), treat as a click
        if (moveDistance < 5) {
          toggleChat();
        }
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, dragStartPos]);

  const handleMouseDown = (e) => {
    if (dragRef.current && dragRef.current.contains(e.target)) {
      // Don't start dragging if the click was on the collapse button
      if (e.target.closest('button[data-action="collapse"]')) {
        return;
      }
      
      setIsDragging(true);
      // Store the starting position for later comparison
      setDragStartPos({
        x: e.clientX,
        y: e.clientY
      });
      
      const rect = dragRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      e.preventDefault();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = (e) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  // Function to detect if the message is requesting an explanation
  const isExplanationRequest = (text) => {
    const lowerText = text.toLowerCase();
    return lowerText.startsWith('explain') || lowerText.includes('what is') || lowerText.includes('tell me about');
  };

  // Function to fetch explanation from API
  const fetchExplanation = async (query) => {
    setIsLoadingExplanation(true);
    try {
      const res = await axios.post("http://localhost:5002/api/explain", {
        code: query,
        language: "", // You can add language selection in the UI if needed
      });
      return res.data.explanation;
    } catch (err) {
      console.error("Error fetching explanation:", err);
      return "Sorry, I couldn't fetch an explanation at this time. Please try again later.";
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  const sendMessage = async (text) => {
    if (text.trim() === '') return;
    
    // Add user message to chat
    setChatMessages([...chatMessages, { text, isUser: true }]);
    
    // Clear input
    setMessage('');
    
    // Add typing indicator
    setChatMessages(prev => [...prev, { isLoading: true, isUser: false }]);
    
    // Check if it's an explanation request
    if (isExplanationRequest(text)) {
      const explanation = await fetchExplanation(text);
      
      // Remove typing indicator and add bot response
      setChatMessages(prev => prev.filter(msg => !msg.isLoading).concat([
        { text: explanation, isUser: false }
      ]));
    } else {
      // For non-explanation requests, just echo back (or implement other logic)
      setTimeout(() => {
        setChatMessages(prev => prev.filter(msg => !msg.isLoading).concat([
          { text, isUser: false }
        ]));
      }, 500);
    }
  };

  const handlePromptClick = (prompt) => {
    sendMessage(prompt);
  };

  const refreshChat = () => {
    setChatMessages([]);
  };

  // Styling constants
  const primaryColor = '#4F46E5'; // Indigo
  const secondaryColor = '#818CF8'; // Lighter indigo
  const lightGray = '#F3F4F6';
  const darkGray = '#4B5563';
  const white = '#FFFFFF';
  const boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  const transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

  return (
    <div 
      className="chatbot-container" 
      style={{ 
        position: 'fixed', 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        zIndex: 1000,
        transition: isDragging ? 'none' : transition
      }}
    >
      {/* Chat window - now appears above the toggle bar */}
      {isOpen && (
        <div 
          className="chat-window"
          style={{
            position: 'absolute',
            bottom: '50px', // Position above the toggle bar instead of below
            right: '0',
            width: '350px',
            height: '500px',
            backgroundColor: white,
            borderRadius: '12px',
            boxShadow,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: `1px solid ${lightGray}`,
            transition
          }}
        >
          {/* Chat header */}
          <div 
            className="chat-header"
            style={{
              backgroundColor: primaryColor,
              color: white,
              padding: '16px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              Smart Assistant
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Refresh button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  refreshChat();
                }}
                title="Refresh chat"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: white,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93434 9.50481 3.35677C8.04437 3.77921 6.71475 4.56471 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Close button */}
              <button 
                onClick={toggleChat}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: white,
                  cursor: 'pointer'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          {/* Chat messages */}
          <div 
            className="chat-messages"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#F9FAFB'
            }}
          >
            {/* Welcome message and predefined prompts */}
            {chatMessages.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div 
                  style={{
                    backgroundColor: lightGray,
                    color: darkGray,
                    padding: '12px 16px',
                    borderRadius: '12px 12px 12px 0',
                    maxWidth: '85%',
                    alignSelf: 'flex-start',
                    fontSize: '14px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}
                >
                  👋 Hi there! How can I assist you today? You can type your question or select one of the options below. Try asking me to explain a concept!
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {predefinedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt)}
                      style={{
                        backgroundColor: white,
                        border: `1px solid ${lightGray}`,
                        borderRadius: '8px',
                        padding: '10px 12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: darkGray,
                        fontWeight: '500',
                        fontSize: '13px',
                        transition,
                        maxWidth: '85%',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Chat conversation */}
            {chatMessages.map((msg, index) => (
              msg.isLoading ? (
                // Typing indicator
                <div 
                  key={index}
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: lightGray,
                    color: darkGray,
                    padding: '12px 16px',
                    borderRadius: '12px 12px 12px 0',
                    maxWidth: '85%',
                    fontSize: '14px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : (
                // Regular message
                <div 
                  key={index} 
                  className={`chat-message ${msg.isUser ? 'user-message' : 'bot-message'}`}
                  style={{
                    alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
                    backgroundColor: msg.isUser ? primaryColor : lightGray,
                    color: msg.isUser ? white : darkGray,
                    padding: '12px 16px',
                    borderRadius: msg.isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
                    maxWidth: '85%',
                    wordBreak: 'break-word',
                    fontSize: '14px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    animation: 'fadeIn 0.3s'
                  }}
                >
                  {msg.text}
                </div>
              )
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Chat input */}
          <form 
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              padding: '12px 16px',
              borderTop: `1px solid ${lightGray}`,
              backgroundColor: white
            }}
          >
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message or ask for an explanation..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '50px',
                border: `1px solid ${lightGray}`,
                marginRight: '10px',
                outline: 'none',
                fontSize: '14px'
              }}
              disabled={isLoadingExplanation}
            />
            <button
              type="submit"
              disabled={isLoadingExplanation}
              style={{
                backgroundColor: primaryColor,
                color: white,
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: isLoadingExplanation ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition,
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                opacity: isLoadingExplanation ? 0.7 : 1
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      {/* Chat toggle bar */}
      <div 
        ref={dragRef}
        className="chat-toggle-bar"
        onMouseDown={handleMouseDown}
        style={{
          backgroundColor: primaryColor,
          color: white,
          padding: isCollapsed ? '12px' : '12px 20px',
          borderRadius: '50px',
          cursor: isDragging ? 'grabbing' : 'grab',
          boxShadow,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: '600',
          transition: isDragging ? 'none' : transition,
          width: isCollapsed ? 'auto' : '220px',
          fontSize: '14px'
        }}
      >
        {!isCollapsed && (
          <span style={{ marginRight: '10px', userSelect: 'none' }}>Click This to Assist You</span>
        )}
        <button 
          data-action="collapse"
          onClick={toggleCollapse} 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: white,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            transition
          }}
        >
          {isCollapsed ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        
        .typing-indicator span {
          height: 8px;
          width: 8px;
          margin: 0 2px;
          background-color: #9CA3AF;
          border-radius: 50%;
          display: inline-block;
          opacity: 0.6;
        }
        
        .typing-indicator span:nth-child(1) {
          animation: pulse 1s infinite 0s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation: pulse 1s infinite 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation: pulse 1s infinite 0.4s;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotUI;