import './PageBody.css';

function PageBody ({children}) {

  const handleFilteredSubmit = (e) => {
    e.preventDefault()
    return console.log(`Фильтр применён!`)
  };

    return (
      <div className='pagebody-conteiner'>
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
        {children}
      </div>
    )
}

export default PageBody;