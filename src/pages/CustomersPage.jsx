import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Mail, Clock } from 'lucide-react';
import styles from './CustomersPage.module.css';

// Dummy customers data
const customersData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    lastSeen: '5 minutes ago',
    tags: ['Premium', 'API User', 'Technical'],
    company: 'TechCorp Inc.',
    conversations: 12
  },
  {
    id: 2,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    lastSeen: '32 minutes ago',
    tags: ['New User', 'Marketing'],
    company: 'Growth Solutions LLC',
    conversations: 5
  },
  {
    id: 3,
    name: 'Emily Clark',
    email: 'emily.clark@example.com',
    lastSeen: '2 hours ago',
    tags: ['Premium', 'Support'],
    company: 'Innovate Design Co.',
    conversations: 8
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    lastSeen: '1 day ago',
    tags: ['API User', 'Developer'],
    company: 'Tech Builders Inc.',
    conversations: 15
  },
  {
    id: 5,
    name: 'Jessica Lee',
    email: 'jessica.lee@example.com',
    lastSeen: '2 days ago',
    tags: ['Considering Upgrade'],
    company: 'First Marketing Group',
    conversations: 3
  }
];

const CustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagFilter, setShowTagFilter] = useState(false);

  const allTags = ['Premium', 'API User', 'Technical', 'New User', 'Marketing', 'Support', 'Developer', 'Considering Upgrade'];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredCustomers = customersData.filter(customer => {
    // Apply search filter
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply tag filter
    const matchesTags = selectedTags.length === 0 || 
      customer.tags.some(tag => selectedTags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Customers</h1>
        <button className={styles.addButton}>
          Add Customer
        </button>
      </div>
      
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.filterControls}>
            <div className={styles.searchContainer}>
              <div className={styles.searchInputWrapper}>
                <div className={styles.searchIcon}>
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search customers..."
                  className={styles.searchInput}
                />
              </div>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setShowTagFilter(!showTagFilter)}
                className={styles.filterButton}
              >
                <Filter size={16} className={styles.filterIcon} />
                Filter by tags
                <ChevronDown size={14} className={styles.chevronIcon} />
              </button>
              
              {showTagFilter && (
                <div className={styles.filterDropdown}>
                  <div className={styles.filterHeader}>Select tags:</div>
                  <div className={styles.tagList}>
                    {allTags.map((tag) => (
                      <div key={tag} className={styles.tagItem}>
                        <input
                          type="checkbox"
                          id={`tag-${tag}`}
                          checked={selectedTags.includes(tag)}
                          onChange={() => toggleTag(tag)}
                          className={styles.checkbox}
                        />
                        <label htmlFor={`tag-${tag}`} className={styles.tagLabel}>
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className={styles.filterActions}>
                    <button 
                      onClick={() => setSelectedTags([])} 
                      className={styles.clearButton}
                    >
                      Clear all
                    </button>
                    <button 
                      onClick={() => setShowTagFilter(false)} 
                      className={styles.applyButton}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th scope="col" className={styles.tableHeaderCell}>
                  Customer
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Email
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Last Seen
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Tags
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Conversations
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.customerCell}>
                      <div className={styles.customerAvatar}>
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={styles.customerInfo}>
                        <div className={styles.customerName}>{customer.name}</div>
                        <div className={styles.customerCompany}>{customer.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.emailCell}>
                      <Mail size={14} className={styles.emailIcon} />
                      {customer.email}
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.lastSeenCell}>
                      <Clock size={14} className={styles.lastSeenIcon} />
                      {customer.lastSeen}
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.tagsCell}>
                      {customer.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.conversationsCell}>
                      {customer.conversations}
                    </div>
                  </td>
                  <td className={styles.tableCell + ' ' + styles.actionCell}>
                    <button className={styles.viewButton}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
