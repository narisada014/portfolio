import { Auth } from 'aws-amplify'

export default async function ({ redirect }) {
  let loggedIn = false
  if (process.client) {
    try {
      const user = await Auth.currentUserInfo()
      console.log('hoge')
      loggedIn = Boolean(user)
      if (!loggedIn) {
        return redirect('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }
}
