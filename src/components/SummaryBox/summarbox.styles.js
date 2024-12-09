import styled from "styled-components";

const StyledSummaryBox = styled.div`
    padding: 24px 30px;

    @media screen and (width>1440px) {
        background-color: white;
        height: 100%;
        width: 368px;
        background-color: white;
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
        justify-content: space-between;
    }
`;

export {StyledSummaryBox};