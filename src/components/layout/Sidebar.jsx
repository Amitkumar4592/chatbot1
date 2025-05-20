import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Inbox, Settings, BarChart2, Users, Search, HelpCircle, Menu, X } from 'lucide-react';
import styles from './Sidebar.module.css';

const SidebarIcon = ({ icon, text, path, isCollapsed }) => {
  return (
    <NavLink 
      to={path}
      className={({ isActive }) => `
        ${styles.navLink} 
        ${isCollapsed ? styles.navLinkCollapsed : ''} 
        ${isActive ? styles.active : ''}
      `}
    >
      <div className={styles.navIcon}>
        {icon}
        {!isCollapsed && <span className={styles.navText}>{text}</span>}
      </div>
      {isCollapsed && (
        <div className={styles.tooltip}>
          {text}
        </div>
      )}
    </NavLink>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const iconSize = 20;
  
  const sidebarItems = [
    { path: '/conversations', text: 'Conversations', icon: <MessageSquare size={iconSize} /> },
    { path: '/inbox', text: 'Inbox', icon: <Inbox size={iconSize} /> },
    { path: '/customers', text: 'Customers', icon: <Users size={iconSize} /> },
    { path: '/reports', text: 'Reports', icon: <BarChart2 size={iconSize} /> },
    { path: '/settings', text: 'Settings', icon: <Settings size={iconSize} /> },
    { path: '/help', text: 'Help', icon: <HelpCircle size={iconSize} /> },
  ];

  return (
    <motion.div 
      layout
      className={`${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : ''}`}
    >
      <div className={styles.header}>
        {!isCollapsed && (
          <div className={styles.title}>Intercom</div>
        )}
        <button 
          onClick={toggleSidebar} 
          className={styles.toggleButton}
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      
      <div className={styles.content}>
        {sidebarItems.map((item, index) => (
          <SidebarIcon 
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
      
      <div className={styles.footer}>
        <SidebarIcon 
          icon={<Search size={iconSize} />}
          text="Search"
          path="/search"
          isCollapsed={isCollapsed}
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;
