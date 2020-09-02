import store from 'store';

export default (props) => {
  store.remove('loggedIn');
  console.log('you have been logged out. boo!');
  props.history.push('/login');
}
