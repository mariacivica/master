import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Mi perfil',
    icon: 'bi bi-person-circle',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/recommendations',
    title: 'Itinerarios',
    icon: 'bi bi-briefcase',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/resources',
    title: 'Recursos',
    icon: 'bi bi-folder',
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
