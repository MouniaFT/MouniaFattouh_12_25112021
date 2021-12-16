export async function fetchUserInfos(id) {
  const response = await fetch(`http://localhost:3001/user/${id}`)
  const result = await response.json()
  return result.data
}

export async function fetchUserActivity(id) {
  const response = await fetch(`http://localhost:3001/user/${id}/activity`)
  const result = await response.json()
  return result.data
}

export async function fetchUserAverage(id) {
  const response = await fetch(
    `http://localhost:3001/user/${id}/average-sessions`
  )
  const result = await response.json()
  return result.data
}

export async function fetchUserPerformance(id) {
  const response = await fetch(`http://localhost:3001/user/${id}/performance`)
  const result = await response.json()
  return result.data
}
