export default function ({ $axios, app, redirect, route }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    return config
  })

  $axios.onResponse(response => {
    console.log('Take response status ' + response.status)
    return response
  })

  $axios.onError(error => {
    console.log(app.$auth)
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 401:
        if (route.name !== 'login') {
          // Logout & redirect
          app.$auth.logout()
          redirect('/login')
        }
        break
      case 500:
        redirect('/500')
        break
    }

    return Promise.reject(error)
  })
}
