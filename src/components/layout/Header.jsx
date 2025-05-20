import React, { useState } from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showProfile) setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    if (showNotifications) setShowNotifications(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <div className={styles.searchIcon}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <div className={styles.actions}>
        <div className={styles.notificationContainer}>
          <button
            onClick={toggleNotifications}
            className={styles.notificationButton}
          >
            <Bell size={20} />
            <span className={styles.notificationIndicator}></span>
          </button>
          
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={styles.dropdown}
            >
              <div className={styles.dropdownHeader}>
                <h3 className={styles.dropdownHeading}>Notifications</h3>
              </div>
              <div className={styles.dropdownContent}>
                {[1, 2, 3].map((item) => (
                  <div key={item} className={styles.notificationItem}>
                    <div className={styles.notificationItemContent}>
                      <div className={styles.notificationAvatar}>
                        {item}
                      </div>
                      <div>
                        <p className={styles.notificationText}>New message from customer</p>
                        <p className={styles.notificationTime}>5 min ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.dropdownFooter}>
                <button className={styles.viewAllButton}>
                  View all notifications
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className={styles.profileContainer}>
          <button
            onClick={toggleProfile}
            className={styles.profileButton}
          >
            <div className={styles.profileAvatar}>
              <User size={18} />
            </div>
            <ChevronDown size={16} />
          </button>
          
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={styles.profileDropdown}
            >
              <div className={styles.profileHeader}>
                <p className={styles.profileName}>John Doe</p>
                <p className={styles.profileEmail}>john@example.com</p>
              </div>
              <div className={styles.profileMenu}>
                <button className={styles.profileMenuItem}>
                  Profile
                </button>
                <button className={styles.profileMenuItem}>
                  Settings
                </button>
                <button className={`${styles.profileMenuItem} ${styles.signOutButton}`}>
                  Sign out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
