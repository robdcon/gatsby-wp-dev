import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';
import { hoverStyles } from '../../../utils/mixins';

export const StyledHeader = styled.header`
    ${centerContent};
    justify-content: space-between;
    width: 100%;
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: var(--stack-level-1);

    a {
        ${hoverStyles({color: '#fff', hoverColor: ({theme}) => theme.colors.primaryColor })};
    }
`;
