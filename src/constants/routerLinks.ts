export const PATH = {
  START_PAGE: '/',
  SIGN_UP_PAGE: '/sign-up',
  LOG_IN_PAGE: '/login',
  HOME_PAGE: '/feed',
  NOT_FOUND: '/*',
};

export const ROUTER_LINKS = [
  {
    id: 1,
    path: PATH.START_PAGE,
    name: 'Home',
  },
  {
    id: 2,
    path: PATH.SIGN_UP_PAGE,
    name: 'Timeline',
  },
  {
    id: 3,
    path: PATH.LOG_IN_PAGE,
    name: 'Bank card',
  },
  {
    id: 4,
    path: PATH.HOME_PAGE,
    name: 'Contact',
  },
];

export default { ROUTER_LINKS, PATH };
