import { Control, FieldPath } from 'react-hook-form'
import { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface Props<P extends HTMLAttributes<any>> extends P  {
  error?: {
    message?: string
  }
  label: string
}

export interface ControlledProps <P> extends Omit<Props<P>, keyof Control>{
  name: FieldPath<any>;
  control: Control<any>;
  defaultValue?: any;
}