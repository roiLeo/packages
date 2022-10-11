import slugify from 'slugify'

export const trim = (text?: string) => (text || '').trim()

export const trimAll = (text?: string) => (text || '').replace(/\s/g, '')

const toSlug = (text: string, slug = '_'): string => slugify(text, slug)

export const upperTrim = (name: string, shouldSlugify?: boolean): string => {
  const result = trim(name).toUpperCase()
  return shouldSlugify ? toSlug(result) : result
}

export const lowerTrim = (name: string, shouldSlugify?: boolean): string => {
  const result = trim(name).toLowerCase()
  return shouldSlugify ? toSlug(result) : result
}

export const toUpperCase = (name: string): string => name.toUpperCase()
export const toLowerCase = (name: string): string => name.toLowerCase()
