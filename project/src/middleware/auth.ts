import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware:Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (! user && route.path !== '/login') {
      if (route.path == '/') {}
      else if (route.path == '/not-members-only') {}
      else redirect('/login')
    }
  })
}
export default middleware