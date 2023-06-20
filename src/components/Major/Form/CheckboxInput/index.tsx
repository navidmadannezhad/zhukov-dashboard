import { Field } from "formik";
import { ErrorMessage } from "formik";
import { InputType } from "@customeTypes/types";
import { FieldProps } from "formik";
import { useEffect, useRef } from "react";

interface Props extends InputType{}

const CheckboxInput = ({
    name,
    title,
    ...props
}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <div { ...props }>
            <Field
                className="simple-input"
                type="checkbox"
                name={name}
            >
            {
                ({field, form}: FieldProps<number | string>) => {

                    useEffect(() => {
                        if(field.value == 1){
                            inputRef.current!.checked = true;
                        }else{
                            inputRef.current!.checked = false;
                        }
                    }, [field.value])

                    return(
                        <div className="flex">
                            <input type="checkbox" ref={inputRef} className="mx-1" onChange={e => {
                                form.setFieldValue(field.name, e.target.checked ? 1 : 0);
                            }} />
                            <p className="input-label">{title}</p>
                        </div>
                    )
                }
            }
            </Field>
            <ErrorMessage name={name}>
                {msg =>
                    <div className="field-error">
                        {msg}
                    </div>
                }
            </ErrorMessage>
        </div>
    )
}

export default CheckboxInput;