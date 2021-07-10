import styled from 'styled-components';
// import { media } from '../../../utils/media';
import * as mixins from '../../../utils/mixins';

export const StyledButton = styled.button`
    ${mixins.display}
    position: relative;
    min-width: 135px;
    min-height: 50px;
    padding: 16px 24px;
    margin: 0 0 8px 0;
    font-size: 18px;
    font-family: ${({theme}) => theme.primaryFont};
    font-weight: 600;
    opacity: .999;
    border-radius: 3px;

    ${mixins.customButtonStyles};
`;
