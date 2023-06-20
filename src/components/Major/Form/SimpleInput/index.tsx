import { Field } from "formik";
import { ErrorMessage } from "formik";
import { InputType } from "@customeTypes/types";

interface Props extends InputType{
    type:string;
    placeholder?: string;
    as?: string;
}

const SimpleInput = ({
    title,
    type,
    name,
    placeholder,
    as,
    ...props
}: Props) => {
    return(
        <div { ...props }>
            {title ? (<p className="input-label">{title}</p>) : null}

            <Field
                className="simple-input"
                as={as}
                type={type}
                name={name}
                placeholder={placeholder}
            />
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

export default SimpleInput;