import React from 'react';
import { StyledCheckbox } from './Checkbox.styles';

const Checkbox = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <StyledCheckbox className="label--custom">{props.name}
        <input className="checkbox--native" type="checkbox" {...field} {...props} />
        <div className="checkbox--custom"></div>
    </StyledCheckbox>
  )
}


export default Checkbox;
