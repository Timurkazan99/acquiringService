import { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import {
  ControlledInput,
  ControlledMaskInput,
} from '../../shared/elements/Input'
import { sendTransaction, TransactionSchema } from '../../entities/transaction'
import { ButtonsWrapper, Form, RowInput, RowMaskInput } from './elements.ts'
import { IMask } from 'react-imask'
import { Button } from '../../shared/elements/Button'
import { PurchaseFormData } from './type.ts'

const CardNumberMask = '0000 0000 0000 0000'
const expireMask = 'MM / YY'

const onSubmit = (formData: PurchaseFormData) => {
  const data   = {
    description: 'Purchase',
    amount: formData.amount.replaceAll(/\D/g, ''),
    custom_data: {
      cardNumber: formData.cardNumber.replaceAll(/\D/g, ''),
      cardExpire: formData.cardExpire.replace(' / ', '.'),
      cardCvc: formData.cardCvc,
      customerName: formData.customerName,
      comment: formData.comment,
    }
  }

  sendTransaction(data).then((url) => {
    window.open(url, '_blank')
  })
};

export const PurchaseForm: FC = () => {
  const { control, handleSubmit, formState: {errors} } = useForm<PurchaseFormData>({
    resolver: yupResolver(TransactionSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RowMaskInput
        label="Номер карты"
        control={control}
        name="cardNumber"
        error={errors.cardNumber}
        mask={CardNumberMask}
        lazy={false}
        placeholderChar="X"
      />
      <ControlledMaskInput
        label="Срок действия"
        control={control}
        name="cardExpire"
        error={errors.cardExpire}
        mask={expireMask}
        lazy={false}
        blocks={{
          YY: {
            mask: '00',
            placeholderChar: 'Г'
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'М'
          },
        }}
      />
      <ControlledInput
        label="CVV"
        type="password"
        maxLength={3}
        transform={{
          output: (e) => e.target?.value?.replaceAll(/\D/g, '')
        }}
        control={control}
        name="cardCvc"
        error={errors.cardCvc}
      />
      <RowMaskInput
        label="Сумма перевода"
        control={control}
        name="amount"
        error={errors.amount}
        mask={[
          {
            mask: '',
          },
          {
            mask: 'sum ₽',
            lazy: false,
            blocks: {
              sum: {
                mask: Number
              },
            }
          }
        ]}
      />
      <RowInput
        label="Ваше имя"
        control={control}
        name="customerName"
        error={errors.customerName}
      />
      <RowInput
        label="Сообщение получателю"
        control={control}
        name="comment"
        defaultValue=''
        error={errors.comment}
      />
      <ButtonsWrapper>
        <Button variant='primary' type='submit'>Перевести</Button>
        <Button variant='secondary' type='button'>Вернуться</Button>
      </ButtonsWrapper>
    </Form>
  )
}
