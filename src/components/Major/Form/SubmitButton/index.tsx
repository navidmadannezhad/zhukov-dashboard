interface Props{
    disabled: boolean;
    title: string;
}

const SubmitButton = ({ disabled, title } :Props) => {
    return(
        <button type="submit" disabled={disabled} className={`transition mt-3 bg-green w-full max-w-[500px] text-white p-3 rounded-sm ${disabled ? "opacity-50" : "opacity-100"}`}>{title}</button>
    )
}

export default SubmitButton;