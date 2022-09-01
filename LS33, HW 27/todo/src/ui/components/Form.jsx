// Core
import React, {useState} from 'react';
import {v4} from 'uuid';
import {Form, Field} from "react-final-form";
import arrayMutators from 'final-form-arrays';
import {FieldArray} from 'react-final-form-arrays'
// Parts
import Button from "./Button";
import Input from "./Form/Input";
import item from "./Item";

const initValue = {fields: ['']};


function FormOld(props) {
    const {onAdd} = props;
   
    const onSubmit = (values, index) => {

        const value = values.fields.map((item) => {
            return item
        })
        console.log(value)


    };

    const validate = () => {
        // const errors = {};
        // if (values.description === undefined) {
        //     errors.description = 'Required and must contain more than 5 symbols'
        // }
        // return errors;
    }

    return (

        <Form onSubmit={onSubmit}
              validate={validate}
              mutators={{...arrayMutators}}
              initialValues={initValue}
              render={(helpers) => {
                  const {handleSubmit} = helpers;

                  return (<>
                      <form className="form" onSubmit={handleSubmit}>
                          <FieldArray name="fields">
                              {({fields}) => (
                                  <>{fields.map((name) =>
                                      <Field
                                      component={Input}
                                      name={name}
                                      key={name}
                                      className="form__input"/>)}
                                      <Button text="Добавить поле" onClick={() => fields.push('')}/>

                                  </>
                              )}
                          </FieldArray>
                          <Button text="Добавить" />
                      </form>
                  </>)
              }}/>
    )
}


export default FormOld;