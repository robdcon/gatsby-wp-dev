import styled from 'styled-components';
import { centerContent } from '../../../utils/mixins';

export const StyledForm = styled.section`

    ${centerContent};
    flex-direction: column;
    
    padding: ${({theme}) => theme.sectionPadding};

    form {
      width:100%;
      padding: 24px 0 32px;
      max-width: 800px;
    }

    h2 {
      text-align:center;
      color:${({theme}) => theme.primaryColor};
    }

    .error-message {
      color: #f00;
      margin-bottom: 1em;
    }
`;

export const StyledField = styled.div`
    margin-bottom: 16px;
`;
