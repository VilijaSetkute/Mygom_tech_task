import styled from 'styled-components'

export const FlexStyle = styled.div`
    display: flex;
`

export const MarginStyle = styled.div`
    margin: ${props => props.margins};
`

export const StyledDropdownHeader = styled.div`
    border: 1px solid #9c27b0;
    border-radius: 4px;
    width: 300px;
    max-width: 100%;
    padding: 8px;
    cursor: pointer;
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledDropdownList = styled.div`
    border: 1px solid #9c27b0;
    border-radius: 4px;
    width: 300px;
    max-width: 100%;
    max-height: 438px;
    padding: 8px;
    margin-top: 8px;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 50px;
    }
`

export const StyledDropdownListLabel = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4px
`

export const StyledDropdownListItem = styled.input`
    border: 0;
    outline:0;
    text-indent: 0;
    padding: 6px;
    margin: 1px 0;
    font-weight: 300;
    width: 100%;
    display:block;
    width: calc(100% - 8px);
    cursor: pointer;
    background-color: ${props => props.selected && "#f48eb1"};
    border-radius: ${props => props.selected && "4px"};

    :hover {
        background-color: #c2185b;
        color: white;
        border-radius: 4px;
    }
`


export const StyledError = styled.div`
    text-align: center;
    font-style: italic;
    font-size: 14px;
    padding: 10px;
    color: grey;
`

export const StyledChipWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 275px;
`

export const StyledChipItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c2185b;
    color: white;
    padding: 4px 8px;
    border-radius: 20px;
    
    margin: 2px
`

export const StyledChipText = styled.div`
    text-overflow: ellipsis;
    max-width: 60px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
`

