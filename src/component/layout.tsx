import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image";

export default function Layout({
                                   children,
                                   title = 'This is the default title',
                               }) {
    // @ts-ignore
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
                                <a href=""
                                   className="navbar__msg" target="_blank"><span
                                    className="label label--sm label--primary">NEWS</span><span
                                    className="navbar__msg-text">Accelerating Update's Vision: The Independent Infrastructure Cloud</span></a>
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
                                                             x="0px" y="0px" viewBox="0 0 48 48">
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
                                <li className="nav__item is-hidden-md-down">
                                    <a className="btn btn--sm btn--light-overlay btn--outline"
                                       href="">
                                        <span className="btn__text">Log in</span>
                                        <span className="btn-hover-effect" style={{left: "23.5px", top: "26px"}}></span>

                                    </a>
                                </li>
                                <li className="nav__item is-hidden-md-down">
                                    <a className="btn btn--sm btn--primary" href="/register/">
                                        <span className="btn__text">Sign up</span>
                                        <span className="btn-hover-effect"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <header className="site-banner banner banner--shape banner--homepage">
                    <div className="container">
                        <div className="banner__content">
                            <h1 className="banner__title">The Infrastructure Cloud<span className="tm-sign">™</span>
                            </h1>
                            <p className="banner__desc">Easily deploy cloud servers, bare metal, and storage
                                worldwide!</p>
                            <div className="banner__actions">
                                <form className="rail">
                                    <div className="input-group input-group--xlg">
                                        <input type="email" placeholder="Email Address"
                                               className="form-control form-control--xlg"
                                        />
                                    </div>
                                    <div className="input-group input-group--password-strength input-group--xlg">
                                        <input className="form-control form-control--lg"
                                               placeholder="Password" type="password"
                                        />
                                    </div>
                                    <div className="rail__toolbar">
                                        <button className="btn btn--primary btn--lg" type="submit">
                                            <span className="btn__text">Create account</span>
                                            <span className="btn__preloader preloader"></span>
                                            <span className="btn-hover-effect"></span></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="banner__background"></div>
                </header>
                <section className="section section--homepage-packages p-b-0x">
                    <div className="container ">
                        <div className="section__content">
                            <div className="section__packages content-slider content-slider--horizontal is-active"
                                 style={{visibility: "visible"}}>
                                <div className="row features content-slider__wrapper">
                                    <div className="row features content-slider__wrapper">
                                        <div
                                            className="col-3 content-slider__item content-slider__item--visible content-slider__item--active">
                                            <a className="feature feature--big-icon feature--boxed feature--shadow">
                                                <div className="feature__icon">
                                                    <img
                                                        className="svg-product"
                                                        alt="Next.js logo"
                                                        src="/img/package1.png"
                                                        width=""
                                                        height=""
                                                    />
                                                </div>
                                                <div className="feature__body">
                                                    <h3 className="feature__title h5">
                                                        Cloud Compute
                                                    </h3>
                                                    <p className="feature__desc">
                                                        Powerful compute instances with Intel CPUs and 100% SSD storage.
                                                    </p>
                                                    <div className="feature__actions">
                                                        <span className="btn  btn--primary btn--link btn--block">Starting at $2.50/mo</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            className="col-3 content-slider__item content-slider__item--visible content-slider__item--next">
                                            <a className="feature feature--big-icon feature--boxed feature--shadow"
                                               href="/products/bare-metal/">
                                                <div className="feature__icon">
                                                    <img src="/img/package2.png" alt="" width="" height=""
                                                         className="svg-product"/>
                                                </div>
                                                <div className="feature__body">
                                                    <h3 className="feature__title h5">
                                                        Bare Metal
                                                    </h3>
                                                    <p className="feature__desc">
                                                        Fully automated dedicated servers with zero virtualization
                                                        layer.
                                                    </p>
                                                    <div className="feature__actions">
                                                        <span className="btn  btn--primary btn--link btn--block">Starting at $120.00/mo</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-3 content-slider__item content-slider__item--visible">
                                            <a className="feature feature--big-icon feature--boxed feature--shadow"
                                               href="/products/block-storage/">
                                                <div className="feature__icon">
                                                    <img className="svg-product" src="/img/package3.png" width=""
                                                         height=""/>
                                                </div>
                                                <div className="feature__body">
                                                    <h3 className="feature__title h5">
                                                        Block Storage
                                                    </h3>
                                                    <p className="feature__desc">
                                                        Fast SSD-backed scalable and redundant storage with up to 10TB
                                                        volumes.
                                                    </p>
                                                    <div className="feature__actions">
                                                        <span className="btn  btn--primary btn--link btn--block">Starting at $1.00/mo</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-3 content-slider__item content-slider__item--visible">
                                            <a className="feature feature--big-icon feature--boxed feature--shadow"
                                               href="/products/dedicated-cloud/">
                                                <div className="feature__icon">
                                                    <img className="svg-product" src="/img/package4.png" width=""
                                                         height=""/>
                                                </div>
                                                <div className="feature__body">
                                                    <h3 className="feature__title h5">
                                                        Dedicated Cloud
                                                    </h3>
                                                    <p className="feature__desc">
                                                        Dedicated cloud compute instances without the noisy neighbors.
                                                    </p>
                                                    <div className="feature__actions">
                                                        <span className="btn  btn--primary btn--link btn--block">Starting at $60.00/mo</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section--features-slider section--dark-md">
                    <div className="container ">
                        <h2 className="section__title">Powerful Control Panel &amp; APIs</h2>
                        <p className="section__desc">Spend more time coding and less time managing your
                            infrastructure.</p>
                        <div className="section__content">
                            <div className="row" style={{opacity: 1, visibility: "visible"}}>
                                <div className="col-lg-5 col-xl-4">
                                    <div className="list-group list-group--collapse is-animated"
                                         data-slider-pagination="" data-animation=""
                                         data-animation-options="type:groupIconsFade;">
                                        <div className="list-group__item is-active" data-slide-to="0">
                                            <div className="list-group__top top">
                                                <div className="top__icon i-c-6x">
                                                    <svg className="icon-sm" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                         y="0px" viewBox="0 0 48 48">
                                                        <path className="stroke-primary"
                                                              d="M28.1,30.6c-0.7,0.2-1.4,0.1-2-0.2c-0.9-0.5-1.4-1.7-1.4-3.1s0.5-3.1,1.4-4.7s2.2-2.9,3.4-3.6c1.2-0.7,2.5-0.9,3.4-0.3c0.9,0.5,1.4,1.7,1.4,3.1c0,0.8-0.2,1.8-0.5,2.8"></path>
                                                        <polygon className="fill-gradient inverse"
                                                                 points="6.2,41 11.4,37.9 11.5,17.5 30.4,6.5 30.5,0.5 6.3,14.4 "></polygon>
                                                        <polygon className="fill-primary stroke-primary"
                                                                 points="11.4,44.1 17.3,40.6 17.6,20.9 35.7,10.3 35.8,3.6 11.5,17.5 "></polygon>
                                                        <polygon className="stroke-dark"
                                                                 points="17.5,47.5 41.5,33.5 41.8,7 17.6,20.9 "></polygon>
                                                        <path className="fill-primary inverse"
                                                              d="M29.7,23.8c-0.2,0.1-0.4,0.5-0.4,0.8v8.7c0,0.3,0.2,0.4,0.4,0.3c0.2-0.1,0.3-0.2,0.4-0.4l1.4-2.6l1.5,3.2c0.1,0.3,0.5,0.2,0.9-0.1c0.3-0.4,0.5-0.9,0.3-1.2l-1.6-3.1l2.5-1.5c0.2-0.1,0.4-0.5,0.4-0.8c0-0.2-0.1-0.3-0.2-0.3l-5.3-3C30,23.7,29.9,23.7,29.7,23.8z"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="top__title h6">One-Click Deploy</h3>
                                            </div>
                                            <div className="list-group__content"
                                                 style={{display: "block"}}>
                                                As soon as you click deploy, the Update cloud orchestration takes over
                                                and spins up your instance in your desired datacenters - typically
                                                within 60 seconds.
                                            </div>
                                        </div>
                                        <div className="list-group__item" data-slide-to="1">
                                            <div className="list-group__top top">
                                                <div className="top__icon i-c-6x">
                                                    <svg className="icon-sm" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                         y="0px" viewBox="0 0 48 48">
                                                        <polygon className="fill-gradient inverse"
                                                                 points="6.5,41 11.4,37.9 11.5,17.5 30.5,6.5 30.5,0.5 6.5,14.4"></polygon>
                                                        <polygon className="fill-primary stroke-primary"
                                                                 points="11.4,44 17.3,40.6 17.6,20.9 35.5,10.3 35.5,3.6 11.5,17.5"></polygon>
                                                        <polygon className="stroke-dark"
                                                                 points="17.5,47.5 41.5,33.5 41.5,7 17.6,20.9"></polygon>
                                                        <path className="stroke-primary stroke-1-5"
                                                              d="M33.8,21.6l4.4,1.6l-4.4,6.7 M26.3,25.9l-4.4,6.6l4.4,1.7 M29.1,33.9l2.4-12.8"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="top__title h6">Powerful API</h3>
                                            </div>

                                            <div className="list-group__content" data-slide-desc="">
                                                Bring automation to the forefront of your business using Update Cloud API.
                                                Any action that you can perform on Update Cloud can be automated into your
                                                systems.
                                            </div>
                                        </div>
                                        <div className="list-group__item" data-slide-to="2">
                                            <div className="list-group__top top">
                                                <div className="top__icon i-c-6x">
                                                    <svg className="icon-sm" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                         y="0px" viewBox="0 0 48 48">
                                                        <g>
                                                            <line className="stroke-primary stroke-1-5" x1="39.1"
                                                                  y1="18.9" x2="40.1" y2="23.1"></line>
                                                            <line className="stroke-primary stroke-1-5" x1="39.1"
                                                                  y1="18.9" x2="34.9" y2="20.2"></line>
                                                        </g>
                                                        <polygon className="fill-gradient"
                                                                 points="5.5,39.2 12.4,35.1 12.4,17.8 29.5,8.6 29.5,0.5 5.5,13.8 "></polygon>
                                                        <polygon className="fill-primary stroke-primary"
                                                                 points="12.5,43.1 19.5,38.8 19.5,22.1 35.5,13 35.5,4.5 12.5,17.8 "></polygon>
                                                        <polygon className="stroke-dark"
                                                                 points="19.5,47.5 43.5,34.1 43.5,8.8 19.5,22.1 "></polygon>
                                                        <polyline className="stroke-primary stroke-1-5"
                                                                  points="23.6,36.6 27.6,28.6 33.6,30.6 38.6,19.6 "></polyline>
                                                    </svg>
                                                </div>
                                                <h3 className="top__title h6">Easy management</h3>
                                            </div>
                                            <div className="list-group__content" data-slide-desc="">
                                                The Cloud Update control panel makes server management simple and intuitive.
                                                Common tasks such as a ordering servers, managing backups, and adjusting
                                                access control are only a few clicks away.
                                            </div>
                                        </div>
                                        <a className="btn btn--primary btn--outline m-t-6x is-hidden-md-down"
                                           aria-label="control panel features" href="">Control
                                            Panel features</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-xl-8">
                                    <div className="section__dv">
                                        <img className="dv-size" src="/img/slider-size-img.png" alt=" Control Panel"
                                             width="" height=""/>
                                        <div className="dv">
                                            <div className="dv__slide dv__slide--one-click-deploy is-active">
                                                <div className="dv__item dv__item--left-1"
                                                     style={{transform: "translateY(0px)", opacity: 1}}>
                                                    <img src="/img/home__one-click-deploy-left.png"
                                                         alt=" Control Panel - Wordpress Application" width=""
                                                         height=""/>
                                                </div>
                                                <div className="dv__item  dv__item--right-1"
                                                     style={{transform: "translateY(0px)", opacity: 1}}>
                                                    <img
                                                        src="/img/home__one-click-deploy-right-2.png"
                                                        alt="Control Panel - Available Addons" width="" height=""/>
                                                </div>

                                                <div className="dv__item  dv__item--center browsers browsers--md"
                                                     style={{transform: "translateY(0px)", opacity: 1}}>
                                                    <div className="browsers__bar">
                                                        <span className="browsers__dot"></span>
                                                        <span className="browsers__dot"></span>
                                                        <span className="browsers__dot"></span>
                                                    </div>
                                                    <div className="browsers__screen">
                                                        <img
                                                            src="/img/home__one-click-deploy-center.png"
                                                            alt=" Control Panel - One-Click Deploy" width="" height=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section--borderless-md">
                    <div className="container ">
                        <h2 className="section__title ">Deploy an instance with Update Cloud</h2>
                        <p className="section__desc">Over <strong> 40 million instances</strong> deployed by thousands
                            of clients</p>
                        <div className="section__content">
                            <div className="row row--lg features">
                                <div className="col-lg-4">
                                    <a className="feature feature--boxed feature--shadow feature--medium-icon feature--has-arrow">
                                        <div className="feature__icon feature__icon--mob"
                                             style={{transform: "translateY(0px)", opacity: 1}}>
                                            <img src="/img/production.png" alt="From prototype to production" width=""
                                                 height=""/>
                                        </div>
                                        <div className="feature__body">
                                            <h3 className="feature__title h6">From prototype to production
                                                in seconds</h3>
                                            <p className="feature__desc ">Our easy-to-use control panel and
                                                API let you spend more time coding and less time managing your
                                                infrastructure.</p>
                                            <div className="feature__actions">
                                                <span className="btn btn--primary btn--link btn--block btn--tab-xs">
                                                    <span className="btn__text">Explore our API</span>
                                                </span>
                                            </div>
                                            <div className="feature__arrow"
                                                 style={{transform: "translateY(0px)", opacity: 1}}>
                                                <svg className="icon-ui icon-ui--24 " xmlns="http://www.w3.org/2000/svg"
                                                     x="0px" y="0px" viewBox="0 0 24 24">
                                                    <path className="stroke" d="M4,12h16" stroke="#8692B0" fill="none"
                                                          strokeWidth="2px"></path>
                                                    <path className="stroke" d="M14,6l6,6l-6,6" stroke="#8692B0"
                                                          fill="none" strokeWidth="2px"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a className="feature feature--boxed feature--shadow feature--medium-icon feature--has-arrow"
                                       href="/features/operating-systems"
                                       data-animation-options="type:features;delay:160">
                                        <div className="feature__icon feature__icon--mob"
                                             style={{transform: "translateY(0px)", opacity: 1}}>
                                            <img src="/img/inifinite.png" alt="Infinite possibilities" width=""
                                                 height=""/>
                                        </div>
                                        <div className="feature__body">
                                            <h3 className="feature__title h6">Infinite possibilities</h3>
                                            <p className="feature__desc ">Choose from a number of
                                                preinstalled Systems and Applications to start your website in seconds,
                                                or upload your own ISO to unlock infinite possibilities.</p>
                                            <div className="feature__actions">
				<span className="btn btn--primary btn--link btn--block btn--tab-xs">
					<span className="btn__text">View Operating Systems</span>
									</span>
                                            </div>
                                        </div>
                                        <div className="feature__arrow"
                                             style={{transform: "translateY(0px)", opacity: 1}}
                                        >
                                            <svg className="icon-ui icon-ui--24 " xmlns="http://www.w3.org/2000/svg"
                                                 x="0px" y="0px" viewBox="0 0 24 24">
                                                <path className="stroke" d="M4,12h16" stroke="#8692B0" fill="none"
                                                      strokeWidth="2px"></path>
                                                <path className="stroke" d="M14,6l6,6l-6,6" stroke="#8692B0" fill="none"
                                                      strokeWidth="2px"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a className="feature feature--boxed feature--shadow feature--medium-icon feature--has-arrow"
                                       href="">
                                        <div className="feature__icon feature__icon--mob" style={{transform: "translateY(0px)", opacity: 1}}>
                                            <img src="/img/inifinite.png" alt="Infinite possibilities" width="" height="" />
                                        </div>
                                        <div className="feature__body">
                                            <h3 className="feature__title h6" >Infinite possibilities</h3>
                                            <p className="feature__desc " >Choose from a number of
                                                preinstalled Systems and Applications to start your website in seconds,
                                                or upload your own ISO to unlock infinite possibilities.</p>
                                            <div className="feature__actions" >
				<span className="btn btn--primary btn--link btn--block btn--tab-xs">
					<span className="btn__text">View Operating Systems</span>
									</span>
                                            </div>
                                        </div>
                                        <div className="feature__arrow" style={{transform: "translateY(0px)", opacity: 1}}>
                                            <svg className="icon-ui icon-ui--24 " xmlns="http://www.w3.org/2000/svg"
                                                 x="0px" y="0px" viewBox="0 0 24 24">
                                                <path className="stroke" d="M4,12h16" stroke="#8692B0" fill="none"
                                                      strokeWidth="2px"></path>
                                                <path className="stroke" d="M14,6l6,6l-6,6" stroke="#8692B0" fill="none"
                                                      strokeWidth="2px"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section--resources">
                    <div className="container ">
                        <h2 className="section__title " >Insights &amp; resources</h2>
                        <p className="section__desc" >Insights and resources to help drive your business
                            forward faster.</p>
                        <div className="section__content" >
                            <div className="row">
                                <div className="col-lg-6 order-4 order-lg-first">
                                    <div className="row row--mob-sm tiles">
                                        <div className="col-6">
                                            <a href="/faq/" className="tile">
                                                <div className="tile__icon i-c-8x mob-i-c-5x">
                                                    <svg className="icon-sm icon-sm--64" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         viewBox="0 0 64 64">
                                                        <path className="fill-gradient stroke-gradient"
                                                              d="M22.2,28c-0.7,0.3,0.3,14.9,0.3,14.9l-6.9,11.2c0,0-3.8-5.1-3.8-5L7.5,51V19.2l32-18.7v17.8L22.2,28z"
                                                              stroke="#B2B9CE" fill="#CADEFE"></path>
                                                        <path className="fill-primary stroke-primary"
                                                              d="M23.5,28.6l-0.1,30.5c0,0-3.3-5.1-3.4-5.1s-4.4,2.3-4.5,2.4c0-10.1,0-22.1,0-32.2l32-18.7v8.6L23.5,28.6z"
                                                              stroke="#007BFC" fill="#007BFC"></path>
                                                        <path className="stroke-dark"
                                                              d="M55.5,42.2c-0.7,0.3-16.7,9.9-17.1,10.1c-0.1,0.1-6.9,11.2-6.9,11.2s-3.8-5.1-3.8-5l-4.2,2.1c0-10.1,0-21.9,0-32l32-18.7V42.2z"
                                                              stroke="#142149" fill="none"></path>
                                                        <path className="fill-primary stroke-primary"
                                                              d="M40.7,44.8c0.3-0.2,0.6-0.4,0.7-0.8c0.2-0.3,0.2-0.7,0.3-1c0-0.2,0-0.5-0.2-0.6c-0.1-0.1-0.3,0-0.5,0.1c-0.3,0.2-0.6,0.4-0.7,0.8c-0.2,0.3-0.2,0.7-0.3,1c0,0.2,0,0.5,0.2,0.6C40.3,45,40.5,44.9,40.7,44.8z"
                                                              stroke="#007BFC" fill="#007BFC"></path>
                                                        <path className="fill-primary stroke-primary"
                                                              d="M44.8,28.3c0-1.4-0.3-2.4-0.9-2.8s-1.5-0.3-2.6,0.4c-1.2,0.7-2.2,1.7-2.8,2.9c-0.6,1.1-1,2.3-1.1,3.5l1.3-0.8c0.1-1.6,1-3.1,2.4-3.9c0.3-0.2,0.7-0.3,1.1-0.4c0.3,0,0.5,0.1,0.7,0.3c0.5,0.5,0.7,1.3,0.6,2c0,1.1-0.3,2.2-0.8,3.2l-1.3,2.5c-0.4,0.8-0.8,1.6-1,2.5c-0.1,0.7-0.2,1.4-0.3,2.1l1.3-0.7c0-1.2,0.2-2.3,0.7-3.4l1.1-2C44.2,32,44.7,30.1,44.8,28.3z"
                                                              stroke="#007BFC" fill="#007BFC"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="tile__title h6">FAQ</h3>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="/docs/" className="tile">
                                                <div className="tile__icon i-c-8x mob-i-c-5x">
                                                    <svg className="icon-sm icon-sm--64" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         viewBox="0 0 64 64" >
                                                        <path className="fill-gradient stroke-gradient"
                                                              d="M35.9,6.3v1.9l-13.4,7.3c-1.3,1.3-3,3.7-3,5l-0.7,28.2l-6.1,3.4c-0.7,0.4-1.5,0.5-2.3,0.2c-0.8-0.3-0.9-1-0.9-2.2V14.9c0-2.2,1.1-4.2,2.9-5.4l14.4-8.3l1.1-0.6l0,0L36,5.6C36,5.6,35.9,6.3,35.9,6.3z"
                                                              stroke="#B2B9CE" fill="#CADEFE"></path>
                                                        <path className="fill-primary stroke-primary"
                                                              d="M45.2,11.7v0.5c0,0-10.3,5.9-14.3,8.5c-1.4,0.7-3.4,2.4-3.4,3.7v29.7L22,57.5c-0.7,0.4-1.5,0.5-2.3,0.2c-0.9-0.3-1.4-1.2-1.2-2.2V20.3c0.2-2.2,1.3-4.2,3.2-5.4l14.4-8.3l1.1-0.6l0,0l8,5.1C45.2,11,45.2,11.7,45.2,11.7z"
                                                              stroke="#007BFC" fill="#007BFC"></path>
                                                        <path className="stroke-dark"
                                                              d="M55.5,45.7c0,2.1-0.3,4-2.2,5.3L31.8,63.1c-0.7,0.4-1.5,0.5-2.3,0.2c-0.8-0.3-2-1-2-2.2V25.9c0-2.1,2.4-4.5,3.9-5.4l15.1-8.9l9,5.1V45.7z"
                                                              stroke="#142149" fill="none"></path>
                                                        <path className="stroke-dark"
                                                              d="M55.5,16.6l-4.9,4.6c-1.8,0.4-4.2-1.1-4.1-2.3v-7.4L55.5,16.6z"
                                                              stroke="#142149" fill="none"></path>
                                                        <line className="stroke-primary stroke-1-5" x1="37.8" y1="46.8"
                                                              x2="50.8" y2="39.7" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                        <line className="stroke-primary stroke-1-5" x1="33.3" y1="49.2"
                                                              x2="34.6" y2="48.5" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                        <line className="stroke-primary stroke-1-5" x1="37.8" y1="40.9"
                                                              x2="50.8" y2="33.8" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                        <line className="stroke-primary stroke-1-5" x1="33.1" y1="43.7"
                                                              x2="34.3" y2="43" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                        <line className="stroke-primary stroke-1-5" x1="37.7" y1="35"
                                                              x2="51.2" y2="27.6" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                        <line className="stroke-primary stroke-1-5" x1="33.1" y1="37.5"
                                                              x2="34.3" y2="36.8" stroke="#007BFC" fill="none"
                                                              strokeWidth="1.5px"></line>
                                                    </svg>
                                                </div>
                                                <h3 className="tile__title h6">Documentation</h3>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="" className="tile">
                                                <div className="tile__icon i-c-8x mob-i-c-5x">
                                                    <svg className="icon-sm icon-sm--64" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                         viewBox="0 0 64 64"
                                                         xmlSpace="preserve">
	<path className="stroke-primary stroke-1-5"
          d="M25.8,17.3c0,0-0.1-0.1-0.1-0.1l-0.1-5.7c0-0.1,0.1-0.2,0.3-0.2s0.3,0.1,0.3,0.2V17l15.9-0.1c0.2,0,0.3,0.1,0.3,0.2s-0.1,0.2-0.3,0.2L26,17.3C25.9,17.3,25.8,17.3,25.8,17.3z"
          stroke="#007BFC" fill="none" strokeWidth="1.5px"></path>
                                                        <polygon className="fill-gradient stroke-gradient"
                                                                 points="5.5,48.4 32,63.5 58.5,48.4 48.4,42.8 32,51.9 15.7,42.7"
                                                                 stroke="#B2B9CE" fill="#CADEFE"></polygon>
                                                        <polygon className="fill-primary stroke-primary"
                                                                 points="58.5,37.4 32,52.5 5.5,37.4 5.5,29.2 14.6,29.2 32,39.2 49.8,29.3 58.5,29.3"
                                                                 stroke="#007BFC" fill="#007BFC"></polygon>
                                                        <polygon className="fill-primary-l stroke-primary-l"
                                                                 points="5.5,29 32,44.1 58.5,29 54,26.6 32,39.2 10.1,26.5"
                                                                 stroke="#007BFC" fill="#007BFC"></polygon>
                                                        <polyline className="stroke-dark"
                                                                  points="58.5,15.9 58.5,24 32,39.1 5.5,24 5.5,15.8"
                                                                  stroke="#142149" fill="none"></polyline>
                                                        <polygon className="stroke-dark"
                                                                 points="5.5,15.6 32,30.7 58.5,15.6 32,0.5"
                                                                 stroke="#142149" fill="none"></polygon>
</svg>
                                                </div>
                                                <h3 className="tile__title h6">Server Status</h3>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="/resources/developers/" className="tile">
                                                <div className="tile__icon i-c-8x mob-i-c-5x">
                                                    <svg className="icon-sm icon-sm--64" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                         viewBox="0 0 64 64" >
                                                        <polygon className="fill-gradient"
                                                                 points="7.5,54.8 15.5,50 15.5,23.4 39.5,9.5 39.5,0.5 7.5,19.2 "
                                                                 stroke="#B2B9CE" fill="#CADEFE"></polygon>
                                                        <polygon className="fill-primary stroke-primary"
                                                                 points="14.5,58.9 22.3,54.1 22.3,27.7 46.5,13.9 46.5,4.6 14.5,23.3"
                                                                 stroke="#007BFC" fill="#007BFC"></polygon>
                                                        <polygon className="stroke-dark"
                                                                 points="22.5,63.5 54.5,44.7 54.5,9.2 22.5,27.9"
                                                                 stroke="#142149" fill="none"></polygon>
                                                        <path className="stroke-primary stroke-1-5"
                                                              d="M44.2,28.7l5.8,2.1l-5.8,9 M34.1,34.5l-5.9,8.9l5.9,2.3 M37.8,45.3L41,28.1"
                                                              stroke="#007BFC" fill="none" strokeWidth="1.5px"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="tile__title h6">Update Cloud APIs</h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <a href=""
                                       className="widget widget--last-post m-b-0x has-hover">
                                        <div className="widget__media">
                                            <img
                                                src="/img/blogupdate.png"
                                                alt="Accelerating Update CLoud Vision: The Independent Infrastructure Cloud"
                                            width="" height=""/>
                                        </div>
                                        <div className="widget__body">
                                            <div className="widget__content">
                                                <h3 className="widget__title h5">Accelerating Update Cloud Vision: The
                                                    Independent Infrastructure Cloud</h3>
                                                <p className="widget__desc p-3">
                                                    By J.J. Kardwell, CEO

                                                    Cloud Update Community,

                                                    The Cloud Update team is focused on bringing the easiest-to-use, hig ...
                                                    <span className="is-link">Read More</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>


            {children}

            <footer className="site-footer footer">
                <div className="container">
                    <div className="footer__site-map">
                        <div className="row">
                            <div className="footer__column col-md-3">
                                <h3 className="footer__title h6" data-toggle="footer-column">
                                    Products
                                </h3>
                                <ul className="footer__nav nav">
                                    <li className="nav__item">
                                        <a className="nav__link" href="">Cloud Compute</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="">High Frequency
                                            Compute</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/bare-metal/">Bare Metal</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/object-storage/">Object Storage</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/block-storage/">Block Storage</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/dedicated-cloud/">Dedicated
                                            Instances</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/ddos-protection/">DDoS Protection</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/direct-connect/">Direct Connect</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/products/load-balancers/">Load Balancers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column col-md-3">
                                <h3 className="footer__title h6" data-toggle="footer-column">
                                    Features
                                </h3>
                                <ul className="footer__nav nav">
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/datacenter-locations/">Data Center
                                            Locations</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/advanced-networking/">Advanced
                                            Network</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/control-panel/">Control Panel</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/operating-systems/">Operating
                                            Systems</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/upload-iso/">Upload ISO</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/one-click-apps/">One-click Apps</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/features/bgp/">Bring your IP space</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column col-md-3">
                                <h3 className="footer__title h6" data-toggle="footer-column" data-url="/resources">
                                    Resources
                                </h3>
                                <ul className="footer__nav nav">
                                    <li className="nav__item">
                                        <a className="nav__link" href="/resources/faq/">FAQ</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/resources/developers/">Developers / APIs</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/docs/">Update Cloud Docs</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/resources/benchmarks/">Benchmarks</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="">Server Status</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/bug-bounty/">Bug Bounty</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/coupons/">Coupons</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/resources/partners/">Solution Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column col-md-3">
                                <h3 className="footer__title h6" data-toggle="footer-column">
                                    Company
                                </h3>
                                <ul className="footer__nav nav">
                                    <li className="nav__item">
                                        <a className="nav__link" href="/company/our-team/">Our Team</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/news/">News</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/company/brand-assets/">Brand Assets</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/company/referral-program/">Referral Program</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/company/careers">Careers</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/sla/">SLA</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/legal/tos/">Legal</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="/company/contact/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer__social-nav rail rail--space-between">
                        <p>Over <span className="is-hidden-md-down" >40,000,000</span> <span
                            className="is-hidden-lg-up">40,000,000</span> Cloud Servers Launched</p>
                        <div className="footer__socials">
                            <a href="" target="_blank">
                                <img src="/img/twitter.png"/>
                            </a>
                            <a href="" target="_blank">
                                <img src="/img/facebook.png" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/img/instagram.png" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/img/linkedin.png" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/img/github.png" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/img/overflow.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

