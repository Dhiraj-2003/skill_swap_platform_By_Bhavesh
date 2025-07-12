import React, { useState } from 'react';
import Layout from '../components/Layout';
import Dashboard from './Dashboard';
import SkillsExchange from './SkillsExchange';
import SwapRequests from './SwapRequests';
import Messages from './Messages';
import Feedback from './Feedback';
import Profile from './Profile';
import Settings from './Settings';

const MainApp = () => {
  const [activeRoute, setActiveRoute] = useState('dashboard');

  const handleNavigation = (route) => {
    if (route === 'logout') {
      // Handle logout logic here
      window.location.href = '/login';
      return;
    }
    setActiveRoute(route);
  };

  const renderContent = () => {
    switch (activeRoute) {
      case 'dashboard':
        return <Dashboard />;
      case 'skills':
        return <SkillsExchange />;
      case 'swaps':
        return <SwapRequests />;
      case 'messages':
        return <Messages />;
      case 'feedback':
        return <Feedback />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeRoute={activeRoute} onNavigate={handleNavigation}>
      {renderContent()}
    </Layout>
  );
};

export default MainApp;