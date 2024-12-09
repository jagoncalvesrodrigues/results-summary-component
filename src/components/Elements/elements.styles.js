import styled from "styled-components";

const StyledBoxElement = styled.div`
    width: 100%;
    height: 56px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(${({$color})=>$color},0.07);
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 12px;
`;
const StyledTitleElement = styled.div`
    display: flex;
    width: 95px;
    color: rgb(${({$color})=>$color});
`;
const StyledQuantity = styled.p`
    font-size: 16px;
    color: #303B59;
    font-weight: 700;
`;
const StyledImg = styled.img`
    margin-right: 12px;
`;
const StyledTopQuantity = styled.span`
    color:rgba(48,59,89,0.5);
`;

export {StyledBoxElement,StyledTitleElement, StyledQuantity, StyledImg, StyledTopQuantity};