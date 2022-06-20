import { Card, Row, Space, Typography } from "antd";
import React from "react";
import { IProduct } from "../types";
import styled from "styled-components";
import { formatCurrency } from "../utils";

interface IProductCard extends Omit<IProduct, "relatedProducts"> {}

const StyledDiscountedPrice = styled.p`
  color: red;
  font-size: 1.5rem;

  margin-bottom: 0.5rem;
`;

const StyledOriginalPrice = styled.span`
  text-decoration: line-through;
  display: inline-block;
`;

const StyledDiscountPercent = styled.span`
  color: red;
  display: inline-block;
`;

const StyledName = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledSeller = styled.p`
  color: gray;

  a {
    margin-left: 0.25rem;
  }
`;

const ProductCard = ({
  id,
  name,
  image,
  discountPercent = 0,
  price = 0,
  seller,
}: IProductCard) => {
  console.log(image);
  return (
    <Card
      cover={<img alt="example" src={image} />}
    >
      <StyledDiscountedPrice>{formatCurrency(price)}</StyledDiscountedPrice>
      {discountPercent && (
        <Space direction="horizontal">
          <StyledOriginalPrice>
            {formatCurrency(price + (+discountPercent / 100) * price)}
          </StyledOriginalPrice>
          <StyledDiscountPercent>{discountPercent}%</StyledDiscountPercent>
        </Space>
      )}
      <StyledName>{name}</StyledName>
      <StyledSeller>
        By
        <a style={{ color: "blue" }}>{seller}</a>
      </StyledSeller>
    </Card>
  );
};

export default ProductCard;
