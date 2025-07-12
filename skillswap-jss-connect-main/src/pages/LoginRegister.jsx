import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from '../styles/theme';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg
  },
  card: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)'
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing.xl
  },
  title: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    margin: '0 0 0.5rem 0'
  },
  subtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.base,
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.text
  },
  inputContainer: {
    position: 'relative'
  },
  input: {
    width: '100%',
    padding: `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 3rem`,
    backgroundColor: theme.colors.surfaceLight,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.base,
    boxSizing: 'border-box',
    '&::placeholder': {
      color: theme.colors.textSecondary
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
      boxShadow: `0 0 0 3px ${theme.colors.primary}20`
    }
  },
  inputError: {
    borderColor: theme.colors.error
  },
  inputIcon: {
    position: 'absolute',
    left: theme.spacing.md,
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.colors.textSecondary
  },
  toggleButton: {
    position: 'absolute',
    right: theme.spacing.md,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: theme.colors.textSecondary,
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.text
    }
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.typography.fontSize.sm,
    marginTop: theme.spacing.xs
  },
  message: {
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    border: '1px solid'
  },
  messageSuccess: {
    backgroundColor: theme.colors.success + '20',
    borderColor: theme.colors.success,
    color: theme.colors.success
  },
  messageError: {
    backgroundColor: theme.colors.error + '20',
    borderColor: theme.colors.error,
    color: theme.colors.error
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.base,
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.colors.primaryDark
    }
  },
  toggleLink: {
    textAlign: 'center',
    marginTop: theme.spacing.lg
  },
  link: {
    color: theme.colors.primary,
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  demoText: {
    textAlign: 'center',
    marginTop: theme.spacing.md,
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary
  }
});

const LoginRegister = ({ setIsAuthenticated, setIsAdmin }) => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: '', type: '' });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm password is required';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setTimeout(() => {
      if (isLogin) {
        setMessage({ text: 'Login successful!', type: 'success' });
        const isAdminUser = formData.email === 'admin@skillswap.com';
        setIsAdmin(isAdminUser);
        setIsAuthenticated(true);
      } else {
        setMessage({ text: 'Registration successful! Please login.', type: 'success' });
        setIsLogin(true);
        setFormData({ email: '', password: '', confirmPassword: '' });
      }
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.header}>
          <h1 className={classes.title}>Welcome to SkillSwap</h1>
          <p className={classes.subtitle}>
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputGroup}>
            <label className={classes.label}>Email Address</label>
            <div className={classes.inputContainer}>
              <Mail className={classes.inputIcon} size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`${classes.input} ${errors.email ? classes.inputError : ''}`}
              />
            </div>
            {errors.email && <span className={classes.errorText}>{errors.email}</span>}
          </div>

          <div className={classes.inputGroup}>
            <label className={classes.label}>Password</label>
            <div className={classes.inputContainer}>
              <Lock className={classes.inputIcon} size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={`${classes.input} ${errors.password ? classes.inputError : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={classes.toggleButton}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <span className={classes.errorText}>{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className={classes.inputGroup}>
              <label className={classes.label}>Confirm Password</label>
              <div className={classes.inputContainer}>
                <Lock className={classes.inputIcon} size={20} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={`${classes.input} ${errors.confirmPassword ? classes.inputError : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={classes.toggleButton}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <span className={classes.errorText}>{errors.confirmPassword}</span>}
            </div>
          )}

          {message.text && (
            <div className={`${classes.message} ${message.type === 'success' ? classes.messageSuccess : classes.messageError}`}>
              {message.text}
            </div>
          )}

          <button type="submit" className={classes.submitButton}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className={classes.toggleLink}>
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({ email: '', password: '', confirmPassword: '' });
                setErrors({});
                setMessage({ text: '', type: '' });
              }}
              className={classes.link}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </span>
          </div>

          <p className={classes.demoText}>
            Demo: Use admin@skillswap.com for admin access
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;