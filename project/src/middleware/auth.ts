import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware:Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (! user && !route.path.startsWith('/login') ) {
      // 特定のPage以外はLogin画面へredirect
      // TopPage, not-members-only はredirectしない
      console.log('in middleware:' + route.path)
      if ( route.path == '/' ) {}
      else if ( route.path.startsWith('/not-members-only') ) {}
      else {
        window.location.href = '/login'
        return new Promise((resolve) => {
          // Wait for broswer to redirect...
        })
      }
    }
  })
}
export default middleware