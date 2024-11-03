import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { Error, InputWrapper, Input as StyledInput, Label } from './elements.ts'
import { ControlledProps, Props } from './type.ts'
import { Controller } from 'react-hook-form'

const Input: FC<Props<InputHTMLAttributes<HTMLInputElement>>> = ({
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

export const ControlledInput: FC<ControlledProps<InputHTMLAttributes<HTMLInputElement>>> = ({
  control,
  name,
  defaultValue,
  ...props
}) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field}) => (
      <Input
        {...field}
        {...props}
      />
    )}
  />
)