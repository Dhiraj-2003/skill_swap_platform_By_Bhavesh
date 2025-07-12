import React from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Home, Search, ArrowRightLeft, MessageSquare, ThumbsUp, User, Settings, LogOut } from 'lucide-react';

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.colors.background
  },
  sidebar: {
    width: '250px',
    backgroundColor: theme.colors.surface,
    borderRight: `1px solid ${theme.colors.border}`,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.lg
  },
  logo: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xl,
    textAlign: 'center'
  },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xs,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover, &.active': {
      backgroundColor: theme.colors.primary + '20',
      color: theme.colors.primary
    }
  },
  navSeparator: {
    height: '1px',
    backgroundColor: theme.colors.border,
    margin: `${theme.spacing.lg} 0`
  },
  content: {
    flex: 1,
    overflow: 'auto'
  }
});

const Layout = ({ children, activeRoute, onNavigate }) => {
  const classes = useStyles();

  const navItems = [
    { icon: Home, label: 'Dashboard', route: 'dashboard' },
    { icon: Search, label: 'Find Skills', route: 'skills' },
    { icon: ArrowRightLeft, label: 'Swap Requests', route: 'swaps' },
    { icon: MessageSquare, label: 'Messages', route: 'messages' },
    { icon: ThumbsUp, label: 'Feedback', route: 'feedback' },
    { icon: User, label: 'Profile', route: 'profile' },
    { icon: Settings, label: 'Settings', route: 'settings' },
    { icon: LogOut, label: 'Logout', route: 'logout' }
  ];

  return (
    <div className={classes.layout}>
      <div className={classes.sidebar}>
        <div className={classes.logo}>SkillSwap</div>
        
        <nav className={classes.nav}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isLogout = item.route === 'logout';
            const needsSeparator = index === navItems.length - 2; // Before settings
            
            return (
              <React.Fragment key={item.route}>
                {needsSeparator && <div className={classes.navSeparator} />}
                <div
                  className={`${classes.navItem} ${activeRoute === item.route ? 'active' : ''}`}
                  onClick={() => onNavigate(item.route)}
                >
                  <Icon size={20} />
                  {item.label}
                </div>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;