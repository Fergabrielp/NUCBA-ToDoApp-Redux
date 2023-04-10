import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    flex-wrap: wrap;
`
export const FormWrapper = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

`
export const InputStyled = styled.input`

    padding: 1rem 2rem;
    border-style: none;
    border-radius: 1rem;
    transition-duration: 1.5s;
    :focus{
        background-color: #273142;
        color: var(--text-white);
        transition-duration: 1.5s;

        ::-webkit-input-placeholder{
            color: transparent
        }
    }
`
