// Constantes de la aplicación

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
} as const

export const STORAGE_KEYS = {
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const

export const DEBOUNCE_DELAY = 300

export const PAGINATION_DEFAULT = {
  PAGE: 1,
  LIMIT: 10,
} as const


