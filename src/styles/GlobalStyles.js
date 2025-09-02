import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: ${({ theme }) => theme.font.sizes.base};
}

body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primary};
}
a {
    text-decoration: none;
}
`