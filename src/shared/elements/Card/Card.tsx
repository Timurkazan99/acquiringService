import { CSSProperties, FC, PropsWithChildren } from 'react'
import { CardTitle, CardWrapper } from './elements.ts'

export const Card: FC<PropsWithChildren<{ title: string, style: CSSProperties }>> = ({ title, style, children }) => {
  return (
    <CardWrapper style={style}>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardWrapper>
  )
}