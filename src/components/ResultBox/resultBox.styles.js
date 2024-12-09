import styled from "styled-components";

const StyledResultBox = styled.div`
    width: 100%;
    height: 356px;
    padding: 24px 57px 40px 58px;
    background: linear-gradient(180deg, rgba(119,85,255,1) 0%, rgba(47,44,233,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;

    @media screen and (width>1440px) {
        width: 368px;
        height: 100%;
        justify-content: space-between;
        border-radius: 32px;
    }
`;

export {StyledResultBox};