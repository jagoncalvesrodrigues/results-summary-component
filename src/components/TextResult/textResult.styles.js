import styled from "styled-components";

const StyledBoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const StyledTitleText = styled.p`
    font-size: 24px;
    color: white;
    font-weight: 700;
    margin-bottom: 8px;

    @media screen and (width>1440px) {
        font-size: 32px;
    }
`;
const StyledText = styled.p`
    margin: 0;
    color:#CAC9FF;
    font-size: 16px;
    font-weight: 500;

    @media screen and (width>1440px) {
        font-size: 18px;
    }
`;

export {StyledBoxText,StyledTitleText,StyledText};