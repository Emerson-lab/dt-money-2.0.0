import { TransactionsTable, PriceHighLight } from './styles'
import { useTransactionContext } from '../../../../contexts/TransactionsContext';
import { priceFormatter, dateFormatter } from '../../../../utils/formatter';

export function TransactionTable() {
  const { transactions } = useTransactionContext();

  return (
    <TransactionsTable>
      <tbody>
        {transactions?.map(transaction => {
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