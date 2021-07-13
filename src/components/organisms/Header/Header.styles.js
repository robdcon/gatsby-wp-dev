import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';

export const StyledHeader = styled.header`
    ${centerContent};
    justify-content: space-between;
    width: 100%;
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    z-index: var(--stack-level-1);
`;
