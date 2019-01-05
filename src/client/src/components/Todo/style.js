import styled from 'styled-components';

export const ToDo = styled.div`
border: 1px solid #B1BDD1;
border-radius: 25px;
padding: 20px;
display: grid;
grid-template-columns: 1fr 4fr;
margin: 20px;
`;

export const Date = styled.h3`
border-right: 1px solid;
display: inline;
padding: 20px;
margin-right: 20px;
font-size:30px;
`;

export const Info = styled.div`
position: relative;
`;

export const Note = styled.span`
position: absolute;
top: 0;
right: 0;
background: #FF6370;
color: #FFF;
border-radius: 30px;
width: 55px;
text-align: center;
font-size: 14px;
`;

export const Paragraph = styled.p`
width: 165px;
`;
