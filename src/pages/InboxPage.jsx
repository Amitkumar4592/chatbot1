import React, { useState } from 'react';
import ConversationList from '../components/chat/ConversationList';
import ChatWindow from '../components/chat/ChatWindow';
import CustomerDetails from '../components/chat/CustomerDetails';
import styles from './InboxPage.module.css';

const InboxPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [showCustomerDetails, setShowCustomerDetails] = useState(true);

  const handleSelectConversation = (id) => {
    setSelectedConversationId(id);
    setShowCustomerDetails(true);
  };

  const toggleCustomerDetails = () => {
    setShowCustomerDetails(!showCustomerDetails);
  };

  return (
    <div className={styles.container}>
      <ConversationList 
        onSelectConversation={handleSelectConversation} 
        selectedConversationId={selectedConversationId}
      />
      <div className={styles.content}>
        <ChatWindow conversationId={selectedConversationId} />
        {showCustomerDetails && (
          <CustomerDetails 
            conversationId={selectedConversationId}
            onClose={toggleCustomerDetails}
          />
        )}
      </div>
    </div>
  );
};

export default InboxPage;
