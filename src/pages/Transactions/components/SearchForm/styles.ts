import styled, { css } from 'styled-components'

export const SeacrhFormContiner = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: ${theme['gray-900']};
      border: 1px solid ${theme['gray-900']};
      color: ${theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${theme['gray-500']};
      }

      &:hover:not(:focus) {
        border: 1px solid ${theme['green-500']};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${theme['green-300']};
      color: ${theme['green-300']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${theme['green-500']};
        border-color: 1px solid ${theme['green-500']};
        color: ${theme.white};
        transition: border-color 0.2s color 0.2s border-color 0.2s;
      }
    }
  `}
`
