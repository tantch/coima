import Header from '../components/Header';
import Footer from '../components/Footer';

const WithLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default WithLayout;