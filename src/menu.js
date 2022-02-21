export default [
  { 'header': 'Admin' },
  { 'href': '/', 'title': 'Home', 'icon': 'home' },
  { 'href': '/crud/types', 'title': 'Version Check', 'icon': 'check_box' },
  { 'href': '/crud/posts', 'title': 'Build Result', 'icon': 'format_list_bulleted' },
  {
    'title': 'Build',
    'icon': 'developer_mode',
    'items': [
      { 'href': '/example', 'title': 'Windows', 'icon': 'desktop_windows' },
      { 'href': '/about', 'title': 'IOS', 'icon': 'phone_iphone' },
      { 'href': '/about', 'title': 'AOS', 'icon': 'android' },
      { 'href': '/about', 'title': 'Server', 'icon': 'widgets' },
      { 'href': '/about', 'title': 'ETC', 'icon': 'more' }
    ]
  },
  { divider: true },
  { 'header': 'System' },
  { 'href': '/settings', 'title': 'Settings', 'icon': 'settings' },
  { 'href': '/login', 'icon': 'lock', 'title': 'Logout' }
]
