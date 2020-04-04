import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const allowPage: string[] = ['/', '/login']

const middleware:Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (! user && allowPage.indexOf(route.path) >= 0) {
      redirect('/login')
    }
  })
}
export default middleware