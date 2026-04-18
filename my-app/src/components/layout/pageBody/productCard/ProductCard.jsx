import './ProductCard.css';

function ProductCard () {
    return (
        <div className='main-productcard-conteiner-styles'>
          <img src="https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80" alt="Упс!" className='image-product-card'/>
          <div className='productcard-info'>
            <p className='product-maker'>
              LG
            </p>
            <p className='product-model'>
              NanoCell 75" 4K
            </p>
            <p className='product-price'>
              $799
            </p>
            <button className='add-to-cart-current-product'>
              Add to Cart
            </button>
          </div>
        </div>
    )
};

export default ProductCard;