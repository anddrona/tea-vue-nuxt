export interface IPackVariant {
  weight: number
  sku: string
  price?: number
  oldPrice?: number
  amount: string
}

export interface ITab<T> {
  name: string
  label: string
  content: T
}

export interface IDescriptionContent {
  ingredients: string
  description: string
  flavor: string
  beneficial: string[]
}

interface IProperty {
  key: string
  value: string
}

export interface IPropertiesContent {
  properties: IProperty[]
}

export interface IReviewsContent {
  reviews: string[]
}

export interface IDescriptionTab extends ITab<IDescriptionContent> {
  name: 'description'
}

export interface IPropertiesTab extends ITab<IPropertiesContent> {
  name: 'properties'
}

export interface IReviewsTab extends ITab<IReviewsContent> {
  name: 'reviews'
}

export type IProductTab = IDescriptionTab | IPropertiesTab | IReviewsTab

export interface IProduct {
  title: string
  images: string[]
  packVariants: IPackVariant[]
  tabs: IProductTab[]
}
