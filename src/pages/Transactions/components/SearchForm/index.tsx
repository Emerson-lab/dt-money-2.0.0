import { useForm } from 'react-hook-form'
import { SeacrhFormContiner } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import * as z from 'zod'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTrasactions  = useContextSelector(TransactionContext, (context) => {
    return context.fetchTrasactions
  })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTrasactions(data.query)
  }

  return (
    <SeacrhFormContiner onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeacrhFormContiner>
  )
}
