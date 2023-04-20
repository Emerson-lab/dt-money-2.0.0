import { TransactionsTable, PriceHighLight } from './styles'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { priceFormatter, dateFormatter } from '../../../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function TransactionTable() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionsTable>
      <tbody>
        {transactions?.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsTable>
  )
}
