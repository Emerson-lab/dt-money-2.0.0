import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionContainer } from './styles'
import { TransactionTable } from './components/TransactionTable'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable />
      </TransactionContainer>
    </div>
  )
}
