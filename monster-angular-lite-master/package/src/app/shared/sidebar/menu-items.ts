import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Inicio',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/recomendaciones',
    title: 'Recomendaciones',
    icon: 'bi bi-patch-check',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: 'A cerca de',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
