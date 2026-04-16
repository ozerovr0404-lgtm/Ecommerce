import './Header.css';

function Header () {
    return (
        <div className='header-main-conteiner-row'>
          <div className='conteiner-title'>
              <button className='title-button'>
                  TechStore
              </button>
              <button className='first-link-button'>
                  TV
              </button>
              <button className='grey-group-button'>
                  Phone
              </button>
              <button className='grey-group-button'>
                  Laptop
              </button>
          </div>
          <div className='conteiner-cart-and-user'>
              <button className='button-icon'>
                  <img src="/cart.png" alt="Упс!" />
              </button>
              <button className='button-icon'>
                  <img src="/user-icon.png" alt="Упс!" />
              </button>
          </div>
        </div>
    )
};

export default Header;