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
transition: box-shadow 0.3s ease, transform 0.3s ease;

&:hover {
    box-shadow: 0 0 10px yellow;
    transform: scale(1.05);
     }
`
  



export default Filter;