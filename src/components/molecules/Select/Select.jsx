import React, { Fragment } from 'react';
import { StyledSelect } from './Select.styles';
import Option from '../../atoms/Option';
import { useField } from 'formik';

const Select = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <StyledSelect {...field} {...props} className={props.value.length > 0 ? '' : 'untouched'}>
      {
        props.options.map( (option, i) => {
          return(
            <Option key={i} value={option.value}>{option.name}</Option>
          )
        })
      }
      </StyledSelect>
    </Fragment>
  )
}

export default Select;
