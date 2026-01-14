
import React from 'react';

export const COLORS = {
  primary: '#0D9488', // Teal-600
  secondary: '#F59E0B', // Amber-500
  accent: '#6366F1', // Indigo-500
};

export const ROUTES = {
  DASHBOARD: '/',
  RIDES: '/rides',
  BUDDIES: '/buddies',
  GROUPS: '/groups',
  TIMELINE: '/timeline',
  AI_PLANNER: '/ai-planner',
  MARKETPLACE: '/marketplace',
  ADMIN: '/admin',
  PROFILE: '/profile',
};

export const MOCK_USERS: any[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex@example.com',
    role: 'traveler',
    profilePicture: 'https://picsum.photos/seed/alex/200',
    bio: 'Avid traveler and mountain climber.',
    location: 'Denver, CO',
    subscription: 'Premium',
    compassPoints: 1250,
    buddies: ['2', '3']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    role: 'traveler',
    profilePicture: 'https://picsum.photos/seed/sarah/200',
    bio: 'Foodie exploring South East Asia.',
    location: 'Singapore',
    subscription: 'Basic',
    compassPoints: 450,
    buddies: ['1']
  }
];
