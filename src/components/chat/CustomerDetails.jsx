import React from 'react';
import { X, Mail, Clock, Star, ExternalLink, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './CustomerDetails.module.css';

// Dummy customer data
const customerData = {
  1: {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    lastSeen: '5 minutes ago',
    location: 'San Francisco, CA',
    tags: ['Premium', 'API User', 'Technical'],
    priority: 'High',
    company: 'TechCorp Inc.',
    plan: 'Business Pro',
    signupDate: 'Jan 15, 2023',
    conversations: 12,
    previousIssues: [
      { id: 101, date: '2 weeks ago', topic: 'API Integration' },
      { id: 102, date: '1 month ago', topic: 'Billing Question' }
    ]
  },
  2: {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '+1 (555) 987-6543',
    lastSeen: '32 minutes ago',
    location: 'New York, NY',
    tags: ['New User', 'Marketing'],
    priority: 'Medium',
    company: 'Growth Solutions LLC',
    plan: 'Standard',
    signupDate: 'Mar 3, 2023',
    conversations: 5,
    previousIssues: [
      { id: 103, date: '1 week ago', topic: 'Feature Request' }
    ]
  }
};

const CustomerDetails = ({ conversationId, onClose }) => {
  if (!conversationId) return null;
  
  const customer = customerData[conversationId];
  if (!customer) return null;
  
  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.container}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>Customer Details</h3>
        <button onClick={onClose} className={styles.closeButton}>
          <X size={18} />
        </button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.customerHeader}>
          <div className={styles.avatar}>
            {customer.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className={styles.customerInfo}>
            <h4 className={styles.customerName}>{customer.name}</h4>
            <p className={styles.customerCompany}>{customer.company}</p>
          </div>
        </div>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <Mail size={16} className={styles.infoIcon} />
            <span className={styles.infoText}>{customer.email}</span>
          </div>
          <div className={styles.infoItem}>
            <Phone size={16} className={styles.infoIcon} />
            <span className={styles.infoText}>{customer.phone}</span>
          </div>
          <div className={styles.infoItem}>
            <Clock size={16} className={styles.infoIcon} />
            <span className={styles.infoText}>Last seen {customer.lastSeen}</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin size={16} className={styles.infoIcon} />
            <span className={styles.infoText}>{customer.location}</span>
          </div>
        </div>
        
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Tags</h5>
          <div className={styles.tagContainer}>
            {customer.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Priority</h5>
          <div className={`${styles.priorityContainer} ${
            customer.priority === 'High' 
              ? styles.priorityHigh 
              : customer.priority === 'Medium' 
                ? styles.priorityMedium 
                : styles.priorityLow
          }`}>
            <Star size={16} className={styles.priorityIcon} />
            <span className={styles.priorityText}>{customer.priority}</span>
          </div>
        </div>
        
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Account Information</h5>
          <div className={styles.accountInfo}>
            <div className={styles.accountGrid}>
              <div className={styles.accountRow}>
                <span className={styles.accountLabel}>Plan</span>
                <span className={styles.accountValue}>{customer.plan}</span>
              </div>
              <div className={styles.accountRow}>
                <span className={styles.accountLabel}>Sign up date</span>
                <span className={styles.accountValue}>{customer.signupDate}</span>
              </div>
              <div className={styles.accountRow}>
                <span className={styles.accountLabel}>Conversations</span>
                <span className={styles.accountValue}>{customer.conversations}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.previousIssues}>
          <h5 className={styles.sectionTitle}>Previous Issues</h5>
          <div className={styles.issuesList}>
            {customer.previousIssues.map((issue) => (
              <div key={issue.id} className={styles.issueItem}>
                <div className={styles.issueHeader}>
                  <span className={styles.issueTopic}>{issue.topic}</span>
                  <span className={styles.issueDate}>{issue.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <button className={styles.viewProfileButton}>
            <ExternalLink size={16} className={styles.viewProfileIcon} />
            View full profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerDetails;
