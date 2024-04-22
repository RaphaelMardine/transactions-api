// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knew/types/tables' {
  interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
    }
  }
}
