// action creator

export function showLoading() {
  return {
    type: 'SHOW_LOADING',
  }
}

export function hideLoading() {
  return {
    type: 'HIDE_LOADING',
  }
}

export function setTheme(theme) {
  return {
    type: 'SET_THEME',
    payload: theme
  }
}