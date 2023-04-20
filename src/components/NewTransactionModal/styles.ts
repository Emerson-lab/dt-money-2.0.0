import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  ${({theme}) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
  `}
`

export const Content = styled(Dialog.Content)`
  ${({theme}) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      input {
        border-radius: 6px;
        border: 0;
        background: ${theme['gray-900']};
        color: ${theme['gray-300']};
        padding: 1rem;

        &::placeholder {
          color: ${theme['gray-500']};
        }
      }

      button[type="submit"] {
        height: 58px;
        border: 0;
        background: ${theme['green-500']};
        color: ${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:hover {
          background: ${theme['green-700']};
          transition: background-color 0.2s;
        }
      }
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({theme}) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5  rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme['gray-500']};
  `}
`