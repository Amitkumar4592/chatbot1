import React, { useState } from 'react';
import { BarChart2, ArrowDown, ArrowUp, Users, MessageSquare, Clock, Calendar } from 'lucide-react';
import styles from './ReportsPage.module.css';

const ReportsPage = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Dummy data for reports
  const statsCards = [
    {
      title: 'Total Conversations',
      value: '1,248',
      change: '+12%',
      increased: true,
      icon: <MessageSquare size={20} />,
      color: 'blue'
    },
    {
      title: 'New Customers',
      value: '64',
      change: '+18%',
      increased: true,
      icon: <Users size={20} />,
      color: 'green'
    },
    {
      title: 'Response Time',
      value: '24m',
      change: '-8%',
      increased: false,
      icon: <Clock size={20} />,
      color: 'purple'
    },
    {
      title: 'Satisfaction Score',
      value: '92%',
      change: '+3%',
      increased: true,
      icon: <BarChart2 size={20} />,
      color: 'orange'
    }
  ];
  
  // Dummy data for chart
  const chartData = {
    week: [125, 140, 115, 180, 160, 120, 150],
    month: [450, 520, 480, 600, 580, 550, 610, 580, 620, 590, 630, 670],
    quarter: [1800, 2100, 2400, 2250, 2600, 2800]
  };
  
  // Removed unused colorMapping object as we're now using CSS modules

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reports & Analytics</h1>
        <div className={styles.controls}>
          <select 
            className={styles.select}
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last quarter</option>
          </select>
          <button className={styles.exportButton}>
            <Calendar size={14} className={styles.exportIcon} />
            Export
          </button>
        </div>
      </div>
      
      <div className={styles.statsGrid}>
        {statsCards.map((card, idx) => (
          <div key={idx} className={styles.statsCard}>
            <div className={styles.statsHeader}>
              <div className={styles.statsTitle}>{card.title}</div>
              <div className={styles[`statsIcon${card.color.charAt(0).toUpperCase() + card.color.slice(1)}`]}>
                {card.icon}
              </div>
            </div>
            <div className={styles.statsValue}>{card.value}</div>
            <div className={styles.statsChange + ' ' + (card.increased ? styles.increaseText : styles.decreaseText)}>
              {card.increased ? <ArrowUp size={14} className={styles.changeIcon} /> : <ArrowDown size={14} className={styles.changeIcon} />}
              <span>{card.change} from previous {timeRange}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Conversation Trends</h2>
          <div className={styles.chartContainer}>
            {/* Chart Visualization (simulated) */}
            <div className={styles.chartVisualization}>
              {chartData[timeRange].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div 
                    className={styles.chartBar} 
                    style={{ height: `${(value / Math.max(...chartData[timeRange])) * 100}%` }}
                    title={`${value} conversations`}
                  ></div>
                  <div className={styles.chartLabel}>
                    {timeRange === 'week' 
                      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]
                      : timeRange === 'month' 
                        ? `W${idx + 1}`
                        : `M${idx + 1}`
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Top Tags</h2>
          <div className={styles.tagsList}>
            {[
              { name: 'Billing Question', count: 342, percentage: 85 },
              { name: 'Technical Support', count: 276, percentage: 70 },
              { name: 'Feature Request', count: 185, percentage: 45 },
              { name: 'Account Setup', count: 123, percentage: 30 },
              { name: 'Integration Help', count: 98, percentage: 25 }
            ].map((tag, idx) => (
              <div key={idx} className={styles.tagItem}>
                <div className={styles.tagHeader}>
                  <span className={styles.tagName}>{tag.name}</span>
                  <span className={styles.tagCount}>{tag.count}</span>
                </div>
                <div className={styles.tagBar}>
                  <div 
                    className={styles.tagProgress} 
                    style={{ width: `${tag.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.teamCard}>
        <div className={styles.teamHeader}>
          <h2 className={styles.teamTitle}>Team Performance</h2>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th scope="col" className={styles.tableHeaderCell}>
                  Team Member
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Conversations
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Avg. Response Time
                </th>
                <th scope="col" className={styles.tableHeaderCell}>
                  Satisfaction
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {[
                { name: 'Alex Johnson', conversations: 124, respTime: '18m', satisfaction: '96%' },
                { name: 'Maria Garcia', conversations: 108, respTime: '22m', satisfaction: '94%' },
                { name: 'Robert Chen', conversations: 98, respTime: '25m', satisfaction: '92%' },
                { name: 'Lisa Thompson', conversations: 87, respTime: '30m', satisfaction: '90%' },
                { name: 'Kevin Wilson', conversations: 76, respTime: '35m', satisfaction: '88%' }
              ].map((member, idx) => (
                <tr key={idx} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.memberCell}>
                      <div className={styles.memberAvatar}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className={styles.memberName}>{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.memberStat}>{member.conversations}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.memberStat}>{member.respTime}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <div className={styles.satisfactionCell}>
                      <span className={styles.satisfactionValue}>{member.satisfaction}</span>
                      <div className={styles.satisfactionBar}>
                        <div 
                          className={styles.satisfactionProgress} 
                          style={{ width: `${parseInt(member.satisfaction)}%` }}
                        ></div>
                      </div>
                    </div>
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

export default ReportsPage;
