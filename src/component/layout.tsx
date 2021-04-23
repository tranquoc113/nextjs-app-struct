import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image";

export default function Layout({
                                   children,
                                   title = 'This is the default title',
                               }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="site">
                <div className="site-navbar  navbar navbar--h navbar--main" data-site-navbar="">
                    <div className="navbar__top">
                        <div className="container">
                            <div className="navbar__promotion">
                                <a href="/news/Accelerating-Vultrs-Vision-Independent-Infrastructure-Cloud/"
                                   className="navbar__msg" target="_blank"><span
                                    className="label label--sm label--primary">NEWS</span><span
                                    className="navbar__msg-text">Accelerating Vultr's Vision: The Independent Infrastructure Cloud</span></a>
                            </div>
                            <ul className="navbar__submenu nav nav--h d-none d-lg-flex sf-js-enabled sf-arrows"
                                data-nav="" data-options="openOn: hover;">
                                <li className="nav__item">
                                    <a className="nav__link" href="/docs/">Docs</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="/company/contact/">Support</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="/company/contact/?topic=sales">Sales</a>
                                </li>
                                <li className="nav__divider"></li>
                                <li className="nav__item has-dropdown nav__item--language">
                                    <a className="nav__link sf-with-ul" href="/en/">
                                        <span className="nav__link-text">English</span>
                                        <i className="nav__icon">
                                            <svg className="icon-ui icon-ui--18" xmlns="http://www.w3.org/2000/svg"
                                                 x="0px" y="0px">
                                                <path className="stroke" d="M5,7l4,4l4-4"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="nav__dropdown" style={{display: "none"}}>
                                        <ul className="nav__sub">
                                            <li className="nav__item">
                                                <a href="/de/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            Deutsch
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav__item">
                                                <a href="/pt/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            Português
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav__item">
                                                <a href="/ja/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            日本語
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav__item">
                                                <a href="/es/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            Español
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav__item">
                                                <a href="/zh/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            简体中文
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <a className="navbar__brand brand">
                            <div className="brand__logo">
                                <Image
                                    className="svg-logo"
                                    alt="Next.js logo"
                                    src="/img/update.png"
                                    width=""
                                    height=""
                                />
                            </div>
                        </a>
                        <nav className="navbar__menu flex-column flex-lg-row">
                            <ul className="navbar__nav nav nav--h nav--main-menu sf-js-enabled sf-arrows">
                                <li className="nav__item has-dropdown">
                                    <a className="nav__link sf-with-ul">
                                        <span className="nav__link-text">Products</span>
                                        <i className="nav__icon ">
                                            <svg className="icon-ui icon-ui--18" xmlns="http://www.w3.org/2000/svg"
                                                 x="0px" y="0px">
                                                <path className="stroke" d="M5,7l4,4l4-4"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="nav__dropdown d-none">
                                        <ul className="nav__sub">
                                            <li className="nav__item">
                                                <a href="/products/cloud-compute/" className="nav__link">
                                                    <div className="nav__item-content">
                                                        <div className="nav__item-title">
                                                            Cloud Compute
                                                        </div>
                                                        <p className="nav__item-desc">
                                                            Powerful compute instances.
                                                        </p>
                                                        <ul className="nav__item-list">
                                                            <li data-link-to="/products/cloud-compute">Compute</li>
                                                            <li data-link-to="/products/high-frequency-compute">High
                                                                Frequency Compute
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav__item-icon">
                                                        <svg className="icon-sm" xmlns="http://www.w3.org/2000/svg"
                                                             x="0px" y="0px" alt="cloud compute" viewBox="0 0 48 48">
                                                            <polygon className="fill-primary"
                                                                     points="17.6,7.3 24.5,11.3 31.4,7.3 24.5,3.3"></polygon>
                                                            <polygon className="fill-primary"
                                                                     points="17.6,17.1 24.5,21.1 31.4,17.2 24.5,13.2"></polygon>
                                                            <polygon className="fill-primary"
                                                                     points="26.2,12.2 33.1,16.2 39.9,12.2 33.1,8.3"></polygon>
                                                            <polygon className="fill-primary"
                                                                     points="9.1,12.2 16,16.2 22.8,12.2 16,8.3"></polygon>
                                                            <polygon className="fill-gradient"
                                                                     points="3.5,35.7 24.5,47.4 44.5,35.7 37.2,31.3 24.5,38.4 11.9,31.3"></polygon>
                                                            <path className="fill-primary stroke-primary"
                                                                  d="M3.5,28.2l21,11.7l20-11.7c-0.1-0.1-6-3.7-6.1-3.7c0,0-9.6,5.3-13.9,7.8c0,0-14-7.9-14-7.9C10.5,24.5,3.5,28.2,3.5,28.2z"></path>
                                                            <polyline className="stroke-dark"
                                                                      points="44.5,12.8 44.5,20.3 24.5,32.2 3.5,20.2 3.5,12.8"></polyline>
                                                            <polygon className="stroke-dark"
                                                                     points="3.8,12.6 24.5,24.5 44.5,12.6 24.5,0.6"></polygon>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <header className="site-banner banner banner--shape banner--illustration ">
                    <div className="banner__background"></div>
                </header>
            </div>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    |
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                    |
                    <Link href="/user">
                        <a>Contact</a>
                    </Link>
                </nav>
            </header>

            {children}

            <footer>{'I`m here to stay'}</footer>
        </div>
    )
}
