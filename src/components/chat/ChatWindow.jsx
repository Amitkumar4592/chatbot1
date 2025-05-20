import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Smile, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWindow.module.css';

// Dummy data for messages
const initialMessages = {
  1: [
    { id: 1, text: "Hello! I'm having trouble with my account. Can you help me understand the billing cycle?", sender: 'customer', time: '10:32 AM' },
    { id: 2, text: "Hi Sarah, I'd be happy to help you understand our billing cycle. What specific questions do you have?", sender: 'agent', time: '10:34 AM' },
    { id: 3, text: "I'm confused about when I get charged. The website says it's monthly, but I seem to be getting charged every 28 days.", sender: 'customer', time: '10:36 AM' },
    { id: 4, text: "That's a great question. Our billing cycle is based on a 28-day cycle rather than a calendar month. This means you'll be charged approximately 13 times a year instead of 12.", sender: 'agent', time: '10:40 AM' },
  ],
  2: [
    { id: 1, text: "Thanks for your help earlier. One more question about the integration with our CRM system.", sender: 'customer', time: '9:15 AM' },
    { id: 2, text: "You're welcome, David! I'd be happy to help with your CRM integration question. What would you like to know?", sender: 'agent', time: '9:20 AM' },
  ],
};

// Dummy AI suggestions
const aiSuggestions = [
  "I understand your concern. Our billing works on a 28-day cycle, which means you'll be charged approximately 13 times per year rather than monthly.",
  "Let me look into this for you. Can you please provide your account email so I can check the specific details of your billing cycle?",
  "You're right to notice this difference. The 28-day cycle helps us maintain consistent service periods regardless of calendar month length."
];

const ChatWindow = ({ conversationId }) => {
  const [messages, setMessages] = useState(initialMessages[conversationId] || []);
  const [newMessage, setNewMessage] = useState('');
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Use the correct messages when conversationId changes
  useEffect(() => {
    setMessages(initialMessages[conversationId] || []);
    // Simulate customer typing after loading conversation
    if (conversationId) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [conversationId]);

  // Show AI suggestions a moment after conversation loads
  useEffect(() => {
    if (conversationId) {
      const timer = setTimeout(() => {
        setShowAiSuggestions(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [conversationId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'agent',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    setShowAiSuggestions(false);
    
    // Simulate customer typing response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Show AI suggestions again after a pause
        setTimeout(() => {
          setShowAiSuggestions(true);
        }, 1000);
      }, 3000);
    }, 2000);
  };

  // Function removed and logic moved inline to handleSuggestionClick

  // If no conversation is selected
  if (!conversationId) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateContent}>
          <div className={styles.emptyStateIcon}>
            <MessageSquareIcon size={24} />
          </div>
          <h3 className={styles.emptyStateTitle}>No conversation selected</h3>
          <p className={styles.emptyStateText}>
            Select a conversation from the list to view the message thread.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            {initialMessages[conversationId] && initialMessages[conversationId][0].sender === 'customer' ? 'SJ' : 'DW'}
          </div>
          <div className={styles.userDetails}>
            <h3 className={styles.userName}>
              {conversationId === 1 ? 'Sarah Johnson' : 'David Wilson'}
            </h3>
            <p className={styles.lastActive}>
              Last active {conversationId === 1 ? '5 minutes ago' : '32 minutes ago'}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            Assign
          </button>
          <button className={styles.actionButton}>
            Close
          </button>
          <button className={`${styles.actionButton} ${styles.infoButton}`}>
            Customer Info
          </button>
        </div>
      </div>
      
      <div className={styles.messageContainer}>
        <div className={styles.messageList}>
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`${styles.messageWrapper} ${message.sender === 'agent' ? styles.messageWrapperAgent : styles.messageWrapperCustomer}`}
            >
              <div 
                className={`${styles.message} ${
                  message.sender === 'agent' 
                    ? styles.messageAgent 
                    : styles.messageCustomer
                }`}
              >
                <p className={styles.messageText}>{message.text}</p>
                <div 
                  className={`${styles.messageTime} ${
                    message.sender === 'agent' ? styles.messageTimeAgent : styles.messageTimeCustomer
                  }`}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className={styles.typingIndicator}>
              <div className={styles.typingContent}>
                <div className={styles.typingDots}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <AnimatePresence>
        {showAiSuggestions && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={styles.aiSuggestions}
          >
            <div className={styles.aiSuggestionsContent}>
              <div className={styles.aiSuggestionsHeader}>
                <PlusCircle size={12} className={styles.aiSuggestionsIcon} />
                AI Suggested Replies
              </div>
              <div className={styles.suggestionsList}>
                {aiSuggestions.map((suggestion, index) => {
                  const handleSuggestionClick = () => {
                    setNewMessage(suggestion);
                    setShowAiSuggestions(false);
                  };
                  
                  return (
                    <button
                      key={index}
                      onClick={handleSuggestionClick}
                      className={styles.suggestionButton}
                    >
                      {suggestion}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={styles.inputContainer}>
        <div className={styles.inputContent}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className={styles.textInput}
            />
            <div className={styles.inputActions}>
              <button className={styles.inputActionButton}>
                <Paperclip size={18} />
              </button>
              <button className={styles.inputActionButton}>
                <Smile size={18} />
              </button>
              <button
                onClick={handleSendMessage}
                className={styles.sendButton}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom message icon for the no conversation selected state
const MessageSquareIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default ChatWindow;
