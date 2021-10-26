import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const ProductItems = () => {
    return (
        <Container>
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
            <Filter>
                <FilterText>
                    Filter products:
                </FilterText>
                <Select>
                    <Option disabled selected>
                Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
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
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
            </FilterContainer>
            <ProductList />
            <Newsletter />
            <Footer />
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 200;
    font-weight: 600;
`;

const Select = styled.select`
    padding: 5px;
    margin: 5px;
`;

const Option = styled.option`

`;

export default ProductItems
