/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Title = styled.h1`
font-weight: 200;
margin-bottom: 30px;
`;

export const SpecialLabel = styled.label`
display: block;
`;

export const SpecialInput = styled.input`
border:none;
border-bottom: 2px solid #C4C4C4;
padding-left: 14px;
width: 260px;
margin-right: 20px;
`;

export const Icon = styled.i`
cursor: pointer;
&: hover {
    color: #283d6f;
}
`;

export const ButtonIcon = styled.button`
color: #404D6D;
border:none;
background:none;
`;
