import styled from 'styled-components'

const Input = styled.input`
    order: 1px solid #000;
    background: transparent;
    border: 1px solid #000;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        font-size: 16px;
    }
`

export default Input