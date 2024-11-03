import styled from 'styled-components'
import {
  ControlledInput,
  ControlledMaskInput,
} from '../../shared/elements/Input'

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 36px;
`

export const RowInput = styled(ControlledInput)`
    grid-area: auto / 1 / auto / 3;
`

export const RowMaskInput = styled(ControlledMaskInput)`
    grid-area: auto / 1 / auto / 3;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;
`