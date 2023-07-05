
export interface Props {
  text: string
  isHidden?: boolean
  marginX?: string
  marginY?: string
  style: 'dark' | 'light'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}