export class UserInfosFormatter {
  format(userInfos) {
    const userInfosFormatted = { ...userInfos, ...userInfos.keyData }
    delete userInfosFormatted.keyData
    return userInfosFormatted
  }
}
/**
 * Get UserInfos from API
 * @param {string} id
 * @returns {Object}
 */
export async function fetchUserInfos(id) {
  const response = await fetch(`http://localhost:3001/user/${id}`)
  const result = await response.json()
  const formatter = new UserInfosFormatter()
  return formatter.format(result.data)
}

/**
 * Get UserActivity from API
 * @param {string} id
 * @returns {Object}
 */
export async function fetchUserActivity(id) {
  const response = await fetch(`http://localhost:3001/user/${id}/activity`)
  const result = await response.json()
  return result.data
}

/**
 * Get UserAverage from API
 * @param {string} id
 * @returns {Object}
 */
export async function fetchUserAverage(id) {
  const response = await fetch(
    `http://localhost:3001/user/${id}/average-sessions`
  )
  const result = await response.json()
  return result.data
}

/**
 * Get UserPerformance from API
 * @param {string} id
 * @returns {Object}
 */
export async function fetchUserPerformance(id) {
  const response = await fetch(`http://localhost:3001/user/${id}/performance`)
  const result = await response.json()
  return result.data
}
