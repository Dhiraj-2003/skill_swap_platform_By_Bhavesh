import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { User, Clock, CheckCircle, XCircle, ArrowRightLeft } from 'lucide-react';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    padding: theme.spacing.lg
  },
  header: {
    marginBottom: theme.spacing.xl
  },
  title: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    margin: '0 0 1rem 0'
  },
  tabs: {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg
  },
  tab: {
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&.active': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text
    },
    '&:hover': {
      backgroundColor: theme.colors.surfaceLight
    }
  },
  requestsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg
  },
  requestCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg
  },
  requestHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.md
  },
  avatar: {
    width: '48px',
    height: '48px',
    backgroundColor: theme.colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    margin: 0
  },
  requestTime: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
    margin: 0
  },
  statusBadge: {
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500'
  },
  statusPending: {
    backgroundColor: theme.colors.warning + '20',
    color: theme.colors.warning
  },
  statusAccepted: {
    backgroundColor: theme.colors.success + '20',
    color: theme.colors.success
  },
  statusDeclined: {
    backgroundColor: theme.colors.error + '20',
    color: theme.colors.error
  },
  requestContent: {
    marginBottom: theme.spacing.md
  },
  swapDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.sm
  },
  skillBox: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceLight,
    borderRadius: theme.borderRadius.md,
    flex: 1,
    textAlign: 'center'
  },
  skillLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs
  },
  skillName: {
    fontWeight: 'bold'
  },
  message: {
    backgroundColor: theme.colors.surfaceLight,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    fontStyle: 'italic',
    color: theme.colors.textSecondary
  },
  actions: {
    display: 'flex',
    gap: theme.spacing.md,
    justifyContent: 'flex-end'
  },
  button: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    border: 'none',
    cursor: 'pointer',
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
    transition: 'background-color 0.2s ease'
  },
  acceptButton: {
    backgroundColor: theme.colors.success,
    color: theme.colors.text,
    '&:hover': {
      backgroundColor: '#059669'
    }
  },
  declineButton: {
    backgroundColor: theme.colors.error,
    color: theme.colors.text,
    '&:hover': {
      backgroundColor: '#dc2626'
    }
  }
});

const SwapRequests = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('received');

  const receivedRequests = [
    {
      id: 1,
      user: 'Alice Johnson',
      time: '2 hours ago',
      status: 'pending',
      offering: 'React Development',
      requesting: 'UI/UX Design',
      message: 'Hi! I\'d love to learn about UI/UX design principles. I can teach you advanced React patterns in return.'
    },
    {
      id: 2,
      user: 'Bob Smith',
      time: '1 day ago',
      status: 'accepted',
      offering: 'Photography',
      requesting: 'Web Development',
      message: 'Great! Looking forward to our skill exchange session.'
    }
  ];

  const sentRequests = [
    {
      id: 3,
      user: 'Maria Garcia',
      time: '3 hours ago',
      status: 'pending',
      offering: 'Marketing',
      requesting: 'Spanish Language',
      message: 'I can help you with digital marketing strategies if you can teach me Spanish!'
    },
    {
      id: 4,
      user: 'David Chen',
      time: '2 days ago',
      status: 'declined',
      offering: 'JavaScript',
      requesting: 'Data Science',
      message: 'Unfortunately, I\'m not available for skill exchanges at the moment.'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} />;
      case 'accepted':
        return <CheckCircle size={16} />;
      case 'declined':
        return <XCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return `${classes.statusBadge} ${classes.statusPending}`;
      case 'accepted':
        return `${classes.statusBadge} ${classes.statusAccepted}`;
      case 'declined':
        return `${classes.statusBadge} ${classes.statusDeclined}`;
      default:
        return `${classes.statusBadge} ${classes.statusPending}`;
    }
  };

  const requests = activeTab === 'received' ? receivedRequests : sentRequests;

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Swap Requests</h1>
        
        <div className={classes.tabs}>
          <button
            className={`${classes.tab} ${activeTab === 'received' ? 'active' : ''}`}
            onClick={() => setActiveTab('received')}
          >
            Received ({receivedRequests.length})
          </button>
          <button
            className={`${classes.tab} ${activeTab === 'sent' ? 'active' : ''}`}
            onClick={() => setActiveTab('sent')}
          >
            Sent ({sentRequests.length})
          </button>
        </div>
      </div>

      <div className={classes.requestsList}>
        {requests.map((request) => (
          <div key={request.id} className={classes.requestCard}>
            <div className={classes.requestHeader}>
              <div className={classes.avatar}>
                <User size={24} />
              </div>
              <div className={classes.userInfo}>
                <h3 className={classes.userName}>{request.user}</h3>
                <p className={classes.requestTime}>{request.time}</p>
              </div>
              <div className={getStatusClass(request.status)}>
                {getStatusIcon(request.status)}
                {request.status}
              </div>
            </div>

            <div className={classes.requestContent}>
              <div className={classes.swapDetails}>
                <div className={classes.skillBox}>
                  <div className={classes.skillLabel}>
                    {activeTab === 'received' ? 'They offer:' : 'You offer:'}
                  </div>
                  <div className={classes.skillName}>{request.offering}</div>
                </div>
                <ArrowRightLeft size={20} />
                <div className={classes.skillBox}>
                  <div className={classes.skillLabel}>
                    {activeTab === 'received' ? 'They want:' : 'You want:'}
                  </div>
                  <div className={classes.skillName}>{request.requesting}</div>
                </div>
              </div>

              <div className={classes.message}>
                "{request.message}"
              </div>
            </div>

            {activeTab === 'received' && request.status === 'pending' && (
              <div className={classes.actions}>
                <button className={`${classes.button} ${classes.declineButton}`}>
                  Decline
                </button>
                <button className={`${classes.button} ${classes.acceptButton}`}>
                  Accept
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapRequests;