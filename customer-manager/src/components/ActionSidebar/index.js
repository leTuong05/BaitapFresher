import { Button } from 'antd'
import React from 'react'
import { AddIcon, DeleteIcon, EditIcon } from '../Icon'
import { styled } from 'styled-components'

// const ButtonStyle = styled(Button)`
//     background-color: transparent;
//     border: none;
//     box-shadow: unset;


//     &:hover {
//         background-color: white;

//     }
// `
const Wrapper = styled.div`
    display: flex;
    gap: 10px;
`

const ActionSidebar = ({ fullAction, lessAction, key, className }) => {
    return (
        <>
            {lessAction ? (
                <div className={className}>
                    <AddIcon />
                </div>
                // <ButtonStyle className={className} onClick={() => console.log(`Button clicked for key: ${key}`)}>

                // </ButtonStyle>
            ) : (
                <div className={className}>
                    <Wrapper>
                        <AddIcon />
                        <EditIcon />
                        <DeleteIcon />

                    </Wrapper>
                </div>


            )}

        </>

    )
}

export default ActionSidebar