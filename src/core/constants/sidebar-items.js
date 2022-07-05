export const sidebarItems = [
  {
    id: 1,
    title: 'App',
    icon: '<i class="abn-icon icon-thumb" />',
    children: [
      {
        id: 1,
        title: 'Home',
        route: '/home',
        icon: '<i class="abn-icon icon-home" />'
      },
      {
        id: 2,
        title: 'TV Shows',
        route: '/tv-shows?genre=&search=&page=1',
        icon: '<i class="abn-icon icon-television" />'
      },
      {
        id: 3,
        title: 'Genres',
        route: '/genres?genre=&page=1',
        icon: '<i class="abn-icon icon-tags" />'
      },
    ]
  },
  {
    id: 2,
    title: 'Project',
    icon: '<i class="abn-icon icon-briefcase" />',
    children: [
      {
        id: 1,
        title: 'About',
        route: '/about',
        icon: '<i class="abn-icon icon-info-circled" />'
      },
      {
        id: 2,
        title: 'Contact',
        route: '/contact',
        icon: '<i class="abn-icon icon-phone" />'
      }
    ]
  }
]
