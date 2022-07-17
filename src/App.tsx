import React from "react"
import { Dropdown } from "./components/Dropdown/Dropdown";
import { StyledContainer } from "./App.styled";
import useData from "./utils/hooks/useData";
import dataOptions from './utils/dropdownData.json'

/* dataOptions:
    error:
        primitiveString
        primitiveNumber
        primitiveBoolean
        primitiveNull
    render:
        groupedArray
        ungroupedArray
        mixedArray
        stringArray
        standardObject
*/

const App = () => {

  const data = useData(dataOptions.mixedArray)

  return (
    <StyledContainer>
      <Dropdown data={data}/>
    </StyledContainer>
  );
}

export default App;
