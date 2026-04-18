import './PageBody.css';
import ProductCard from './productCard/ProductCard';

function PageBody () {

  const handleFilteredSubmit = (e) => {
    e.preventDefault()
    return console.log(`Фильтр применён!`)
  };

    return (
      <div className='pagebody-conteiner'>
        <div className='coloumn-left-container'>
          <div className='filters-conteiner-in-pagebody'>
            <div className='filter-cont-in-gb-for-submit'>
              <p className='filter-label-styles'>
                Filters
              </p>
              <form onSubmit={handleFilteredSubmit} className='filter-form-styles'>
                <p className='filter-text-style'>
                  Brand
                </p>
                <select className='filter-pb-select'></select>
                <p className='filter-text-style'>
                    Price Range
                </p>
                <div className='price-range-area-st'>
                  <textarea className='textarea-st-1'placeholder='0'></textarea>
                  <textarea className='textarea-st-2'placeholder='5000'></textarea>
                </div>
                <button className='filter-apply-butt'>
                  Apply Filters
                </button>
              </form>
            </div>
          </div>
        <div className='marketing-banner'>
          <div className='text-marking-container'>
            <div className='styles-for-string-timer'>
              <img src="timer-icon.svg" alt="Упс!"  className='timer-icon-margin'/>
            <p className='special-deal'>
              Special Deal!
            </p>
            <button className='close-cross-button'>
              <img src="cross-close-icon.svg" alt="Упс!" className='cross-close-icon'/>
            </button>
            </div>
            <p className='marketing-text'>
              Register now to unlock exclusive offers and discounts
            </p>
            <div className='styles-marketing-timer'>
              <p className='marketing-text'>
                Offer expires in:
              </p>
              <p className='marketing-timer'>0:59:59</p>
            </div>
          </div>
        </div>
      </div>
        <div className='general-product-container'>

          <div className='top-line-product-card-cont'>
            <div className='product-counter'>
              Counter product
            </div>
            <div className='sort-text-and-select'>
              <p className='paragraph-style-by-sort'>Sort by:</p>
            </div>
            <select className='sort-select'></select>
          </div>

          <div className='product-cards-main-container'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          
        </div>
      </div>
    )
}

export default PageBody;