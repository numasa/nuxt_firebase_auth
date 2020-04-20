import { Middleware } from '@nuxt/types'
import { fb } from '../plugins/firebase'

const middleware:Middleware = ({ route, redirect }) => {
  fb.auth().onAuthStateChanged((user) => {
    if (! user && !route.path.startsWith('/login') ) {
      // 特定のPage以外はLogin画面へredirect
      // TopPage, signup, not-members-only はredirectしない
      if ( route.path == '/' ) {}
      else if ( route.path.startsWith('/signup') ) {}
      else if ( route.path.startsWith('/not-members-only') ) {}
      else return redirect('/login')
    } else if ( user && route.path.startsWith('/login') ) {
      // ソーシャル認証後はTop画面へredirect
      return redirect('/')
    }
  })
}
export default middleware