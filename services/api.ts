
import { User, Ride, Post, Vendor, Notification } from '../types';

const API_BASE_URL = 'http://localhost:3000'; // Standard NestJS port

/**
 * World-class API client with error handling and typing.
 */
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Request failed for ${endpoint}:`, error);
    throw error;
  }
}

export const UserService = {
  getCurrentUser: () => request<User>('/users/me'),
  updateProfile: (data: Partial<User>) => request<User>('/users/me', { method: 'PATCH', body: JSON.stringify(data) }),
  getBuddies: () => request<User[]>('/users/buddies'),
  getSuggestedBuddies: () => request<User[]>('/users/suggested'),
};

export const RideService = {
  getAll: () => request<Ride[]>('/rides'),
  getById: (id: string) => request<Ride>(`/rides/${id}`),
  create: (ride: Partial<Ride>) => request<Ride>('/rides', { method: 'POST', body: JSON.stringify(ride) }),
  join: (id: string) => request<Ride>(`/rides/${id}/join`, { method: 'POST' }),
};

export const SocialService = {
  getTimeline: () => request<Post[]>('/posts'),
  createPost: (content: string, imageUrl?: string) => request<Post>('/posts', { method: 'POST', body: JSON.stringify({ content, imageUrl }) }),
  getGroups: () => request<any[]>('/groups'),
};

export const MarketplaceService = {
  getVendors: (type?: string) => request<Vendor[]>(`/vendors${type ? `?type=${type}` : ''}`),
};
