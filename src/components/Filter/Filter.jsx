import Select from "react-select";
import styled from "styled-components";

const Filter = styled(Select).attrs({
    styles: {
        control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            backgroundColor: ' var(--color- ui - base)',
            color: 'var(--color-text)',
            borderRadius: 'var(--border-r)',
            padding: '0.25rem',
            boxShadow: 'var(--shadow)',
            height: '50px',

            
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
        })
    }
})`
width: 300px;
`
  



export default Filter;