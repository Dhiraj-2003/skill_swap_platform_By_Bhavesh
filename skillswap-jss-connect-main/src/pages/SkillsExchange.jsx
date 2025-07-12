import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Search, User, Star, Clock, ArrowRightLeft } from 'lucide-react';

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
  searchSection: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.border}`,
    marginBottom: theme.spacing.xl
  },
  searchContainer: {
    position: 'relative',
    marginBottom: theme.spacing.md
  },
  searchInput: {
    width: '100%',
    padding: `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 3rem`,
    backgroundColor: theme.colors.surfaceLight,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.base,
    '&::placeholder': {
      color: theme.colors.textSecondary
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary
    }
  },
  searchIcon: {
    position: 'absolute',
    left: theme.spacing.md,
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.colors.textSecondary
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: theme.spacing.lg
  },
  skillCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: theme.colors.primary,
      transform: 'translateY(-2px)'
    }
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
  userLocation: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
    margin: 0
  },
  skillSection: {
    marginBottom: theme.spacing.md
  },
  skillLabel: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    color: theme.colors.textSecondary
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.xs
  },
  skillTag: {
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    backgroundColor: theme.colors.surfaceLight,
    color: theme.colors.text,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.fontSize.sm
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.border}`
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs
  },
  swapButton: {
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
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.primaryDark
    }
  }
});

const SkillsExchange = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const skills = [
    {
      id: 1,
      name: 'Alice Johnson',
      location: 'New York, USA',
      skillsOffered: ['React', 'JavaScript', 'UI Design'],
      skillsWanted: ['Python', 'Data Science'],
      rating: 4.8,
      reviews: 12
    },
    {
      id: 2,
      name: 'Bob Smith',
      location: 'London, UK',
      skillsOffered: ['Photography', 'Photoshop'],
      skillsWanted: ['Web Development', 'CSS'],
      rating: 4.9,
      reviews: 8
    },
    {
      id: 3,
      name: 'Maria Garcia',
      location: 'Barcelona, Spain',
      skillsOffered: ['Spanish', 'Writing'],
      skillsWanted: ['Marketing', 'SEO'],
      rating: 4.7,
      reviews: 15
    }
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Skills Exchange</h1>
        <div className={classes.searchSection}>
          <div className={classes.searchContainer}>
            <Search className={classes.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search for skills, people, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={classes.searchInput}
            />
          </div>
        </div>
      </div>

      <div className={classes.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.id} className={classes.skillCard}>
            <div className={classes.cardHeader}>
              <div className={classes.avatar}>
                <User size={24} color={theme.colors.text} />
              </div>
              <div className={classes.userInfo}>
                <h3 className={classes.userName}>{skill.name}</h3>
                <p className={classes.userLocation}>{skill.location}</p>
              </div>
            </div>

            <div className={classes.skillSection}>
              <div className={classes.skillLabel}>Can teach:</div>
              <div className={classes.skillTags}>
                {skill.skillsOffered.map((s, index) => (
                  <span key={index} className={classes.skillTag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={classes.skillSection}>
              <div className={classes.skillLabel}>Wants to learn:</div>
              <div className={classes.skillTags}>
                {skill.skillsWanted.map((s, index) => (
                  <span key={index} className={classes.skillTag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={classes.cardFooter}>
              <div className={classes.rating}>
                <Star size={16} color={theme.colors.warning} fill={theme.colors.warning} />
                <span>{skill.rating}</span>
                <span>({skill.reviews} reviews)</span>
              </div>
              <button className={classes.swapButton}>
                <ArrowRightLeft size={16} />
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExchange;