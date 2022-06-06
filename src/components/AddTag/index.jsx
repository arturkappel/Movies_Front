import { Container } from "./style";

import { FiPlus, FiX } from 'react-icons/fi'

export function AddTag({ isNew, title, onClick, ...rest }){
    return(
        <Container isNew = {isNew}>
            <input 
                type="text"
                value={ title }
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={ onClick }
            >   
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}