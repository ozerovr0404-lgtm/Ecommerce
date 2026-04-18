import './ProductCard.css';

function ProductCard () {
    return (
        <div className='main-productcard-container-styles'>
          <div className='click-like-product-card'>
            <div className='special-offer-sticker'>Special Offer</div>
            <button className='like-button'>
              
              <img src="like-icon.svg" alt="Упс!" className='like-icon'/>
            </button>
          </div>
          <div className='carousel-button-container'>
                <button className='carousel-button-left'>

                </button>
                <button className='carousel-button-right'>

                </button>
              </div>
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