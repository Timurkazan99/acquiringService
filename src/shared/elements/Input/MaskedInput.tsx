import { FC, forwardRef } from 'react'
import { ControlledProps, Props } from './type.ts'
import {
  Error,
  MaskedInput as StyledInput,
  InputWrapper,
  Label,
} from './elements.ts'
import { Controller } from 'react-hook-form'
import { IMaskInputProps } from 'react-imask'

const Input: FC<Props<IMaskInputProps<any>>> = ({
  error,
  label,
  className,
  ...InputProps
}) => (
  <InputWrapper className={className}>
    <Label error={Boolean(error?.message)}>{label}</Label>
    <StyledInput {...InputProps} error={Boolean(error?.message)} />
    {error && <Error>{error.message}</Error>}
  </InputWrapper>
)

export const ControlledMaskInput: FC<ControlledProps<IMaskInputProps<any>>> = ({
  control,
  name,
  defaultValue,
  ...props
}, ref) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field}) => (
      <Input
        ref={ref}
        {...field}
        {...props}
        onAccept={(e) => field.onChange(e)}
      />
    )}
  />
)