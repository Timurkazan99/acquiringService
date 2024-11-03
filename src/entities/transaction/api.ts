import { CardData, Transaction } from './type.ts'
import { getHash } from './util.ts'

const transactionBaseData = {
  api_key: import.meta.env.VITE_API_KEY,
  transaction: import.meta.env.VITE_TRANSACTION
}

export const sendTransaction = async (data: Omit<Transaction<CardData>, 'api_key' | 'hash_sum' | 'transaction'>) => {
  const body: Transaction<CardData> = {
    ...transactionBaseData,
    hash_sum: getHash(data.amount),
    ...data,
  }

  const blobData = new Blob([JSON.stringify(body)], {
    type: "application/json",
  })

  return URL.createObjectURL(blobData)
}