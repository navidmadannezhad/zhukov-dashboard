import { Field } from "formik";
import { ErrorMessage } from "formik";
import { InputType } from "@customeTypes/types";

interface Option{
    name: string;
    value: string;
}

interface Props extends InputType{
    options:Option[];
    as?: string;
}

const SelectInput = ({
    name,
    options,
    title,
    as,
    ...props
}: Props) => {
    return(
        <div { ...props }>
            {title ? (<p className="input-label">{title}</p>) : null}
            <Field
                className="simple-input"
                as="select"
                name={name}
            >
                {options.map((option, i) => 
                    <option value={option.value} key={i}>{option.name}</option>
                )}
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

export default SelectInput;