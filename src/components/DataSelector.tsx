import React, { useState } from 'react';
import dataOptions from '../utils/dropdownData.json'
import { StyledDataSelector, StyledOption, StyledPreview } from './dataSelector.styled';

const DataSelector = ({ setDataOptionSelected, setSelectedItems }: any) => {

    const [selectedId, setSelectedId] = useState(0)
    const [dataPreview, setDataPreview] = useState()

    let preview: any

    const manageSelection = (option: any, id: number) => {
        setDataOptionSelected(option)
        setSelectedItems([])
        setSelectedId(id)
        preview = JSON.stringify(option, null, 2)
        JSON.parse(preview)
        setDataPreview(preview)
    }

    return (
        <StyledDataSelector>
            <div>
                <h3>Select data option</h3>
                <p>Invalid data</p>
                <StyledOption selected={selectedId === 1 ? true : false} onClick={() => manageSelection(dataOptions.primitiveString, 1)}>String</StyledOption>
                <StyledOption selected={selectedId === 2 ? true : false} onClick={() => manageSelection(dataOptions.primitiveNumber, 2)}>Number</StyledOption>
                <StyledOption selected={selectedId === 3 ? true : false} onClick={() => manageSelection(dataOptions.primitiveBoolean, 3)}>Boolean</StyledOption>
                <StyledOption selected={selectedId === 4 ? true : false} onClick={() => manageSelection(dataOptions.primitiveNull, 4)}>Null</StyledOption>
                <p>Valid data</p>
                <StyledOption selected={selectedId === 5 ? true : false} onClick={() => manageSelection(dataOptions.groupedArray, 5)}>Grouped array</StyledOption>
                <StyledOption selected={selectedId === 6 ? true : false} onClick={() => manageSelection(dataOptions.ungroupedArray, 6)}>Ungrouped array</StyledOption>
                <StyledOption selected={selectedId === 7 ? true : false} onClick={() => manageSelection(dataOptions.mixedArray, 7)}>Mixed array</StyledOption>
                <StyledOption selected={selectedId === 8 ? true : false} onClick={() => manageSelection(dataOptions.stringArray, 8)}>String Array</StyledOption>
                <StyledOption selected={selectedId === 9 ? true : false} onClick={() => manageSelection(dataOptions.standardObject, 9)}>Object</StyledOption>
            </div>
            <div>
                <StyledPreview>
                    <pre>{dataPreview}</pre>
                </StyledPreview>
            </div>

        </StyledDataSelector>
    );
};

export default DataSelector;