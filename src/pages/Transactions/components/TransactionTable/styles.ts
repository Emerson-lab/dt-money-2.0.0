import styled, { css } from 'styled-components'

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`
