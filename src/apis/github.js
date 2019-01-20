const URL_ROOT = 'https://api.github.com'

const users = async (username = '') => {
  const res = await fetch(`${URL_ROOT}/users/${username}`)

  return res.json()
}

const repos = async username => {
  const res = await fetch(`${URL_ROOT}/users/${username}/repos`)

  return res.json()
}

export { users, repos }
