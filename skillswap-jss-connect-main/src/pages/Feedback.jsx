import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Star, User, ThumbsUp, MessageSquare } from 'lucide-react';

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
  feedbackList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg
  },
  feedbackCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg
  },
  cardHeader: {
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
  sessionInfo: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
    margin: 0
  },
  rating: {
    display: 'flex',
    gap: theme.spacing.xs
  },
  ratingInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  ratingNumber: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold'
  },
  feedbackText: {
    backgroundColor: theme.colors.surfaceLight,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    lineHeight: '1.6'
  },
  feedbackActions: {
    display: 'flex',
    gap: theme.spacing.md,
    alignItems: 'center'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.colors.textSecondary,
    cursor: 'pointer',
    fontSize: theme.typography.fontSize.sm,
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.colors.primary
    }
  },
  timeStamp: {
    marginLeft: 'auto',
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm
  },
  emptyState: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    color: theme.colors.textSecondary
  },
  emptyIcon: {
    marginBottom: theme.spacing.md
  }
});

const Feedback = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('received');

  const receivedFeedback = [
    {
      id: 1,
      user: 'Alice Johnson',
      skill: 'React Development',
      rating: 5,
      text: 'Excellent teacher! John explained React concepts very clearly and provided great practical examples. The session was well-structured and I learned a lot about hooks and state management.',
      time: '2 days ago',
      helpful: 12
    },
    {
      id: 2,
      user: 'Bob Smith',
      skill: 'JavaScript Fundamentals',
      rating: 4,
      text: 'Good session overall. John is knowledgeable and patient. Would recommend for anyone looking to strengthen their JavaScript basics.',
      time: '1 week ago',
      helpful: 8
    },
    {
      id: 3,
      user: 'Maria Garcia',
      skill: 'UI/UX Design',
      rating: 5,
      text: 'Amazing experience! John provided valuable insights into design principles and user experience. His feedback on my portfolio was incredibly helpful.',
      time: '2 weeks ago',
      helpful: 15
    }
  ];

  const givenFeedback = [
    {
      id: 4,
      user: 'David Chen',
      skill: 'Python Programming',
      rating: 5,
      text: 'David is an excellent Python instructor. His teaching style is clear and he provided great resources for continued learning. Highly recommended!',
      time: '3 days ago',
      helpful: 6
    },
    {
      id: 5,
      user: 'Sarah Wilson',
      skill: 'Photography',
      rating: 4,
      text: 'Great photography session! Sarah taught me a lot about composition and lighting. Looking forward to practicing the techniques we covered.',
      time: '1 week ago',
      helpful: 9
    }
  ];

  const feedback = activeTab === 'received' ? receivedFeedback : givenFeedback;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? theme.colors.warning : 'none'}
        color={index < rating ? theme.colors.warning : theme.colors.border}
      />
    ));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Feedback</h1>
        
        <div className={classes.tabs}>
          <button
            className={`${classes.tab} ${activeTab === 'received' ? 'active' : ''}`}
            onClick={() => setActiveTab('received')}
          >
            Received ({receivedFeedback.length})
          </button>
          <button
            className={`${classes.tab} ${activeTab === 'given' ? 'active' : ''}`}
            onClick={() => setActiveTab('given')}
          >
            Given ({givenFeedback.length})
          </button>
        </div>
      </div>

      <div className={classes.feedbackList}>
        {feedback.length > 0 ? (
          feedback.map((item) => (
            <div key={item.id} className={classes.feedbackCard}>
              <div className={classes.cardHeader}>
                <div className={classes.avatar}>
                  <User size={24} />
                </div>
                <div className={classes.userInfo}>
                  <h3 className={classes.userName}>{item.user}</h3>
                  <p className={classes.sessionInfo}>
                    {activeTab === 'received' ? 'Learned' : 'Taught'}: {item.skill}
                  </p>
                </div>
              </div>

              <div className={classes.ratingInfo}>
                <div className={classes.rating}>
                  {renderStars(item.rating)}
                </div>
                <span className={classes.ratingNumber}>{item.rating}/5</span>
              </div>

              <div className={classes.feedbackText}>
                {item.text}
              </div>

              <div className={classes.feedbackActions}>
                <button className={classes.actionButton}>
                  <ThumbsUp size={16} />
                  Helpful ({item.helpful})
                </button>
                <button className={classes.actionButton}>
                  <MessageSquare size={16} />
                  Reply
                </button>
                <span className={classes.timeStamp}>{item.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={classes.emptyState}>
            <div className={classes.emptyIcon}>
              <MessageSquare size={48} />
            </div>
            <p>No feedback {activeTab} yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;