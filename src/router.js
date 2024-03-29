import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetail from './components/ContactDetail';

export const HOME = process.env.NODE_ENV === 'production'
? '/' + process.env.VUE_APP_PROJECT_NAME + '/'
: '/';

console.debug(process.env);

const routes = [
  {
    path: HOME,
    name: 'contactList',
    component: ContactList,
  },
  {
    path: HOME + 'contact/:contactId',
    name: 'contact',
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
