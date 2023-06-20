import React, { useState, useEffect, useMemo } from 'react'
import { ErrorMessage } from "formik";
import { InputType } from "@customeTypes/types";
import { Field, FieldProps } from 'formik';
import TinyEditor from '@components/Major/TinyEditor';

interface Props extends InputType{}

const EditorInput = ({
    name,
    title,
    ...props
}: Props) => {

  return(
    <div {...props}>
      <>
        <p className="input-label mb-3">{title}</p>

        <Field name={name}>
          {({ field, form }: FieldProps<number | string>) => {

              const setEditorData = (data: any) => {
                form.setFieldValue(field.name, data);
              }

              return (
                <TinyEditor
                  data={field.value}
                  setEditorData={setEditorData}
                />
              )
          }}
        </Field>


        <ErrorMessage name={name}>
            {msg =>
                <div className="field-error">
                    {msg}
                </div>
            }
        </ErrorMessage>
      </>
    </div>
  )
}

export default EditorInput;