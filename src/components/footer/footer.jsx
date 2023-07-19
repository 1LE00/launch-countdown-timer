import './footer.css';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';

function Footer() {
    return (
        <footer className='footer flex w-100'>
            <section className="social-links flex">
                <Facebook />
                <Pinterest />
                <Instagram />
            </section>
        </footer>
    );
}

export default Footer;