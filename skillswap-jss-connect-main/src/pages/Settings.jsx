import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Bell, Lock, User, Globe, Eye, Shield } from 'lucide-react';

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
    margin: '0 0 1rem 0'
  },
  settingsGrid: {
    display: 'grid',
    gap: theme.spacing.lg
  },
  settingCard: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg
  },
  cardIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    margin: 0
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} 0`,
    borderBottom: `1px solid ${theme.colors.border}`,
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  settingInfo: {
    flex: 1
  },
  settingLabel: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '500',
    marginBottom: theme.spacing.xs,
    margin: '0 0 0.25rem 0'
  },
  settingDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    margin: 0
  },
  toggle: {
    position: 'relative',
    width: '48px',
    height: '24px',
    backgroundColor: theme.colors.border,
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&.active': {
      backgroundColor: theme.colors.primary
    }
  },
  toggleSlider: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    backgroundColor: theme.colors.text,
    borderRadius: '50%',
    transition: 'transform 0.2s ease',
    '&.active': {
      transform: 'translateX(24px)'
    }
  },
  select: {
    backgroundColor: theme.colors.surfaceLight,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.sm,
    minWidth: '120px'
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    cursor: 'pointer',
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.primaryDark
    }
  },
  dangerButton: {
    backgroundColor: theme.colors.error,
    '&:hover': {
      backgroundColor: '#dc2626'
    }
  }
});

const Settings = () => {
  const classes = useStyles();
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    newMessages: true,
    skillRequests: true,
    weeklyDigest: false,
    profileVisibility: 'public',
    language: 'en',
    twoFactor: false,
    dataSharing: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const Toggle = ({ active, onChange }) => (
    <div className={`${classes.toggle} ${active ? 'active' : ''}`} onClick={onChange}>
      <div className={`${classes.toggleSlider} ${active ? 'active' : ''}`} />
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Settings</h1>
      </div>

      <div className={classes.settingsGrid}>
        {/* Notifications */}
        <div className={classes.settingCard}>
          <div className={classes.cardHeader}>
            <div className={classes.cardIcon}>
              <Bell size={20} />
            </div>
            <h2 className={classes.cardTitle}>Notifications</h2>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Email Notifications</div>
              <div className={classes.settingDescription}>Receive important updates via email</div>
            </div>
            <Toggle 
              active={settings.emailNotifications} 
              onChange={() => toggleSetting('emailNotifications')} 
            />
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Push Notifications</div>
              <div className={classes.settingDescription}>Get instant notifications on your device</div>
            </div>
            <Toggle 
              active={settings.pushNotifications} 
              onChange={() => toggleSetting('pushNotifications')} 
            />
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>New Messages</div>
              <div className={classes.settingDescription}>Notify when you receive new messages</div>
            </div>
            <Toggle 
              active={settings.newMessages} 
              onChange={() => toggleSetting('newMessages')} 
            />
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Skill Requests</div>
              <div className={classes.settingDescription}>Notify when someone requests your skills</div>
            </div>
            <Toggle 
              active={settings.skillRequests} 
              onChange={() => toggleSetting('skillRequests')} 
            />
          </div>
        </div>

        {/* Privacy */}
        <div className={classes.settingCard}>
          <div className={classes.cardHeader}>
            <div className={classes.cardIcon}>
              <Eye size={20} />
            </div>
            <h2 className={classes.cardTitle}>Privacy</h2>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Profile Visibility</div>
              <div className={classes.settingDescription}>Who can see your profile</div>
            </div>
            <select 
              className={classes.select}
              value={settings.profileVisibility}
              onChange={(e) => handleSelectChange('profileVisibility', e.target.value)}
            >
              <option value="public">Public</option>
              <option value="connections">Connections Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Data Sharing</div>
              <div className={classes.settingDescription}>Allow anonymized data for platform improvement</div>
            </div>
            <Toggle 
              active={settings.dataSharing} 
              onChange={() => toggleSetting('dataSharing')} 
            />
          </div>
        </div>

        {/* Security */}
        <div className={classes.settingCard}>
          <div className={classes.cardHeader}>
            <div className={classes.cardIcon}>
              <Shield size={20} />
            </div>
            <h2 className={classes.cardTitle}>Security</h2>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Two-Factor Authentication</div>
              <div className={classes.settingDescription}>Add an extra layer of security to your account</div>
            </div>
            <Toggle 
              active={settings.twoFactor} 
              onChange={() => toggleSetting('twoFactor')} 
            />
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Change Password</div>
              <div className={classes.settingDescription}>Update your account password</div>
            </div>
            <button className={classes.button}>Change</button>
          </div>
        </div>

        {/* Account */}
        <div className={classes.settingCard}>
          <div className={classes.cardHeader}>
            <div className={classes.cardIcon}>
              <User size={20} />
            </div>
            <h2 className={classes.cardTitle}>Account</h2>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Language</div>
              <div className={classes.settingDescription}>Choose your preferred language</div>
            </div>
            <select 
              className={classes.select}
              value={settings.language}
              onChange={(e) => handleSelectChange('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Export Data</div>
              <div className={classes.settingDescription}>Download all your account data</div>
            </div>
            <button className={classes.button}>Export</button>
          </div>

          <div className={classes.settingItem}>
            <div className={classes.settingInfo}>
              <div className={classes.settingLabel}>Delete Account</div>
              <div className={classes.settingDescription}>Permanently delete your account and all data</div>
            </div>
            <button className={`${classes.button} ${classes.dangerButton}`}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;