import {IRoute} from '@/app/interfaces/router.interface';
import LoginUI from '../screens/LoginUI';

const AuthRouter: IRoute[] = [
  {
    name: 'Login',
    component: LoginUI,
    options: {headerShown: false},
  },
];

export default AuthRouter;
