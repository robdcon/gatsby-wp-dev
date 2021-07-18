import React from 'react';
import { StyledForm, StyledField } from './Form.styles';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../atoms/Input';
import Select from '../../molecules/Select';
import Checkbox from '../../atoms/Checkbox';
import Button from '../../atoms/Button';
import Textarea from '../../atoms/Textarea';

const sendFormData = (data) => {
  axios.post('https://robdcon.co.uk/mailer/sendmail.php', data);
}

const fields =
{
  sections:
  [
    [ // col 1
      {
        name:"name",
        label:"So, what should we call you?",
        placeholder:"Name",
        value:"",
        type:"text"
      },
      {
        name:"email",
        label:"Whats your email address?",
        placeholder:"Email",
        value:"",
        type:"text"
      },
      {
        name:"message",
        label:"How can we help?",
        placeholder:"Message",
        value:"",
        type:"textarea"
      },
      {
        name: 'service-required',
        label: "What service do you need?",
        placeholder: "Please select one",
        value: "",
        type: "select",
        options: [
          {
            name: "Please select",
            value: ""
          },
          {
            name: "Brand New Website",
            value: 'Brand New Website'
          },
          {
            name: "Website Redesign",
            value: 'Website Redesign'
          },
          {
            name: "Website Customisation",
            value: 'Website Customisation'
          }
        ]
      }
    ]
  ]
}

const ContactForm = ({children, ...props}) => { 
  return (
  <Formik
    initialValues={{ 
      name: '',
      email: '',
      message: '',
      dropdown: ''
    }}
    validationSchema={Yup.object({
      name: Yup.string()
      .max(15, "Name must be less than 15 characters in length")
      .required("This field is required"),
      email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
      message: Yup.string()
      .required("Please let me know how I can assist"),
      dropdown: Yup.string().required("This fields is required")

    })}
    onSubmit={(values, {setSubmitting}) => {
      const formData = JSON.stringify(values, null, 2);
      sendFormData(formData);
      setTimeout(() => {
        console.log(formData);
      }, 500);
      setSubmitting(false);
    }}
  >
  {({ isSubmitting }) => (

      <StyledForm className="StyledForm dynamic-contact-form">
        <h2>Get in Touch</h2>
        <Form>
          {
            fields.sections[0].map((field, i) => {
                if(field.type === 'select') return (
                  <StyledField className="field" key={i}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <Field as={Select} name="dropdown" options={field.options} />
                    <ErrorMessage name="dropdown">{msg => <p className="error-message">{msg}</p>}</ErrorMessage>
                  </StyledField>
                );
                if(field.type === 'text') return (
                  <StyledField className="field" key={i}>
                      <label htmlFor={field.name}>{field.label}</label>
                      <Field as={Input} name={field.name} type={field.type} placeholder={field.placeholder} />
                      <ErrorMessage name={field.name}>{msg => <p className="error-message">{msg}</p>}</ErrorMessage>
                  </StyledField>
                )  
                if(field.type === 'textarea') return (
                  <StyledField className="field" key={i}>
                      <label htmlFor={field.name}>{field.label}</label>
                      <Field as={Textarea} name={field.name} type={field.type} placeholder={field.placeholder} />
                      <ErrorMessage name={field.name}>{msg => <p className="error-message">{msg}</p>}</ErrorMessage>
                  </StyledField>
                )   
            })
          }
          <Field as={Checkbox} name="option-1"value="web design" label="Web Design" />
          <Button type="submit" value="Submit" text={`SUBMIT`} disabled={ isSubmitting } />
          </Form>
      </StyledForm>
  )}
  </Formik>
  )
}

export default ContactForm;
