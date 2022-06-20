import { Space, Typography } from "antd";
import React from "react";
import { IProduct } from "../types";
import RelatedProductCard from "./RelatedProductCard";

interface IRelatedProductListProps extends Pick<IProduct, "relatedProducts"> {}

const RelatedProductList = ({ relatedProducts }: IRelatedProductListProps) => {
  if (!relatedProducts || !relatedProducts.length) return null;
  return (
    <>
      <Typography.Title level={5}>San pham lien quan</Typography.Title>
      <Space align="start" wrap>
        {relatedProducts.map((relatedProduct) => (
          <RelatedProductCard key={relatedProduct.id} {...relatedProduct} />
        ))}
      </Space>
    </>
  );
};

export default RelatedProductList;
