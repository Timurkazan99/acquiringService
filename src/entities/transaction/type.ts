export interface Transaction<CustomData extends {}> {
  api_key: string
  transaction: string
  description: string
  amount: string
  hash_sum: string
  email?: string
  redirect_url?: string
  success_redirect?: string
  fail_redirect?: string
  custom_data: CustomData
}

export interface CardData {
  cardNumber: string
  cardExpire: string
  cardCvc: string
  customerName: string
  comment: string
}
