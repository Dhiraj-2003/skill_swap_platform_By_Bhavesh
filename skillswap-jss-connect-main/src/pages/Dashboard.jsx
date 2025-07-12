import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { User, MessageSquare, Star, TrendingUp } from 'lucide-react';

const useStyles = createUseStyles({
  dashboard: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    padding: theme.spacing.lg
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    borderBottom: `1px solid ${theme.colors.border}`,
    paddingBottom: theme.spacing.md
  },
  title: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: 'bold',
    margin: 0
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl
  },
  statCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.border}`,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md
  },
  statIcon: {
    width: '48px',
    height: '48px',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statContent: {
    flex: 1
  },
  statNumber: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: 'bold',
    margin: 0
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
    margin: 0
  },
  recentSection: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.border}`
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    margin: 0
  },
  activityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  activityItem: {
    padding: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.border}`,
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  activityText: {
    margin: 0,
    color: theme.colors.textSecondary
  },
  activityTime: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs
  }
});

const Dashboard = () => {
  const classes = useStyles();

  const stats = [
    { icon: User, label: 'Active Connections', value: '24' },
    { icon: MessageSquare, label: 'Messages', value: '12' },
    { icon: Star, label: 'Skills Taught', value: '8' },
    { icon: TrendingUp, label: 'Skills Learned', value: '15' }
  ];

  const recentActivity = [
    { text: 'New skill swap request from John', time: '2 hours ago' },
    { text: 'Completed session: React Basics', time: '1 day ago' },
    { text: 'New connection: Sarah Johnson', time: '2 days ago' },
    { text: 'Skill rating received: 5 stars', time: '3 days ago' }
  ];

  return (
    <div className={classes.dashboard}>
      <div className={classes.header}>
        <h1 className={classes.title}>Dashboard</h1>
      </div>

      <div className={classes.statsGrid}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={classes.statCard}>
              <div className={classes.statIcon}>
                <Icon size={24} color={theme.colors.text} />
              </div>
              <div className={classes.statContent}>
                <h3 className={classes.statNumber}>{stat.value}</h3>
                <p className={classes.statLabel}>{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={classes.recentSection}>
        <h2 className={classes.sectionTitle}>Recent Activity</h2>
        <ul className={classes.activityList}>
          {recentActivity.map((activity, index) => (
            <li key={index} className={classes.activityItem}>
              <p className={classes.activityText}>{activity.text}</p>
              <div className={classes.activityTime}>{activity.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;