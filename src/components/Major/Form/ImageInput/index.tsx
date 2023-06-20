import { ErrorMessage } from "formik";
import { InputType } from "@customeTypes/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Field } from "formik";
import { FieldProps } from "formik";

interface Props extends InputType{}

const FileInput = ({
    name,
    title,
    ...props
}: Props) => {

    const fileInput = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<number | string | null>();

    return(
        <div { ...props }>
            {title ? (<p className="input-label">{title}</p>) : null}

            <div className='w-full flex items-center justify-center h-[200px] rounded-lg border-2 border-transparentPurple transition hover:border-purple mt-2 cursor-pointer' onClick={() => {fileInput.current?.click()}}>
                <div className="text-center">
                    <FontAwesomeIcon className="child:text-transparentPurple" size="2xl" icon={faFile} />
                    {fileName ? (
                        <>
                            <p className="mt-2 text-transparentPurple">{fileName}</p>
                            
                        </>
                    ) : (
                        <p className="mt-2 text-transparentPurple">بارگزاری فایل</p>
                    )}
                </div>
            </div>


            <Field name={name}>
                {({ field, form }: FieldProps<any>) => {
                    
                    useEffect(() => {
                        // for initial value purposes
                        if(field.value){
                            setFileName(field.value.name || field.value);
                        }
                    }, [field.value]);

                    return(
                        <>
                            <input className="hidden" type="file" name={name} ref={fileInput} accept="image/*" onChange={e => {
                                let file = e.target.files?.[0];
                                form.setFieldValue(field.name, file);
                                setFileName(field.value.name || field.value);
                            }} />
                            {fileName ? (
                                <div className="bg-purple px-3 py-1 text-sm mt-2 text-white rounded-sm cursor-pointer inline-block" onClick={() => {
                                    setFileName(null);
                                    form.setFieldValue(field.name, null);
                                }}>حذف فایل</div>
                            ) : null}
                        </>
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
        </div>
    )
}

export default FileInput;