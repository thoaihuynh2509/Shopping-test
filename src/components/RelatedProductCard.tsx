import { Button, Card, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { IRelatedProduct } from "../types";
import { formatCurrency } from "../utils";

interface IRelatedProductCard extends IRelatedProduct {}

const StyledContainer = styled(Card)`
  width: 100px;
  
  & .ant-card-body {
    padding: 0
  }

  text-align: left;
`

const StyledName = styled.p`
  color: black;
  font-size: 0.5rem;
  font-weight: bold;
`;

const StyledAvailableQuantity = styled.p`
  color: orange;
  font-size: 0.5rem;
`
const StyledDiscountedPrice = styled.p`
  color: red;
  font-size: 0.75rem;

  margin-bottom: 0.2rem;
`;

const StyledOriginalPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 0.6rem;
`;

const StyledDiscountPercent = styled.span`
  color: red;
  font-size: 0.6rem;
`;

const StyledAddButton = styled(Button)`
  width: 90%;

  span {
    font-size: 0.75rem;
  }
`

const RelatedProductCard = ({
  id,
  name,
  availableQuantity,
  discountPercent = 0,
  image,
  price = 0,
}: IRelatedProductCard) => {
  return (
    <StyledContainer
      bordered
      cover={<img alt="example" style={{ width: '100%', height: '100%' }} src={image} />}
    >
      <StyledName>{name}</StyledName>
      <StyledAvailableQuantity>{`Còn ${availableQuantity} sản phẩm`}</StyledAvailableQuantity>
      <StyledDiscountedPrice>{formatCurrency(price)}</StyledDiscountedPrice>
      <Space direction="horizontal" style={{ visibility: discountPercent ? 'visible' : 'hidden' }}>
        <StyledOriginalPrice>
          {formatCurrency(price + (+discountPercent / 100) * price)}
        </StyledOriginalPrice>
        <StyledDiscountPercent>{discountPercent}%</StyledDiscountPercent>
      </Space>
      <StyledAddButton size="small" >
        <span>Them gio hang</span>
      </StyledAddButton>
    </StyledContainer>
  );
};

export default RelatedProductCard;
