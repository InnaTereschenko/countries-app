import { WrapperList } from "./ListCountries.styled";

const ListCountries = ({children}) => {
    return (
        <WrapperList>
            {children}
        </WrapperList>
    )
}

export default ListCountries;