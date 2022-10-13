export default function ({ $auth, store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
