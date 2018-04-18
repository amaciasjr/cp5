import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SearchResults from '@/components/SearchResults'
import HashTag from '@/components/HashTag'
import UserPage from '@/components/UserPage'
import Profile from '@/components/Profile'
import Columbine from '@/components/Columbine'
import Lily from '@/components/Lily'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/hashtag/:hashtag',
      name: 'HashTag',
      component: HashTag
    },
    {
      path: '/user/:userID',
      name: 'UserPage',
      component: UserPage
    },
    {
    path: '/profile',
    name: 'Blue Spruce',
    component: Profile
    },
    {
        path: '/columbine',
        name: 'Columbine',
        component: Columbine
    },
    {
        path: '/lily',
        name: 'Lily',
        component: Lily
    },
  ]
})
