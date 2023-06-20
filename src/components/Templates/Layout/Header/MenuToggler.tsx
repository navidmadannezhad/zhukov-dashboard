interface Props{
    menuOpened: boolean;
}

const MenuToggler = ({ menuOpened }: Props) => {
    return(
        <>
            {
                menuOpened ?
                (
                    <svg width="30" height="30" viewBox="0 0 158 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-2.5" x2="212.131" y2="-2.5" transform="matrix(0.707109 -0.707105 0.707109 0.707105 4 154)" stroke="white" strokeWidth="5"/>
                        <line y1="-2.5" x2="212.131" y2="-2.5" transform="matrix(0.707109 0.707105 -0.707109 0.707105 4 4)" stroke="white" strokeWidth="5"/>
                    </svg>
                )
                :
                (
                    <svg width="30" height="30" viewBox="0 0 150 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2.5" x2="150" y2="2.5" stroke="white" strokeWidth="5"/>
                        <line x1="43.9648" y1="77.5" x2="149.967" y2="77.5" stroke="white" strokeWidth="5"/>
                        <line x1="87.9648" y1="152.5" x2="149.97" y2="152.5" stroke="white" strokeWidth="5"/>
                    </svg>
                )
            }
        </>
    )
}

export default MenuToggler;