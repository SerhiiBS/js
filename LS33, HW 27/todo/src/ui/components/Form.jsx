// Core
import React, {useCallback, useState} from 'react';
import {v4} from 'uuid';
import {Form, Field} from "react-final-form";
import arrayMutators from 'final-form-arrays';
import {FieldArray} from 'react-final-form-arrays'
// Parts
import Button from "./Button";
import Input from "./Form/Input";
import item from "./Item";

const initialValue = { description: [''] };


function FormOld(props) {
    const {onAdd} = props;


    const onSubmit = (values, form) => {
        values.description.map(text => {
            if (text !== '') {
                onAdd({id: v4(), description: text})
                form.reset(initialValue)
            }
        })
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
              initialValues={initialValue}
              render={(helpers) => {
                  const {handleSubmit, form} = helpers;

                  return (<>
                      <form className="form" onSubmit={(value) => { handleSubmit(value, form) } } >
                          <FieldArray name="description">
                              {({fields}) => (
                                  <>
                                      {fields.map((name) =>
                                      <Field
                                      component={Input}
                                      name={name}
                                      key={name}
                                      className="form__input"/>)}
                                      <Button text="Добавить поле" onClick={() => fields.push('')}/>
                                  </>
                              )}
                          </FieldArray>
                          <Button text="Добавить" type="submit"/>
                      </form>
                  </>)
              }}/>
    )
}


export default FormOld;