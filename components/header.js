import Link from 'next/link'

import theme from '../styles/theme'

export default () => (
  <nav className='nav'>
    <div className='nav__container'>

      <Link href='/'>
        <a>
          <img className='nav__logo' src='/static/images/logos/cadastre.svg' alt='Accueil de cadastre.data.gouv.fr' />
        </a>
      </Link>

      <ul className='nav__links'>
        <li><Link href='/datasets'><a>Télécharger les données</a></Link></li>
        <li><Link href='/faq'><a>FAQ</a></Link></li>
      </ul>

    </div>
    <style jsx>{`
      .nav {
        border-bottom: 1px solid ${theme.boxShadow};
        box-shadow: 0 1px 4px ${theme.boxShadow};
        width: 100%;
        background: #fff;
        z-index: 100;
      }

      .nav-fixed {
        position: fixed;
        top: 0;
      }

      .nav__container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
      }

      .nav__home,
      .nav__logo {
        height: 70px;
        padding: 1em;
      }

      .nav__links {
        display: inline;
        margin: 0;
        padding: 1em;
        list-style-type: none;
        text-align: right;
      }

      .nav__links li {
        padding: 0;
        display: inline;
      }

      .nav__links a,
      .nav__links .dropdown {
        color: var(--black);
        padding: 0.4em 0.8em;
        border-radius: 3px;
      }

      .nav__links a::after {
        content: none;
      }

      .nav__links a:hover,
      .nav__links .dropdown:hover {
        background: ${theme.backgroundGrey};
        transition: background ease-out 0.5s;
      }

      .nav__links a.active {
        background: ${theme.primary};
        color: ${theme.colors.white};
      }

      @media (--smaller-than-phablet) {
        .nav__links {
          padding-top: 0;
        }
      }
    `}</style>
  </nav>
)
