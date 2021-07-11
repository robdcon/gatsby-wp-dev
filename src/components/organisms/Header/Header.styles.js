import styled from 'styled-components';
import { display } from '../../../utils/mixins';

export const StyledHeader = styled.header`
    ${display};
    width: 100%;
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--stack-level-1);
`;
