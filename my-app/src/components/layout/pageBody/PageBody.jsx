import './PageBody.css';
import ProductCard from './productCard/ProductCard';
import Sidebar from './sidebar/Sidebar';
import SpecialOffer from './specialOffer/SpecialOffer';
import SortProduct from './sortProduct/sortProduct';
import ProductGrid from './productGrid/ProductGrid';
import products from '../../../data/products';

function PageBody () {

  const tvProducts = products.filter(prod => prod.category === "tv");
  const sortedProducts = tvProducts;
  const brands = [...new Set(tvProducts.map(pr => pr.brand))];

    return (
      <div className='pagebody-conteiner'>
        <div className='coloumn-left-container'>
          <Sidebar
            brands={brands}
          />
          <SpecialOffer />
        </div>
        <div className='general-product-container'>
          <SortProduct
            count={sortedProducts.length}
          />

          <div className='product-cards-main-container'>
            <ProductGrid>
              {tvProducts.map( product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </div>
          
        </div>
      </div>
    )
}

export default PageBody;