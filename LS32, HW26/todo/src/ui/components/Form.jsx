// Core
import React, {useState} from 'react';
import {v4} from 'uuid';
import {Form,Field} from "react-final-form";
// Parts
import Button from "./Button";
import Input from "./Form/Input";
import {TextField} from "@mui/material";

function FormOld(props) {
    const {onAdd} = props;

    const onSubmit = (event) => {
       onAdd({id: v4(), description: event.description});
    };

    const validate = (values) => {
        const errors = {};
        if (values.description === undefined || Object.values(values).toLocaleString().length < 5) {
            errors.description = 'Required and must contain more than 5 symbols'
        }
        return errors;
    }

    return (
        <Form onSubmit={onSubmit}
              validate={validate}
              render={(helpers) => {
                  const { handleSubmit, values, errors } = helpers;
                  return (<>
                          <form className="form" onSubmit={handleSubmit}>
                              <Field name={"description"} label={"todo"} component={Input} className="form__input"/>
                              <Button text="Добавить"/>
                          </form>
                      </>

                  )
              }}

        />
    )

}


export default FormOld;