import ChevronIcon from "./ChevronIcon"
import CloseIcon from './CloseIcon'
import DropdownItem from "./DropdownItem"
import {
    StyledDropdownHeader, StyledDropdownList, StyledError, StyledChipWrapper, StyledChipItem, StyledChipText, FlexStyle, MarginStyle
} from './dropdown.styled'
// import useData from "../../utils/hooks/useData"
// import dataOptions from '../../utils/dropdownData.json'
import { useState } from "react"


export interface ItemGroup {
    label: string | null,
    itemArr: string[],
}

export const Dropdown = ({data}: any) => {

    const [selectedItems, setSelectedItems] = useState([])
    const [showDropdownList, setDropdownList] = useState(false)
    // const data = useData(dataOptions.ungroupedArray)

    const manageChip = (chipName: string) => {
        const filtered = selectedItems.filter((el: string) => el !== chipName)
        setSelectedItems(filtered)
    }


    return (
        <FlexStyle>
            <MarginStyle margins="0 10px">
                <StyledDropdownHeader>
                    {!selectedItems.length ?
                        <div>Select from list</div>
                        :
                        <StyledChipWrapper>
                            {selectedItems.map((el: string, key: number) =>
                                <StyledChipItem key={key + 1} onClick={() => manageChip(el)}>
                                    <StyledChipText>{el}</StyledChipText>
                                    <CloseIcon type={'chip'} />
                                </StyledChipItem>
                            )}
                        </StyledChipWrapper>
                    }
                    {(showDropdownList) ? <CloseIcon type={'initial'} toggleDropdown={setDropdownList} /> : <ChevronIcon toggleDropdown={setDropdownList} />}
                </StyledDropdownHeader>
                {showDropdownList && <StyledDropdownList data-testid="dropdownlist-block">
                    {(Array.isArray(data) && data.length) ?
                        data.map((item: ItemGroup, key: number) => <DropdownItem key={key + 1} items={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />)
                        :
                        <StyledError>Primitive data types or functions are not allowed in dropdown list</StyledError>
                    }
                </StyledDropdownList>}
            </MarginStyle>
        </FlexStyle>

    )
}

