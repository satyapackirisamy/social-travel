
export enum UserRole {
  TRAVELER = 'traveler',
  VENDOR = 'vendor',
  ADMIN = 'admin'
}

export enum SubscriptionTier {
  FREE = 'Free',
  BASIC = 'Basic',
  PREMIUM = 'Premium',
  ENTERPRISE = 'Enterprise'
}

export enum RideStatus {
  SCHEDULED = 'scheduled',
  ONGOING = 'ongoing',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum VendorType {
  HOTEL = 'Hotel',
  HOUSEBOAT = 'Houseboat',
  RESTAURANT = 'Restaurant',
  ACTIVITY = 'Activity'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profilePicture: string;
  bio: string;
  location: string;
  subscription: SubscriptionTier;
  compassPoints: number;
  buddies: string[]; // IDs of buddies
}

export interface Ride {
  id: string;
  driverId: string;
  origin: string;
  destination: string;
  departureTime: string;
  seatsAvailable: number;
  pricePerSeat: number;
  transportMode: string;
  status: RideStatus;
  description: string;
  passengers: string[]; // User IDs
  itinerary?: any[];
}

export interface Expense {
  id: string;
  rideId: string;
  payerId: string;
  amount: number;
  description: string;
  category: string;
  createdAt: string;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  imageUrl?: string;
  rideId?: string;
  likes: string[]; // User IDs
  createdAt: string;
}

export interface Vendor {
  id: string;
  ownerId: string;
  name: string;
  type: VendorType;
  description: string;
  location: string;
  pricePerNight?: number;
  image: string;
  amenities: string[];
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  isRead: boolean;
  type: string;
  relatedId?: string;
  createdAt: string;
}
