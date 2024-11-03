import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'primary' | 'secondary' }>`
    font-family: VTBGroupUI;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    padding: 16px 24px;
    border: none;
    border-radius: 12px;

    color: ${({variant}) => variant === 'primary' ? '#FFFFFF' : '#0663EF'};
    background-color: ${({variant}) => variant === 'primary' ? '#0663EF' : '#0663EF14'};

    &:hover {
        background-color: ${({variant}) => variant === 'primary' ? '#005AE0' : 'rgba(6,99,239,0.12)'};
    }
`