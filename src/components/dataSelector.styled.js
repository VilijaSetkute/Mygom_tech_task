import styled from 'styled-components'

export const StyledDataSelector = styled.div`
    display: flex;

    & p {
        font-weight: bold;
    }

    & h3 {
        color: #c2185b;
        margin: 10px 0 0 0;
    }
    & div {
        width: 300px
        cursor: pointer;
        margin: 1px 10px 0 0;
    }
`

export const StyledOption = styled.div`
    cursor: pointer;
    padding: 4px 8px;
    margin: 1px 0;
    background-color: ${props => props.selected && "#c2185b"};
    color: ${props => props.selected && "white"};
    border-radius: ${props => props.selected && "4px"};

    :hover {
        background-color: #c2185b;
        color: white;
        border-radius: 4px;
    }

    :focus {
        background-color: #c2185b;
        color: white;
        border-radius: 4px;
    }
`

export const StyledPreview = styled.div`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid lightgrey;
    min-width: 300px;
`