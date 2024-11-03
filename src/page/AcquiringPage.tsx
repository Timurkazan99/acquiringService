import { FC } from 'react'
import { PurchaseForm } from '../widgets/PurchaseForm'
import { Card } from '../shared/elements/Card/Card.tsx'
import styled from 'styled-components'

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 48px 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const AcquiringPage: FC = () => {
  return (
    <Wrapper>
      <Card
        title="Иван К. собирает на «Экскурсия»"
        style={{ width: '600px' }}
      >
        <PurchaseForm />
      </Card>
    </Wrapper>
  )
}