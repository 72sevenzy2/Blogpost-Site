declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare module '../assets/assets.jsx' {
  export const assets: Record<string, string>;
  export const blogCategories: string[];
  export const blog_data: {
    _id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    isPublished: boolean;
    subTitle: string;
  }[];
  export const comments_data: {
    _id: string;
    blog: any;
    name: string;
    content: string;
    isApproved: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
  export const dashboard_data: {
    blogs: number;
    comments: number;
    drafts: number;
    recentBlogs: any[];
  };
  export const footer_data: {
    title: string;
    links: string[];
  }[];
}
