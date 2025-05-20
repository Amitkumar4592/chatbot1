import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ConversationList.module.css';

// Dummy data for conversations
const initialConversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    message: "I'm having trouble with my account, can you help me understand the billing cycle?",
    time: '5m',
    unread: true,
    status: 'active'
  },
  {
    id: 2,
    name: 'David Wilson',
    avatar: 'DW',
    message: 'Thanks for your help earlier. One more question about the integration...',
    time: '32m',
    unread: false,
    status: 'active'
  },
  {
    id: 3,
    name: 'Emily Clark',
    avatar: 'EC',
    message: 'The new feature you suggested works perfectly! I really appreciate the support.',
    time: '2h',
    unread: false,
    status: 'active'
  },
  {
    id: 4,
    name: 'Michael Brown',
    avatar: 'MB',
    message: 'Could you explain how to set up the API connection with our system?',
    time: '1d',
    unread: false,
    status: 'closed'
  },
  {
    id: 5,
    name: 'Jessica Lee',
    avatar: 'JL',
    message: "I'm considering upgrading to the premium plan. What additional features would I get?",
    time: '2d',
    unread: false,
    status: 'closed'
  },
  {
    id: 6,
    name: 'Ryan Thomas',
    avatar: 'RT',
    message: "Hello, I just signed up for your service and I'm excited to get started!",
    time: '3d',
    unread: false,
    status: 'closed'
  }
];

const ConversationList = ({ onSelectConversation, selectedConversationId }) => {
  const [conversations] = useState(initialConversations);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'active', 'closed'

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleFilter = (status) => {
    setStatusFilter(status);
    setFilterOpen(false);
  };

  const filteredConversations = conversations.filter(convo => {
    // Apply search filter
    const matchesSearch = convo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          convo.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply status filter
    const matchesStatus = statusFilter === 'all' || convo.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Conversations</h2>
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon}>
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search conversations..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterBar}>
          <div className={styles.conversationCount}>
            {filteredConversations.length} conversations
          </div>
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={styles.filterButton}
            >
              <Filter size={16} className={styles.filterIcon} />
              Filter <ChevronDown size={14} className={styles.chevronIcon} />
            </button>
            
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={styles.filterDropdown}
              >
                <button 
                  onClick={() => handleFilter('all')} 
                  className={`${styles.filterOption} ${statusFilter === 'all' ? styles.filterOptionActive : ''}`}
                >
                  All conversations
                </button>
                <button 
                  onClick={() => handleFilter('active')} 
                  className={`${styles.filterOption} ${statusFilter === 'active' ? styles.filterOptionActive : ''}`}
                >
                  Active
                </button>
                <button 
                  onClick={() => handleFilter('closed')} 
                  className={`${styles.filterOption} ${statusFilter === 'closed' ? styles.filterOptionActive : ''}`}
                >
                  Closed
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.conversationList}>
        {filteredConversations.map((conversation) => (
          <div 
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`${styles.conversationItem} ${
              selectedConversationId === conversation.id ? styles.conversationItemSelected : ''
            }`}
          >
            <div className={styles.conversationContent}>
              <div className={`${styles.avatar} ${
                conversation.unread ? styles.avatarUnread : styles.avatarRead
              }`}>
                {conversation.avatar}
              </div>
              <div className={styles.messageContainer}>
                <div className={styles.messageHeader}>
                  <h3 className={`${styles.name} ${conversation.unread ? styles.nameUnread : styles.nameRead}`}>
                    {conversation.name}
                  </h3>
                  <span className={styles.time}>{conversation.time}</span>
                </div>
                <p className={`${styles.preview} ${conversation.unread ? styles.previewUnread : styles.previewRead}`}>
                  {conversation.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
