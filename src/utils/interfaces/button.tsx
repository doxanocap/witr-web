
export interface Props {
  text: string
  style: 'dark' | 'light'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}