import styled from "styled-components";

const StyledNumberBox = styled.div`
    width: 140px;
    height: 140px;
    background: linear-gradient(180deg, rgba(77,33,201,1) 0%, rgba(37,33,201,0) 100%);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (width>1440px) {
        width: 200px;
        height:200px;
    }
`;

const StyledNumbers = styled.p`
    font-size: 56px;
    margin: 0;
    color: white;
    font-weight: 800;

    @media screen and (width>1440px) {
        font-size: 72px;
    }
`;

const StyledTextNumbers = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #CAC9FF;

    @media screen and (width>1440px) {
        font-size: 18px;
    }
`;  
export {StyledNumberBox, StyledTextNumbers, StyledNumbers}