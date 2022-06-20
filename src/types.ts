export interface IProduct {
  id: number,
  name: string,
  image?: string,
  price?: number,
  discountPercent?: number | string,
  seller?: string,
  relatedProducts?: IRelatedProduct[]
}

export interface IRelatedProduct {
  id: number,
  name: string,
  image?: string,
  discountPercent?: number | string,
  availableQuantity?: number,
  price?: number,
}

type Seller = 'Xiaomi'