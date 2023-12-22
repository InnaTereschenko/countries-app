import Select from "react-select";
import styled from "styled-components";

const Filter = styled(Select).attrs({
    styles:{
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'red',
        }),
        option: () => ({})
    }
})``
 
  



export default Filter;