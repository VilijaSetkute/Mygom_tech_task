import { MarginStyle, StyledDropdownListItem, StyledDropdownListLabel } from './dropdown.styled';

const DropdownItem = ({ items, setSelectedItems, selectedItems }: any) => {

    const handleSelection = (selection: string) => {
        if (selectedItems.includes(selection)) {
            const filtered = selectedItems.filter((el: string) => el !== selection)
            setSelectedItems(filtered)
        } else {
            setSelectedItems([...selectedItems, selection])
        }
    }

    return (
        <MarginStyle margins="0 0 24px 0">
            <StyledDropdownListLabel>{items.label}</StyledDropdownListLabel>
            {items.itemArr.map((el: string, key: number) =>
                <StyledDropdownListItem
                    key={key}
                    type="text"
                    readOnly
                    value={el}
                    onSelect={() => handleSelection(el)}
                    selected={selectedItems.includes(el)}
                />)
            }
        </MarginStyle>
    );
};

export default DropdownItem;