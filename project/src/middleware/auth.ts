import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware:Middleware = ({ route, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (! user && !route.path.startsWith('/login') ) {
      // 特定のPage以外はLogin画面へredirect
      // TopPage, not-members-only はredirectしない
      if ( route.path == '/' ) {}
      else if ( route.path.startsWith('/not-members-only') ) {}
      else return redirect('/login')
    }
  })
}
export default middleware