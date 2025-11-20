import { clsx, type ClassValue } from 'clsx'

// Función para combinar clases CSS
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Función para formatear fechas
export function formatDate(date: string | Date, locale = 'es-ES'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Función para formatear números
export function formatNumber(num: number, locale = 'es-ES'): string {
  return num.toLocaleString(locale)
}

// Función para capitalizar texto
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Función para truncar texto
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

// Función para generar ID único
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

// Función para validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Función para validar URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}


