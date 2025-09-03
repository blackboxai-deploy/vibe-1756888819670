// User types
export interface User {
  id: string;
  clerkUserId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  encryptedReplicateApiKey?: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  subscriptionTier: 'free' | 'pro' | 'enterprise';
  subscriptionEndDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Transaction types
export interface Transaction {
  id: string;
  userId: string;
  uniqueAmount: number;
  baseAmount: number;
  status: 'pending' | 'pending_admin_verification' | 'approved' | 'rejected';
  subscriptionTier: 'pro' | 'enterprise';
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
  approvedAt?: Date;
  approvedByAdmin?: string;
}

// API Usage types
export interface ApiUsage {
  id: string;
  userId: string;
  apiType: 'prompt_generation' | 'video_generation';
  model: 'claude-3-sonnet' | 'veo-3';
  inputSize?: number;
  cost?: number;
  success: boolean;
  createdAt: Date;
}

// Video generation types
export interface VideoGenerationRequest {
  prompt?: string;
  imageUrl?: string;
  mode: 'text-to-video' | 'image-to-video';
  duration: number;
  aspectRatio: string;
  resolution: string;
  apiKey: string;
}

export interface VideoGenerationResponse {
  videoUrl: string;
  status: 'success' | 'error';
  message?: string;
  metadata?: {
    duration: number;
    resolution: string;
    fileSize?: number;
  };
}

// Prompt generation types
export interface PromptGenerationRequest {
  idea: string;
}

export interface PromptGenerationResponse {
  prompts: string[];
  status: 'success' | 'error';
  message?: string;
}

// Settings types
export interface UserSettings {
  replicateApiKey?: string;
  preferences?: {
    defaultDuration: number;
    defaultAspectRatio: string;
    defaultResolution: string;
  };
}

// Admin types
export interface AdminSettings {
  id: string;
  key: string;
  value: string;
  description?: string;
  updatedAt: Date;
}