import { Auth } from 'aws-amplify'

export default async function ({ redirect, req }) {
  let loggedIn = false
  if (process.server) {
  } else {
    try {
      const user = await Auth.currentUserInfo()
      loggedIn = Boolean(user)
    } catch (e) {
      console.log(e)
    }
  }
  if (!loggedIn) {
    return redirect('/login')
  }
}
