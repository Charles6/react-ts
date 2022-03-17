import React, {useState} from "react";
import styled from "@emotion/styled";

export interface stateProps {
    toggle: boolean;
}

export interface MainBoxProps {
    dark: boolean;
}

const MainBox = styled.div<MainBoxProps>`
    height: 600px;
    width: 800px;
    background-color: ${props => props.dark?'black':'white'};
    color: ${props => props.dark?'green':'black'};
`

const Main = () => {
    const [state, setState] = useState<stateProps>({
        toggle:false,
    })

    const toggleDarkness = () => {
        setState({...state, toggle:!state.toggle})
    }

    return (
        <MainBox dark={state.toggle}>
            Hello World
            <button onClick={()=>toggleDarkness()}>
                toggle colors
            </button>
        </MainBox>
    )
}

export default Main;