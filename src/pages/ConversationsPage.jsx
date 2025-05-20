import React from 'react';
import { MessageSquare } from 'lucide-react';
import styles from './ConversationsPage.module.css';

const ConversationsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <MessageSquare size={24} />
        </div>
        <h3 className={styles.title}>Conversations Overview</h3>
        <p className={styles.description}>
          This page would typically show all conversations across your organization.
        </p>
        <div>
          <a href="/inbox" className={styles.button}>
            Go to Inbox
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConversationsPage;
