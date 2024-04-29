import Bookmarks from '@/assets/image/icons/bookmarks.svg';
import Explore from '@/assets/image/icons/explore.svg';
import HomeIcon from '@/assets/image/icons/home-outline.svg';
import Lists from '@/assets/image/icons/lists.svg';
import Messages from '@/assets/image/icons/messages.svg';
import More from '@/assets/image/icons/more.svg';
import Notification from '@/assets/image/icons/notification.svg';
import Profile from '@/assets/image/icons/profile-fill.svg';

export const SidebarLinks = [
  {
    icon: HomeIcon,
    title: 'Home',
    alt: 'home',
    link: '/feed',
  },
  {
    icon: Explore,
    title: 'Explore',
    alt: 'explore',
    link: '/feed/default',
  },
  {
    icon: Notification,
    title: 'Notifications',
    alt: 'notifications',
    link: '/feed/default',
  },
  {
    icon: Messages,
    title: 'Messages',
    alt: 'messages',
    link: '/feed/default',
  },
  {
    icon: Bookmarks,
    title: 'Bookmarks',
    alt: 'bookmarks',
    link: '/feed/default',
  },
  {
    icon: Lists,
    title: 'Lists',
    alt: 'lists',
    link: '/feed/default',
  },
  {
    icon: Profile,
    title: 'Profile',
    alt: 'profile',
    link: '/feed/profile',
  },
  {
    icon: More,
    title: 'More',
    alt: 'more',
    link: '/feed/default',
  },
];
