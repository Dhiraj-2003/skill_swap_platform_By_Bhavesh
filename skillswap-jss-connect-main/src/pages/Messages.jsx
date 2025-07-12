import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Search, Send, User, MoreHorizontal } from 'lucide-react';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    display: 'flex'
  },
  sidebar: {
    width: '320px',
    backgroundColor: theme.colors.surface,
    borderRight: `1px solid ${theme.colors.border}`,
    display: 'flex',
    flexDirection: 'column'
  },
  sidebarHeader: {
    padding: theme.spacing.lg,
    borderBottom: `1px solid ${theme.colors.border}`
  },
  sidebarTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    margin: '0 0 1rem 0'
  },
  searchContainer: {
    position: 'relative'
  },
  searchInput: {
    width: '100%',
    padding: `${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.sm} 2.5rem`,
    backgroundColor: theme.colors.surfaceLight,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.sm,
    '&::placeholder': {
      color: theme.colors.textSecondary
    }
  },
  searchIcon: {
    position: 'absolute',
    left: theme.spacing.sm,
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.colors.textSecondary
  },
  conversationsList: {
    flex: 1,
    overflowY: 'auto'
  },
  conversationItem: {
    padding: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.border}`,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.surfaceLight
    },
    '&.active': {
      backgroundColor: theme.colors.primary + '20'
    }
  },
  conversationHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.xs
  },
  conversationAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: theme.colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm
  },
  conversationInfo: {
    flex: 1
  },
  conversationName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '500',
    margin: 0
  },
  conversationTime: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary
  },
  conversationPreview: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    margin: 0,
    paddingLeft: '52px'
  },
  chatArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  chatHeader: {
    padding: theme.spacing.lg,
    borderBottom: `1px solid ${theme.colors.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chatTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    margin: 0
  },
  messagesArea: {
    flex: 1,
    padding: theme.spacing.lg,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md
  },
  message: {
    maxWidth: '70%',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.typography.fontSize.base
  },
  messageReceived: {
    backgroundColor: theme.colors.surface,
    alignSelf: 'flex-start'
  },
  messageSent: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end'
  },
  messageInput: {
    padding: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.border}`,
    display: 'flex',
    gap: theme.spacing.md
  },
  textInput: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.base,
    '&::placeholder': {
      color: theme.colors.textSecondary
    }
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.colors.primaryDark
    }
  }
});

const Messages = () => {
  const classes = useStyles();
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      name: 'Alice Johnson',
      time: '2:30 PM',
      preview: 'Thanks for the React lesson!',
      messages: [
        { text: 'Hi! Ready for our React session?', sent: false },
        { text: 'Yes, absolutely! Let\'s start', sent: true },
        { text: 'Great! Let me share my screen', sent: false },
        { text: 'Thanks for the React lesson!', sent: false }
      ]
    },
    {
      name: 'Bob Smith',
      time: '1:15 PM',
      preview: 'Can we reschedule for tomorrow?',
      messages: [
        { text: 'Hey, about our photography session', sent: false },
        { text: 'Can we reschedule for tomorrow?', sent: false },
        { text: 'Sure, no problem!', sent: true }
      ]
    }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message
      setMessageText('');
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
          <h2 className={classes.sidebarTitle}>Messages</h2>
          <div className={classes.searchContainer}>
            <Search className={classes.searchIcon} size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              className={classes.searchInput}
            />
          </div>
        </div>

        <div className={classes.conversationsList}>
          {conversations.map((conversation, index) => (
            <div
              key={index}
              className={`${classes.conversationItem} ${selectedConversation === index ? 'active' : ''}`}
              onClick={() => setSelectedConversation(index)}
            >
              <div className={classes.conversationHeader}>
                <div className={classes.conversationAvatar}>
                  <User size={20} color={theme.colors.text} />
                </div>
                <div className={classes.conversationInfo}>
                  <h3 className={classes.conversationName}>{conversation.name}</h3>
                </div>
                <span className={classes.conversationTime}>{conversation.time}</span>
              </div>
              <p className={classes.conversationPreview}>{conversation.preview}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.chatArea}>
        <div className={classes.chatHeader}>
          <h3 className={classes.chatTitle}>{conversations[selectedConversation]?.name}</h3>
          <MoreHorizontal size={20} color={theme.colors.textSecondary} />
        </div>

        <div className={classes.messagesArea}>
          {conversations[selectedConversation]?.messages.map((message, index) => (
            <div
              key={index}
              className={`${classes.message} ${message.sent ? classes.messageSent : classes.messageReceived}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className={classes.messageInput}>
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className={classes.textInput}
          />
          <button onClick={handleSendMessage} className={classes.sendButton}>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;