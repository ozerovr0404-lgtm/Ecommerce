import { useState } from 'react';
import './ProductCard.css';

function ProductCard ({ product }) {

  const [imageIndex, setImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const images = product.images;
  const hasMultipleImg = images.length > 1;

  if (!product) return null;

  return (
    <div className='main-productcard-container-styles'>
      
      <div className='click-like-product-card'>

        <img src={images[imageIndex]} alt={product.model} className='image-card'></img>

        {product.isSpecialOffer && (<div className='special-offer-sticker'>Special Offer</div>)}

        <button 
          className={isLiked ? "like-button-alt" : "like-button"}
          onClick={() =>
            setIsLiked(prev => !prev)
          }
        >
          <img 
            src={isLiked ? "alter-like-icon.svg" : "like-icon.svg"}
            alt='like'
            className='like-icon'
          />
        </button>

        <div className='carousel-button-container'>
        {hasMultipleImg && (
          <>
            <button 
            className='carousel-button-left'
            onClick={() => {
              setImageIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }}
            ></button>

            <button 
            className='carousel-button-right'
            onClick={() => {
              setImageIndex((prev) => 
              (prev + 1) % images.length
              )
            }}
            ></button>
          </>
        )}
        </div>
      </div>
      
      <div className='productcard-info'>
        <p className='product-maker'>
          {product.make}
        </p>
        <p className='product-model'>
          {product.model}
        </p>
        <p className='product-price'>
          {`$${product.price}`}
        </p>


        <button className='add-to-cart-current-product'>
          Add to Cart
        </button>

        
      </div>
    </div>
  )
};

export default ProductCard;