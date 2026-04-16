import './Layout.css';
import Header from './header/Header';
import PageBody from './pageBody/PageBody';
import Footer from './footer/Footer';

function Layout () {
    return (
      <>
        <Header/>
        <PageBody />
        <Footer />
      </>
    )
};

export default Layout;