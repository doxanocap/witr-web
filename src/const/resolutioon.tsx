interface ResolutionParams {
  name: string
  minWidth: number
  maxWidth: number
}

export type ResolutionTypes = 'lg' | 'md'

export const whichResolution = (width: number): ResolutionTypes => {
  Resolutions.map((item, key) => {
    if (width > item.minWidth && width < item.maxWidth) return item.name
  })
  return 'lg'
}

export const MediumResolution: ResolutionParams = {
  name: 'md',
  minWidth: 0,
  maxWidth: 1280,
}

export const LargeResolution: ResolutionParams = {
  name: 'lg',
  minWidth: 1280,
  maxWidth: 1920,
}

export const Resolutions: ResolutionParams[] = [
  MediumResolution,
  LargeResolution,
]
