import * as yup from "yup";

const lunResultMap: Record<string, number> = {
  '0': 0,
  '1': 2,
  '2': 4,
  '3': 6,
  '4': 8,
  '5': 1,
  '6': 3,
  '7': 5,
  '8': 7,
  '9': 9,
}

export const TransactionSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Введите номер карты')
    .test('required', 'Введите номер карты', (value) => {
      return value.replaceAll(/\D/g, '').length !== 0
    })
    .test('wrongLength', 'Номер карты должен содержать 16 цифр', (value) => {
      return value.replaceAll(/\D/g, '').length === 16
    })
    .test('wrongCardNumber', 'Введите корректный номер карты', (value) => {
      const sum = value.replaceAll(/\D/g, '').split('').reduce((acc, num, i) => {
        if(i % 2 === 0) {
          return acc + lunResultMap[num]
        }
        return acc + Number(num)
      }, 0)

      return sum % 10 === 0
    }),
  cardExpire: yup
    .string()
    .required('Введите дату')
    .test('required', 'Введите дату', (value) => {
      return value.replaceAll(/\D/g, '').length !== 0
    })
    .test('required', 'Введите дату', (value) => {
      return value.replaceAll(/\D/g, '').length === 4
    })
    .test('wrongDate', 'Карта просрочена', (value) => {
      const [mm, yy] = value.split(' / ')
      const date = new Date(Date.now())
      const fullYear = Number(20 + yy)
      if (fullYear < date.getFullYear()) {
        return false
      }

      if (fullYear == date.getFullYear()) {
        return Number(mm) > date.getMonth() + 1;
      }

      return true
    }),
  cardCvc: yup.string().required('Введите cvc').min(3, 'Cvc должен содержать 3 цифры'),
  amount: yup
    .string()
    .required('Введите сумму перевода')
    .test('wrongAmount', 'Минимальная сумма 10 ₽', (value) => {
      return Number(value.replaceAll(/\D/g, '')) >= 10
    }),
  customerName: yup.string().required('Введите ваше имя').max(50, 'Максимальная длина 50 символов'),
  comment: yup.string().max(50, 'Максимальная длина 50 символов')
});