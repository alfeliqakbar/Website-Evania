import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`