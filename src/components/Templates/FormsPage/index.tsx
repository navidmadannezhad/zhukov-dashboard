import SimpleInput from "@components/Major/Form/SimpleInput";
import EditorInput from "@components/Major/Form/EditorInput";
import FileInput from "@components/Major/Form/ImageInput";
import SelectInput from "@components/Major/Form/SelectInput";
import CheckboxInput from "@components/Major/Form/CheckboxInput";
import SubmitButton from "@components/Major/Form/SubmitButton";

import { Formik, Form } from "formik";
import { object, string } from "yup";

interface FormProps{
    fullname: string;
    content: string;
    file: File | string;
    active: boolean | number | string;
    status: string | number;
    email: string;
}

const FormsPage = () => {

    const onSubmit = (values: FormProps) => {
        console.log(values);
    }

    const initialValues: FormProps = {
        fullname: "",
        content: "",
        file: "",
        active: false,
        status: "",
        email: ""
    }

    const validationSchema = object({
        fullname: string().required("لطفا نام خود را وارد کنید"),
        content: string().required("لطفا محتوای خود را وارد کنید"),
        file: string().required("لطفا فایل خود را وارد کنید"),
        status: string().required("لطفا حالت را وارد کنید"),
        email: string().required("لطفا ایمیل خود را وارد کنید").email("فرمت نادرست")
    })

    return(
        <div className="w-full mt-6">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col gap-3">
                    <SimpleInput
                        title="نام و نام خانوادگی"
                        type="text"
                        name="fullname"
                        className="w-full max-w-[400px]"
                    />
                    <SimpleInput
                        title="ایمیل"
                        type="email"
                        name="email"
                        className="w-full max-w-[400px]"
                    />
                    <FileInput
                        title="فایل"
                        name="file"
                        className="w-full max-w-[400px]"
                    />
                    <EditorInput
                        title="محتوا"
                        name="content"
                        className="w-11/12"
                    />
                    <SelectInput
                        title="حالت"
                        options={[
                            {
                                name: "منتشر شده",
                                value: "published"
                            },
                            {
                                name: "در حال بررسی",
                                value: "inreview"
                            },
                        ]}
                        name="status"
                        className="w-11/12"
                    />
                    <CheckboxInput 
                        title="فعال شود"
                        name="active"
                    />
                    <SubmitButton disabled={false} title="ثبت" />
                </Form>
            </Formik>
        </div>
    )
}

export default FormsPage;