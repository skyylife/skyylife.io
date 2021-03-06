import { css } from "@emotion/core"

export const headerStyles = flexDirection => css`
  flex-direction: row;
  background: rgba(49, 99, 127, 0.3);
  color: #ffffff;
  marginleft: 0;
  marginright: 0;
  marginbottom: 1rem;
  align-items: center;
  justify-content: center;
  column-width: auto;
  display: flex;
  font-size: 200%;
  justify-content: ${flexDirection};
  padding: 1em;
`
