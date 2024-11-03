import { sha256 } from 'js-sha256'

export const getHash = (amount: string) => {
  console.log(`${import.meta.env.VITE_API_KEY}${amount}00${import.meta.env.VITE_SECRET}`)
  return sha256(`${import.meta.env.VITE_API_KEY}${amount}00${import.meta.env.VITE_SECRET}`)
}