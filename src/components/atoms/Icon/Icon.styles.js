import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';

export const StyledIcon = styled.div`
    ${centerContent}
    position: relative;
    border-radius: 50px;
    border: 2px solid #dddddd;
    font-size: 24px;
    color: #ffffff;
    background-color: ${({theme}) => theme.colors.primaryColor}
`;
