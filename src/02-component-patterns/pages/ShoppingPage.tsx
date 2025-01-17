import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
// import { ProductCard } from "../components/ProductCard"

const product={
    id:'1',
    title:'Coffe',
    img:'./coffee-mug.png'

}
export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            padding:2
        }}>
            <ProductCard product={product}>
                <ProductCard.Image/>
                <ProductCard.Title />
                <ProductCard.Buttons/>
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </ProductCard>
            
        </div>
    </div>
  )
}
