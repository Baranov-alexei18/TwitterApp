import Bookmarks from '@/assets/image/icons/bookmarks.svg';
import Explore from '@/assets/image/icons/explore.svg';
import HomeIcon from '@/assets/image/icons/home-outline.svg';
import Lists from '@/assets/image/icons/lists.svg';
import Messages from '@/assets/image/icons/messages.svg';
import More from '@/assets/image/icons/more.svg';
import Notification from '@/assets/image/icons/notification.svg';
import Profile from '@/assets/image/icons/profile-fill.svg';

export const LOCALSTORAGE_TOKEN = 'userAuthToken';

export const SidebarLinks = [
  {
    icon: HomeIcon,
    title: 'Home',
    alt: 'home',
    link: '/',
  },
  {
    icon: Explore,
    title: 'Explore',
    alt: 'explore',
    link: '/',
  },
  {
    icon: Notification,
    title: 'Notifications',
    alt: 'notifications',
    link: '/',
  },
  {
    icon: Messages,
    title: 'Messages',
    alt: 'messages',
    link: '/',
  },
  {
    icon: Bookmarks,
    title: 'Bookmarks',
    alt: 'bookmarks',
    link: '/',
  },
  {
    icon: Lists,
    title: 'Lists',
    alt: 'lists',
    link: '/',
  },
  {
    icon: Profile,
    title: 'Profile',
    alt: 'profile',
    link: '/',
  },
  {
    icon: More,
    title: 'More',
    alt: 'more',
    link: '/',
  },
];

export const START_PAGE = {
  TITLE: 'Happening now',
  SUBTITLE: 'Join Twitter today',
  SIGN_UP_GOOGLE: 'Sign up with Google',
  SIGN_UP_EMAIL: 'Sign up with Email',
  ACCOUNT: 'Already have an account?',
  bankCardSearchSection: 'Search currency in the bank',
  FOOTER_MENU: ['About', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Ads info', 'Blog',
    'Status', 'Carrres', 'Brand Resources', 'Advertsing', 'Marketing', 'Twitter for Business', 'Developers', 'Directory',
    'Settings', '© 2024 Twitter, Inc.',
  ],
  LINKS_TO: {
    login: 'Log in',
    service: 'Terms of Service',
    policy: 'Privacy Policy',
    cookie: 'cookie Use',
  },
};

export const LOGIN_PAGE = {
  TITLE: 'Log in to Twitter',
  PASSWORD: 'Password',
  EMAIL: 'Phone number, email address',
  LOGIN: 'Log in',
  SIGN_UP: 'Sign up to Twitter',
};

export const SIGN_UP_PAGE = {
  TITLE: 'Create an account',
  PASSWORD: 'Password',
  PHONE: 'Phone number',
  EMAIL: 'Email',
  NAME: 'Name',
  LOGIN: 'Log in',
  TO_LOGIN: 'Use email',
  DATE_BIRTH: 'Date of birth',
  DESCRIPTION: 'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.',
  NEXT: 'Next',
};
