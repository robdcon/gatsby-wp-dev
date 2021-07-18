import React from 'react';
import { StyledCheckbox } from './Checkbox.styles';
import { useField } from 'formik';

const Checkbox = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <StyledCheckbox className="label--custom">{props.label}
        <input className="checkbox--native" type="checkbox" {...field} {...props} />
        <div className="checkbox--custom"></div>
    </StyledCheckbox>
  )
}


export default Checkbox;
