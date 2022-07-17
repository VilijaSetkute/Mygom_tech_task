import React, { useState } from "react"
import { Dropdown } from "./components/Dropdown/Dropdown";
import DataSelector from "./components/DataSelector";
import { StyledContainer } from "./App.styled";
import useData from "./utils/hooks/useData";
import dataOptions from './utils/dropdownData.json'

const App = () => {

  const [dataOptionSelected, setDataOptionSelected] = useState(dataOptions.mixedArray)
  const [selectedItems, setSelectedItems] = useState([])
  const data = useData(dataOptionSelected)

  return (
    <StyledContainer>
      <DataSelector setDataOptionSelected={setDataOptionSelected} setSelectedItems={setSelectedItems} />
      <Dropdown data={data} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
    </StyledContainer>
  );
}

export default App;
