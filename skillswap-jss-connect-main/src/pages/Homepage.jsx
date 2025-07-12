import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Users, MessageSquare, Star, ArrowRight, BookOpen, Handshake, Globe } from 'lucide-react';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text
  },
  hero: {
    padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
    textAlign: 'center',
    background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%)`,
    borderBottom: `1px solid ${theme.colors.border}`
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing.lg,
    background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.primary} 100%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem'
    }
  },
  heroSubtitle: {
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xl,
    lineHeight: '1.6'
  },
  ctaButtons: {
    display: 'flex',
    gap: theme.spacing.md,
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  ctaButton: {
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    transition: 'all 0.3s ease',
    border: 'none'
  },
  ctaPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    '&:hover': {
      backgroundColor: theme.colors.primaryDark,
      transform: 'translateY(-2px)',
      boxShadow: `0 10px 25px ${theme.colors.primary}40`
    }
  },
  ctaSecondary: {
    backgroundColor: 'transparent',
    color: theme.colors.text,
    border: `2px solid ${theme.colors.border}`,
    '&:hover': {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.primary,
      transform: 'translateY(-2px)'
    }
  },
  section: {
    padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    margin: `0 0 ${theme.spacing.xl} 0`
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.xl
  },
  featureCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    textAlign: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: theme.colors.primary,
      boxShadow: `0 20px 40px ${theme.colors.primary}20`
    }
  },
  featureIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: theme.colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `0 auto ${theme.spacing.lg} auto`
  },
  featureTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    margin: `0 0 ${theme.spacing.md} 0`
  },
  featureDescription: {
    color: theme.colors.textSecondary,
    lineHeight: '1.6',
    margin: 0
  },
  howItWorks: {
    backgroundColor: theme.colors.surface,
    borderTop: `1px solid ${theme.colors.border}`,
    borderBottom: `1px solid ${theme.colors.border}`
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.xl
  },
  stepCard: {
    textAlign: 'center',
    padding: theme.spacing.lg
  },
  stepNumber: {
    width: '48px',
    height: '48px',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    margin: `0 auto ${theme.spacing.md} auto`
  },
  stepTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    margin: `0 0 ${theme.spacing.sm} 0`
  },
  stepDescription: {
    color: theme.colors.textSecondary,
    margin: 0
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: theme.spacing.lg,
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.colors.primary,
    margin: `0 0 ${theme.spacing.sm} 0`
  },
  statLabel: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textSecondary,
    margin: 0
  },
  footer: {
    backgroundColor: theme.colors.surface,
    borderTop: `1px solid ${theme.colors.border}`,
    padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
    textAlign: 'center'
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  footerTitle: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    margin: `0 0 ${theme.spacing.md} 0`
  },
  footerText: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
    lineHeight: '1.6'
  }
});

const Homepage = ({ onNavigateToLogin }) => {
  const classes = useStyles();

  const features = [
    {
      icon: Users,
      title: 'Connect with Learners',
      description: 'Find people who want to learn what you know and teach what you want to learn.'
    },
    {
      icon: BookOpen,
      title: 'Skill Exchange',
      description: 'Trade knowledge and skills in a mutually beneficial learning environment.'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Chat',
      description: 'Communicate with your learning partners through our built-in messaging system.'
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Build trust in the community with ratings and reviews from fellow learners.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Learn from people around the world and expand your cultural horizons.'
    },
    {
      icon: Handshake,
      title: 'Fair Exchange',
      description: 'Everyone teaches and everyone learns - creating a balanced learning ecosystem.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Create Your Profile',
      description: 'List the skills you can teach and what you want to learn'
    },
    {
      number: '2',
      title: 'Find Matches',
      description: 'Browse and connect with people who complement your skills'
    },
    {
      number: '3',
      title: 'Start Learning',
      description: 'Begin your skill exchange journey through video calls and messages'
    },
    {
      number: '4',
      title: 'Grow Together',
      description: 'Build lasting learning relationships and expand your skillset'
    }
  ];

  return (
    <div className={classes.container}>
      {/* Hero Section */}
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>
            Learn Any Skill, Teach What You Know
          </h1>
          <p className={classes.heroSubtitle}>
            Join the global community where knowledge is shared freely. 
            Connect with learners and teachers to exchange skills in a collaborative environment.
          </p>
          <div className={classes.ctaButtons}>
            <button 
              className={`${classes.ctaButton} ${classes.ctaPrimary}`}
              onClick={onNavigateToLogin}
            >
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button 
              className={`${classes.ctaButton} ${classes.ctaSecondary}`}
              onClick={onNavigateToLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>Why Choose SkillSwap?</h2>
        <div className={classes.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={classes.featureCard}>
                <div className={classes.featureIcon}>
                  <Icon size={32} color={theme.colors.text} />
                </div>
                <h3 className={classes.featureTitle}>{feature.title}</h3>
                <p className={classes.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`${classes.section} ${classes.howItWorks}`}>
        <h2 className={classes.sectionTitle}>How It Works</h2>
        <div className={classes.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={classes.stepCard}>
              <div className={classes.stepNumber}>{step.number}</div>
              <h3 className={classes.stepTitle}>{step.title}</h3>
              <p className={classes.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>Join Our Growing Community</h2>
        <div className={classes.stats}>
          <div>
            <h3 className={classes.statNumber}>10K+</h3>
            <p className={classes.statLabel}>Active Learners</p>
          </div>
          <div>
            <h3 className={classes.statNumber}>500+</h3>
            <p className={classes.statLabel}>Skills Available</p>
          </div>
          <div>
            <h3 className={classes.statNumber}>25K+</h3>
            <p className={classes.statLabel}>Successful Exchanges</p>
          </div>
          <div>
            <h3 className={classes.statNumber}>4.9</h3>
            <p className={classes.statLabel}>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={classes.footer}>
        <div className={classes.footerContent}>
          <h2 className={classes.footerTitle}>Ready to Start Learning?</h2>
          <p className={classes.footerText}>
            Join thousands of learners who are already exchanging skills and growing together.
          </p>
          <button 
            className={`${classes.ctaButton} ${classes.ctaPrimary}`}
            onClick={onNavigateToLogin}
          >
            Join SkillSwap Today
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;