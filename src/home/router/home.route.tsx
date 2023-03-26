import {IRoute} from '@/app/interfaces/router.interface';
import HomeUI from '../screens/HomeUI';

const HomeRouter: IRoute[] = [
  {
    name: 'Home',
    component: HomeUI,
    tabOptions: {headerShown: false},
  },
];

export default HomeRouter;
