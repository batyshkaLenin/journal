import styled from '@emotion/styled'

export const Background = styled.div<{ hide: boolean }>`
  //noinspection CssInvalidPropertyValue
  min-height: stretch;
  height: 100%;
  max-height: stretch;
  position: fixed;
  width: 100vw;
  opacity: ${({ hide }) => `${hide ? '0' : '1'}`};;

  background-color: #00000040;
  top: 0;
  right: 0;
  display: grid;
  pointer-events: ${({ hide }) => (hide ? 'none' : 'auto')};;
  grid-template:
    '. body' 1fr
    / auto minmax(auto, 525px);
  transition: 0.2s ease-out;
  z-index: 120;
}`

export const Box = styled.div`
  grid-area: body;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Body = styled.div`
  height: 100%;
  margin: 22px 24px 48px 24px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > * {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
