export interface InstagramProfile {
  username: string;
  fullName: string;
  biography: string;
  followers: number;
  following: number;
  postsCount: number;
  verified: boolean;
  isBusinessAccount: boolean;
  businessCategory: string;
  profilePicUrl: string;
}

export interface InstagramMetrics {
  analyzedPosts: number;
  avgLikes: number;
  avgComments: number;
  engagementRate: number;
  likeToCommentRatio: number;
  growthRate: number;
  daysSinceLastPost: number | null;
  postFrequencyDays: number;
  consistencyScore: number;
  score: number;
  verdict: 'عالی' | 'خوب' | 'متوسط' | 'ضعیف';
}

export interface InstagramPost {
  id: string;
  shortCode: string;
  type: 'Image' | 'Video' | 'Sidecar';
  caption: string;
  likesCount: number;
  commentsCount: number;
  url: string;
  timestamp: string;
}

export interface AnalyzeResponse {
  profile: InstagramProfile;
  metrics: InstagramMetrics;
  posts: InstagramPost[];
}