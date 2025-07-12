import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { User, MapPin, Mail, Phone, Edit, Star, Award } from 'lucide-react';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    padding: theme.spacing.lg
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl
  },
  title: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: 'bold',
    margin: 0
  },
  editButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500'
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: theme.spacing.xl,
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr'
    }
  },
  profileCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    textAlign: 'center'
  },
  avatar: {
    width: '120px',
    height: '120px',
    backgroundColor: theme.colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `0 auto ${theme.spacing.lg} auto`
  },
  name: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    margin: '0 0 0.5rem 0'
  },
  bio: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
    lineHeight: '1.6'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    color: theme.colors.textSecondary
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.border}`
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    margin: 0
  },
  statLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    margin: 0
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg
  },
  detailCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    margin: '0 0 1rem 0'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: theme.spacing.sm
  },
  skillTag: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    backgroundColor: theme.colors.surfaceLight,
    color: theme.colors.text,
    borderRadius: theme.borderRadius.md,
    textAlign: 'center',
    fontSize: theme.typography.fontSize.sm
  },
  reviewsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md
  },
  reviewItem: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surfaceLight,
    borderRadius: theme.borderRadius.md
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm
  },
  reviewerName: {
    fontWeight: '500',
    margin: 0
  },
  reviewRating: {
    display: 'flex',
    gap: theme.spacing.xs
  },
  reviewText: {
    color: theme.colors.textSecondary,
    margin: 0,
    lineHeight: '1.5'
  }
});

const Profile = () => {
  const classes = useStyles();

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'UI Design', 'Photography'];
  const reviews = [
    {
      name: 'Alice Johnson',
      rating: 5,
      text: 'Excellent teacher! Very patient and knowledgeable about React development.'
    },
    {
      name: 'Bob Smith',
      rating: 5,
      text: 'Great photography skills session. Learned a lot about composition and lighting.'
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>My Profile</h1>
        <button className={classes.editButton}>
          <Edit size={16} />
          Edit Profile
        </button>
      </div>

      <div className={classes.profileGrid}>
        <div className={classes.profileCard}>
          <div className={classes.avatar}>
            <User size={48} color={theme.colors.text} />
          </div>
          <h2 className={classes.name}>John Doe</h2>
          <p className={classes.bio}>
            Full-stack developer passionate about sharing knowledge and learning new skills. 
            Love photography and always eager to help others grow.
          </p>

          <div className={classes.contactInfo}>
            <div className={classes.contactItem}>
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
            <div className={classes.contactItem}>
              <Mail size={16} />
              <span>john.doe@email.com</span>
            </div>
            <div className={classes.contactItem}>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <div className={classes.stats}>
            <div className={classes.statItem}>
              <h3 className={classes.statNumber}>28</h3>
              <p className={classes.statLabel}>Skills Taught</p>
            </div>
            <div className={classes.statItem}>
              <h3 className={classes.statNumber}>15</h3>
              <p className={classes.statLabel}>Skills Learned</p>
            </div>
            <div className={classes.statItem}>
              <h3 className={classes.statNumber}>4.9</h3>
              <p className={classes.statLabel}>Rating</p>
            </div>
          </div>
        </div>

        <div className={classes.detailsSection}>
          <div className={classes.detailCard}>
            <h3 className={classes.sectionTitle}>My Skills</h3>
            <div className={classes.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={classes.skillTag}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className={classes.detailCard}>
            <h3 className={classes.sectionTitle}>Recent Reviews</h3>
            <div className={classes.reviewsList}>
              {reviews.map((review, index) => (
                <div key={index} className={classes.reviewItem}>
                  <div className={classes.reviewHeader}>
                    <h4 className={classes.reviewerName}>{review.name}</h4>
                    <div className={classes.reviewRating}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} color={theme.colors.warning} fill={theme.colors.warning} />
                      ))}
                    </div>
                  </div>
                  <p className={classes.reviewText}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;