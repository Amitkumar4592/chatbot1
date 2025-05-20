import React, { useState } from 'react';
import { Save, Bell, User, Lock, Globe, MessageSquare, Clock, Palette } from 'lucide-react';
import styles from './SettingsPage.module.css';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const tabs = [
    { id: 'general', label: 'General', icon: <Globe size={18} /> },
    { id: 'account', label: 'Account', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'conversations', label: 'Conversations', icon: <MessageSquare size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
    { id: 'team', label: 'Team Members', icon: <User size={18} /> },
    { id: 'security', label: 'Security', icon: <Lock size={18} /> },
    { id: 'hours', label: 'Business Hours', icon: <Clock size={18} /> },
  ];
  
  // General settings form state
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'TechCorp Inc.',
    websiteUrl: 'https://techcorp.com',
    supportEmail: 'support@techcorp.com',
    timezone: 'America/New_York',
    language: 'en'
  });
  
  // Conversation settings form state
  const [conversationSettings, setConversationSettings] = useState({
    autoResponderEnabled: true,
    assignmentEnabled: true,
    tagSuggestions: true,
    resolveAfterDays: 5,
    aiAssistanceEnabled: true
  });
  
  // Notification settings form state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    browserNotifications: true,
    soundEnabled: true,
    dailyDigest: true,
    newConversationAlert: true
  });
  
  const handleGeneralSettingsChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    });
  };
  
  const handleConversationSettingsChange = (e) => {
    const { name, checked, value, type } = e.target;
    setConversationSettings({
      ...conversationSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleNotificationSettingsChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div>
            <h3 className={styles.contentTitle}>General Settings</h3>
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={generalSettings.companyName}
                  onChange={handleGeneralSettingsChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Website URL
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={generalSettings.websiteUrl}
                  onChange={handleGeneralSettingsChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Support Email
                </label>
                <input
                  type="email"
                  name="supportEmail"
                  value={generalSettings.supportEmail}
                  onChange={handleGeneralSettingsChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Timezone
                </label>
                <select
                  name="timezone"
                  value={generalSettings.timezone}
                  onChange={handleGeneralSettingsChange}
                  className={styles.input}
                >
                  <option value="America/New_York">Eastern Time (US & Canada)</option>
                  <option value="America/Chicago">Central Time (US & Canada)</option>
                  <option value="America/Denver">Mountain Time (US & Canada)</option>
                  <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                  <option value="Europe/London">London</option>
                  <option value="Europe/Paris">Paris</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Language
                </label>
                <select
                  name="language"
                  value={generalSettings.language}
                  onChange={handleGeneralSettingsChange}
                  className={styles.input}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'conversations':
        return (
          <div>
            <h3 className={styles.contentTitle}>Conversation Settings</h3>
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <div>
                  <h4 className={styles.label}>AI-Powered Assistance</h4>
                  <p className={styles.description}>
                    Enable AI suggestions for faster responses
                  </p>
                </div>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="aiAssistanceEnabled"
                    checked={conversationSettings.aiAssistanceEnabled}
                    onChange={handleConversationSettingsChange}
                    className={styles.checkboxInput}
                  />
                  <span>Enabled</span>
                </label>
              </div>
              
              <div className={styles.formGroup}>
                <div>
                  <h4 className={styles.label}>Auto-Responder</h4>
                  <p className={styles.description}>
                    Automatically respond to new conversations
                  </p>
                </div>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="autoResponderEnabled"
                    checked={conversationSettings.autoResponderEnabled}
                    onChange={handleConversationSettingsChange}
                    className={styles.checkboxInput}
                  />
                  <span>Enabled</span>
                </label>
              </div>
              
              <div className={styles.formGroup}>
                <div>
                  <h4 className={styles.label}>Auto-Assignment</h4>
                  <p className={styles.description}>
                    Automatically assign conversations to team members
                  </p>
                </div>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="assignmentEnabled"
                    checked={conversationSettings.assignmentEnabled}
                    onChange={handleConversationSettingsChange}
                    className={styles.checkboxInput}
                  />
                  <span>Enabled</span>
                </label>
              </div>
              
              <div className={styles.formGroup}>
                <div>
                  <h4 className={styles.label}>Tag Suggestions</h4>
                  <p className={styles.description}>
                    Suggest tags based on conversation content
                  </p>
                </div>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="tagSuggestions"
                    checked={conversationSettings.tagSuggestions}
                    onChange={handleConversationSettingsChange}
                    className={styles.checkboxInput}
                  />
                  <span>Enabled</span>
                </label>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Auto-resolve after (days)
                </label>
                <input
                  type="number"
                  name="resolveAfterDays"
                  value={conversationSettings.resolveAfterDays}
                  onChange={handleConversationSettingsChange}
                  min="1"
                  max="30"
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h3 className={styles.contentTitle}>Notification Settings</h3>
            <div className={styles.form}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onChange={handleNotificationSettingsChange}
                  className={styles.checkboxInput}
                />
                <span>Email Notifications</span>
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="browserNotifications"
                  name="browserNotifications"
                  checked={notificationSettings.browserNotifications}
                  onChange={handleNotificationSettingsChange}
                  className={styles.checkboxInput}
                />
                <span>Browser Notifications</span>
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="soundEnabled"
                  name="soundEnabled"
                  checked={notificationSettings.soundEnabled}
                  onChange={handleNotificationSettingsChange}
                  className={styles.checkboxInput}
                />
                <span>Sound Notifications</span>
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="dailyDigest"
                  name="dailyDigest"
                  checked={notificationSettings.dailyDigest}
                  onChange={handleNotificationSettingsChange}
                  className={styles.checkboxInput}
                />
                <span>Daily Digest Email</span>
              </label>
              
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="newConversationAlert"
                  name="newConversationAlert"
                  checked={notificationSettings.newConversationAlert}
                  onChange={handleNotificationSettingsChange}
                  className={styles.checkboxInput}
                />
                <span>New Conversation Alerts</span>
              </label>
            </div>
          </div>
        );
      default:
        return (
          <div className={styles.content}>
            <div className={styles.icon}>
              {tabs.find(tab => tab.id === activeTab)?.icon}
            </div>
            <p className={styles.description}>
              {tabs.find(tab => tab.id === activeTab)?.label} settings are under development
            </p>
          </div>
        );
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
      </div>
      
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTitle}>Settings Menu</div>
          <ul className={styles.navList}>
            {tabs.map((tab) => (
              <li key={tab.id} className={styles.navItem}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.navLink} ${activeTab === tab.id ? styles.activeLink : ''}`}
                >
                  <span className={`${styles.navIcon} ${activeTab === tab.id ? styles.activeIcon : ''}`}>{tab.icon}</span>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.content}>
          {renderContent()}
          
          <button className={styles.submitButton}>
            <Save size={18} className={styles.saveIcon} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
