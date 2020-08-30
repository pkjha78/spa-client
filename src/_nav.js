export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      divider: true,
    },
    {
      name: 'All Users',
      url: '/pages/users',
      icon: 'Users',
    },
    {
      name: 'Profile Verification',
      url: '/pages/profiles',
      icon: 'UserCheck',
    },
    {
      name: 'Sounds Admin',
      url: '/pages/sounds',
      icon: 'Music',
    },
    {
      name: 'All Videos',
      url: '/pages/videos',
      icon: 'Video',
    },
    {
      name: 'Discovery Sections',
      url: '/pages/discovery',
      icon: 'Camera',
    },
    {
      divider: true,
    },
    {
      name: 'Change Password',
      url: '/password',
      icon: 'Edit',
      badge: {
        text: 'NEW',
      },
    },
  ],
  bottom: [
    {
      name: 'Logout',
      url: '/dashboard',
      icon: 'User',
    },
  ],
};
