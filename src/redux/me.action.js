// action creator

export function setMe(user) {
  return {
    type: 'SET_ME',
    payload: user
  }
}

export function setRole(role) {
  return {
    type: 'SET_ROLE',
    payload: role
  }
}
