import { React, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom'

const ProductItems = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleSelect = (e) =>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    }

    return (
        <Container>
            <Navbar />
            <Title>{cat}</Title>
            <FilterContainer>
            <Filter>
                <FilterText>
                    Filter products:
                </FilterText>
                <Select name="color" onChange={handleSelect}>
                    <Option disabled>
                Color
                </Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
                </Select>
                <Select name="size" onChange={handleSelect}>
                    <Option disabled>
                Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort products:
                </FilterText>
                <Select onChange={(e)=> setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
            </FilterContainer>
            <ProductList cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
    ${mobile({ margin: "35px 20px 20px 20px" })}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 200;
    font-weight: 600;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 5px;
    margin: 5px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`

`;

export default ProductItems
