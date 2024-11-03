import styled from 'styled-components'
import { Props } from './type.ts'
import { IMaskInput, IMaskInputProps } from 'react-imask'
import { InputHTMLAttributes } from 'react'

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Label = styled.label<{ error: boolean }>`
    color: ${({ error }) => error ? '#C24100' : '#22252BB2'};
    font-family: VTBGroupUI;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    padding: 0;
    margin: 0;
`

export const Error = styled.p`
    padding: 0;
    margin: 0;
    font-family: VTBGroupUI;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #C24100;
`

const inputStyle  = {
    boxSizing: 'border-box',
    padding: '16px',
    margin: 0,
    fontFamily: 'VTBGroupUI',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#22252B',
    border: '1px solid',
    borderColor: ({ error }: { error: boolean }) => error ? '#C24100' : '#22252B29',
    borderRadius: '12px',
    caretColor: '#0663EF',
    '&:hover, &:focus': {
        borderColor: `#0663EF`
    },
    '&:focus-visible': {
        outline: 'none'
    }
}

// ts-ignore
export const Input = styled.input<Props<InputHTMLAttributes<HTMLInputElement>> & { error: boolean }>(inputStyle)
// ts-ignore
export const MaskedInput = styled(IMaskInput)<Props<IMaskInputProps<any>> & { error: boolean }>(inputStyle)