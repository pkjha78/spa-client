import Dashboard from './pages/Dashboard';
import Users from './pages/users';
import Profiles from './pages/profiles';
import Sounds from './pages/sounds';
import Videos from './pages/videos';
import Discovery from './pages/discovery';
import ChangePassword from './pages/admin/ChangePassword';
import Logout from './pages/admin/Logout';


// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'User Admin',
    path: '/pages/users',
    component: Users,
  },
  {
    name: 'Profiles Admin',
    path: '/pages/profiles',
    component: Profiles,
  },
  {
    name: 'Sounds Admin',
    path: '/pages/sounds',
    component: Sounds,
  },
  {
    name: 'Videos Admin',
    path: '/pages/videos',
    component: Videos,
  },
  {
    name: 'Discovery Admin',
    path: '/pages/discovery',
    component: Discovery,
  },
  {
    name: 'Change Password',
    path: '/password',
    component: ChangePassword,
  },
  {
    name: 'Logout',
    path: '/logout',
    component: Logout,
  },
];

export default pageList;
