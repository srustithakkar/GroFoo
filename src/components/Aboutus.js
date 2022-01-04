import React from "react";
import icUser from "../assets/images/ic_user.png";
import header_logo from "../assets/images/header_logo.png";
import ic_growth from "../assets/images/ic_growth.png";
import ic_title_aboutus from "../assets/images/ic_title_aboutus.png";
import ic_city from "../assets/images/ic_city.png";
import userjoin from "../assets/images/userjoin.png";
import pro_68615 from "../assets/images/pro_68615.jpg";
import order_completed from "../assets/images/order_completed.png";

function AboutUs(props) {
  return (
    <div>
      <div className="wrapper dashboard Grofoo-home">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <img alt="img" src={header_logo} className="logo_c" />{" "}
              </a>
            </div>
            {/* <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav ">
                                <li className="dropdown  notify">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="notify-row">
                                            <span className="bell ">
                                                <i className="ion-ios-location-outline"></i>Location<i className="ion-chevron-down adown"></i>
                                            </span>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu extended tasks-bar">
                                        <div className="notify-arrow notify-arrow-green"></div>
                                        <div className="search-box">
                                            <h3 className="header">Where do you want the delivery?</h3>
                                            <div className="deliver-section">
                                                Deliver in : <span className="clr_green">Gurugram</span>
                                            </div>
                                            <div className="location-selection">
                                                <p>——— Or Select your city ———</p>
                                                <h1>Top Searched Cities</h1>
                                                <span className="city_tag">
                                                    New Delhi
                                                </span>
                                                <span className="city_tag">
                                                    Bengaluru
                                                </span>
                                                <span className="city_tag">
                                                    Hyderabad
                                                </span>
                                                <div className="location-search-box">
                                                    <i className="location-seach-icon ion-ios-search"></i>
                                                    <input type="text" className="search-input" placeholder="Address, city, zip code or state"/>
                                                    <button className="auto-detect-btn"><i className="ion-android-locate"></i>Detect</button>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="dropdown  notify">
                                    <a href="/" className="dropdown-toggle" data-toggle="modal" data-target="#myModal2">
                                        <span className="notify-row">
                                            <span className="bell ">
                                                <i className="ion-ios-cart-outline"></i> My Cart
                                                <span className="label label-info badge">3</span>
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <a className="btn btn-nav-line page-scroll " href="login.html"> <i className="ion-ios-contact-outline"></i> Sign
                                    In </a>
                            </ul>
                        </div> */}
          </div>
        </nav>

        <div id="main" className="main search_result">
          <div
            className="inner-page-hero bg-image"
            style={{
              background: "url('assets/images/about_us_bg.png')",
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
                  <div className="text-center white-txt">
                    <h6>
                      <a href="/">About US</a>
                    </h6>
                    <p className="info_sub_text">Grocery to eatery </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="result-show m-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3">
                  <p>
                    <span className="">
                      <strong>Home / About Us</strong>
                    </span>
                  </p>
                </div>
                <div className="col-sm-9 text-right">
                  <a
                    href="/"
                    className="btn btn-action btn-gplus wow fadeInDown nomargin"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span>
                      <i className="ion-ios-box"></i>
                    </span>
                    <span href="/">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="buyer" className="fa-point-work how-it-works bg-aboutus">
            <div className="container">
              <div className="row text-center">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="points-intro text-center">
                    <h1 className="wow fadeInDown">
                      <img
                        alt="img"
                        className="title_img"
                        src={ic_title_aboutus}
                      />
                    </h1>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
                  <div className="about_us">
                    <div className="about_details">
                      <p>
                        Save more with indexfing! We give you the lowest prices
                        on all your grocery and food needs.
                      </p>
                      <p>
                        indexfing is a low-price online supermarket that gets
                        grocery and food products across categories like
                        grocery, fruits & vegetables, beauty & wellness,
                        household care, baby care, pet care and meats & seafood
                        delivered to your doorstep.
                      </p>
                      <ul className="list">
                        <li>
                          {" "}
                          Choose from over 2,000 grocery and food at lower
                          prices than supermarkets every day.
                        </li>
                        <li>Unlimited choice of Indian grocery and food. </li>
                        <li>
                          Pickup at your convenience Delivery at your door
                          steps.
                        </li>
                        <li>
                          Enjoy Indian grocery and food ever before with
                          indexfing.{" "}
                        </li>
                      </ul>
                      <span className="big_text">
                        Happy Shopping with indexfing!
                      </span>

                      <p>Why should I use indexfing.com?</p>
                      <p>
                        Indexfing will let you concentrate on your new business
                        models, products, stores, and customers as it frees up
                        your time from worrying about technology, with our
                        cutting-edge technology protection on your stores by
                        24/7 and 365 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col1">
                    <div className="how-it-works-wrap">
                      <div className="step step-1">
                        <div className="icon" data-step="1">
                          <img alt="img" src={icUser} />
                        </div>
                        <h3>100+</h3>
                        <p className="sub_text">
                          People have joined the indexfing team
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col2">
                    <div className="step step-2">
                      <div className="icon" data-step="2">
                        <img alt="img" src={ic_growth} />
                      </div>
                      <h3>4x</h3>
                      <p className="sub_text">
                        Rate of growth in our monthly user base
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                    <div className="step step-3">
                      <div className="icon" data-step="3">
                        <img alt="img" src={ic_city} />
                      </div>
                      <h3>10 days</h3>
                      <p className="sub_text">
                        Time taken to launch in 18 cities across India
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                    <div className="step step-2">
                      <div className="icon" data-step="4">
                        <img alt="img" src={userjoin} />
                      </div>
                      <h3>10 K+</h3>
                      <p className="sub_text">
                        Rate of indexfing users register monthly base
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-9 col-md-9 col-xs-12">
                  <ul className="footer-link">
                    <li>
                      <a href="aboutus.html">About Us</a>
                    </li>
                    <li>
                      <a href="faq.html">Help Center</a>
                    </li>
                    <li>
                      <a href="Business_contact_us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="Business_Home.html">Retailer login</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 col-md-3 col-xs-12 text-right">
                  <ul className="social-link">
                    <li>
                      <i className="ion-social-facebook social-icon"></i>
                    </li>
                    <li>
                      <i className="ion-social-linkedin social-icon"></i>
                    </li>
                    <li>
                      <i className="ion-social-twitter social-icon"></i>
                    </li>
                    <li>
                      <i className="ion-social-skype social-icon"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal cart--> */}
      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel2">
                My Cart <span>(3 item)</span>
              </h4>
            </div>

            <div className="modal-body cart-list">
              <div className="cart-box">
                <div className="cart-sub-box">
                  <div className="">
                    <span className="cart-title-left">Sub total</span>
                    <span className="cart-title-right">$1222.00</span>
                    <div className="clear"></div>
                  </div>
                  <div className="">
                    <span className="cart-title-left">Delivery Charges</span>
                    <span className="cart-title-right">
                      <span className="clr_green">Free</span>
                    </span>
                    <div className="clear"></div>
                  </div>
                </div>
                <div className="cart-total">
                  <div className="cart-row">
                    <span className="cart-title-left">Your total saving</span>
                    <span className="cart-title-right">
                      <span className="text--total">$333.33(10%)</span>
                    </span>
                    <div className="clear"></div>
                  </div>
                </div>
                <div className="cart-list-scroll">
                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="more-shopping"
                data-toggle="modal"
                data-target="#myModal1"
              >
                <div className="shopping-header">
                  Last Minute Buys
                  <i className="ion-chevron-up"></i>
                </div>
              </div>

              <div className="checkout-box">
                <div className="checkout-note">
                  <p>Promo code can be applied on payment page</p>
                </div>
                <button
                  className="checkout-btn"
                  data-toggle="modal"
                  data-target="#myModal3"
                >
                  <span> Proceed to Checkout </span>
                  <span className="c-total-text">
                    $344.55 <i className="ion-ios-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal cart--> */}
      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel2">
                My Cart <span>(3 item)</span>
              </h4>
            </div>

            <div className="modal-body cart-list">
              <div className="cart-box">
                <div className="cart-sub-box">
                  <div className="">
                    <span className="cart-title-left">Sub total</span>
                    <span className="cart-title-right">$1222.00</span>
                    <div className="clear"></div>
                  </div>
                  <div className="">
                    <span className="cart-title-left">Delivery Charges</span>
                    <span className="cart-title-right">
                      <span className="clr_green">Free</span>
                    </span>
                    <div className="clear"></div>
                  </div>
                </div>
                <div className="cart-total">
                  <div className="cart-row">
                    <span className="cart-title-left">Your total saving</span>
                    <span className="cart-title-right">
                      <span className="text--total">$333.33(10%)</span>
                    </span>
                    <div className="clear"></div>
                  </div>
                </div>
                <div className="cart-list-scroll">
                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="more-shopping"
                data-toggle="modal"
                data-target="#myModal1"
              >
                <div className="shopping-header">
                  Last Minute Buys
                  <i className="ion-chevron-up"></i>
                </div>
              </div>

              <div className="checkout-box">
                <div className="checkout-note">
                  <p>Promo code can be applied on payment page</p>
                </div>
                <button
                  className="checkout-btn"
                  data-toggle="modal"
                  data-target="#myModal3"
                >
                  <span> Proceed to Checkout </span>
                  <span className="c-total-text">
                    $344.55 <i className="ion-ios-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content product-list-search">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Product List<span></span>
              </h4>
              <input type="Search" className="p-l-search" />
            </div>
            <div className="modal-body cart-list">
              <div className="cart-box">
                <div className="cart-list-scroll">
                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img alt="img" className="cart-img" src={pro_68615} />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel3"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel2">
                Addresss
              </h4>
            </div>

            <div className="modal-body cart-list">
              <div className="wizard_checkout">
                <div className="wizard-inner">
                  <div className="connecting-line"></div>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a
                        href="#step1"
                        data-toggle="tab"
                        aria-controls="step1"
                        role="tab"
                        title="Shipping Method"
                      >
                        <span className="round-tab">1</span>
                        <span className="w-label">Shipping Method</span>
                      </a>
                    </li>

                    <li role="presentation" className="disabled">
                      <a
                        href="#step2"
                        data-toggle="tab"
                        aria-controls="step2"
                        role="tab"
                        title="Review Order"
                      >
                        <span className="round-tab">2</span>
                        <span className="w-label">Review Order</span>
                      </a>
                    </li>
                    <li role="presentation" className="disabled">
                      <a
                        href="#step3"
                        data-toggle="tab"
                        aria-controls="step3"
                        role="tab"
                        title="Payment & Billing"
                      >
                        <span className="round-tab">3</span>
                        <span className="w-label">Payment & Billing</span>
                      </a>
                    </li>

                    <li role="presentation" className="disabled">
                      <a
                        href="#complete"
                        data-toggle="tab"
                        aria-controls="complete"
                        role="tab"
                        title="Complete"
                      >
                        <span className="round-tab">4</span>
                        <span className="w-label">Complete Order</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <form className="checkout-tab-box">
                  <div className="tab-content">
                    <div className="tab-pane active" role="tabpanel" id="step1">
                      <div className="check-title-box">
                        <div className="check-title">
                          Chose Delivery Address
                        </div>
                        <div className="check-add-btn">
                          <a
                            href="/"
                            data-toggle="modal"
                            data-target="#myModal4"
                          >
                            Add New
                            <i className="ion-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="address-box">
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">
                            Annie Smith
                          </span>
                        </label>
                        <p className="address">
                          example_mail@mail.com
                          <br />
                          1 Chapel Hill,
                          <br /> Heswall,
                          <br /> BOURNEMOUTH,
                          <br /> BH1 1AA
                        </p>

                        <div className="formee">
                          <select>
                            <option value="1">Select Address</option>
                            <option value="1"> Address 1</option>
                            <option value="1"> Address 2</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className="check-title-box">
                        <div className="check-title">Chose Billing address</div>
                      </div>
                      <div className="address-box">
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">
                            Annie Smith
                          </span>
                        </label>
                        <p className="address">
                          example_mail@mail.com
                          <br />
                          1 Chapel Hill,
                          <br /> Heswall,
                          <br /> BOURNEMOUTH,
                          <br /> BH1 1AA
                        </p>

                        <div className="formee">
                          <select>
                            <option value="1">Select Address</option>
                            <option value="1"> Address 1</option>
                            <option value="1"> Address 2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="step2">
                      <div className="check-title-box">
                        <div className="check-title">
                          Review Order & Notification{" "}
                        </div>
                        <div className="check-add-btn">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description notify-text">
                              Notification
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="review-cart-box">
                        <div className="cart_note">
                          <i className="ion-information-circled"></i>Items in
                          your cart have been grouped by store. Please click on
                          checkout to complete transition.
                        </div>

                        <div className="cart-sub-box">
                          <div className="">
                            <span className="cart-title-left">Sub total</span>
                            <span className="cart-title-right">$1222.00</span>
                            <div className="clear"></div>
                          </div>
                          <div className="">
                            <span className="cart-title-left">
                              Delivery Charges
                            </span>
                            <span className="cart-title-right">
                              <span className="clr_green">Free</span>
                            </span>
                            <div className="clear"></div>
                          </div>
                        </div>
                        <div className="cart-total">
                          <div className="cart-row">
                            <span className="cart-title-left">
                              Your total saving
                            </span>
                            <span className="cart-title-right">
                              <span className="text--total">$333.33(10%)</span>
                            </span>
                            <div className="clear"></div>
                          </div>
                        </div>
                        <div className="">
                          <div className="store_details">
                            <i className="ion-ios-home"></i>
                            <span className="store_address">
                              Guru Groceries and Chaat House, 14119 Travilah Rd,
                              MD 20850, Phone No: 13013185600
                              www.ubconnect.com/gurugrocerieschaathouse
                              <span className="hrs">
                                Hours : 8:00 AM to 6:00 PM
                              </span>
                              <div className="">
                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Delivery
                                  </span>
                                </label>

                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Pickup
                                  </span>
                                </label>
                              </div>
                            </span>
                          </div>
                          <div className="cart-list-box">
                            <img
                              alt="img"
                              className="cart-img"
                              src={pro_68615}
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
                              </h1>
                              <div className="product-unit">400 g</div>
                              <div className="product-items">
                                <div className="add-to-cart-btns">
                                  <button>
                                    <i className="ion-minus"></i>
                                  </button>
                                  <span>1</span>
                                  <button>
                                    <i className="ion-plus"></i>
                                  </button>
                                </div>
                                <span className="new-price">X $89.00</span>
                                <span className="old-price">$98.00</span>
                                <div className="total-price">$178.00</div>
                              </div>
                            </div>
                          </div>

                          <div className="cart-list-box">
                            <img
                              alt="img"
                              className="cart-img"
                              src={pro_68615}
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
                              </h1>
                              <div className="product-unit">400 g</div>
                              <div className="product-items">
                                <div className="add-to-cart-btns">
                                  <button>
                                    <i className="ion-minus"></i>
                                  </button>
                                  <span>1</span>
                                  <button>
                                    <i className="ion-plus"></i>
                                  </button>
                                </div>
                                <span className="new-price">X $89.00</span>
                                <span className="old-price">$98.00</span>
                                <div className="total-price">$178.00</div>
                              </div>
                            </div>
                          </div>

                          <div className="cart-list-box">
                            <img
                              alt="img"
                              className="cart-img"
                              src={pro_68615}
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
                              </h1>
                              <div className="product-unit">400 g</div>
                              <div className="product-items">
                                <div className="add-to-cart-btns">
                                  <button>
                                    <i className="ion-minus"></i>
                                  </button>
                                  <span>1</span>
                                  <button>
                                    <i className="ion-plus"></i>
                                  </button>
                                </div>
                                <span className="new-price">X $89.00</span>
                                <span className="old-price">$98.00</span>
                                <div className="total-price">$178.00</div>
                              </div>
                            </div>
                          </div>
                          <div className="store_details">
                            <i className="ion-ios-home"></i>
                            <span className="store_address">
                              Apani dukan Groceries , 1221 Near bus station, MD
                              12112, Phone No: +91 91919191 www.apnidukan.com
                              <span className="hrs">
                                Hours : 8:00 AM to 6:00 PM
                              </span>
                              <div className="">
                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Delivery
                                  </span>
                                </label>

                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Pickup
                                  </span>
                                </label>
                              </div>
                            </span>
                          </div>
                          <div className="cart-list-box">
                            <img
                              alt="img"
                              className="cart-img"
                              src={pro_68615}
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
                              </h1>
                              <div className="product-unit">400 g</div>
                              <div className="product-items">
                                <div className="add-to-cart-btns">
                                  <button>
                                    <i className="ion-minus"></i>
                                  </button>
                                  <span>1</span>
                                  <button>
                                    <i className="ion-plus"></i>
                                  </button>
                                </div>
                                <span className="new-price">X $89.00</span>
                                <span className="old-price">$98.00</span>
                                <div className="total-price">$178.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="step3">
                      <div className="check-title-box">
                        <div className="check-title">Payment Options</div>
                      </div>
                      <div className="payment-options-box">
                        <div className="top-space">
                          <label className="custom-control custom-radio right-space">
                            <input
                              type="radio"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description payment-o-text">
                              PayPal
                            </span>
                          </label>

                          <label className="custom-control custom-radio right-space">
                            <input
                              type="radio"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description payment-o-text">
                              WorldPay
                            </span>
                          </label>
                        </div>

                        <div className="formee top-space">
                          <input type="text" placeholder="Name on Card" />
                          <input type="text" placeholder="Card Number" />
                          <input
                            type="text"
                            className="expire-date-input"
                            placeholder="Expire Date (MM/YY)"
                          />
                          <input
                            type="text"
                            className="cvv-input"
                            placeholder="CVV"
                          />
                        </div>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description notify-text">
                            Save this as my primary payment method
                          </span>
                        </label>

                        <div className="check-title-box top-space">
                          <div className="check-title">Promotion</div>
                        </div>
                        <div className="formee">
                          <div className="Promotion">
                            <i className="ion-plus"></i>
                            <input type="text" placeholder="Promotion Code" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="complete">
                      <div className="check-title-box">
                        <div className="check-title">Complete Order</div>
                      </div>
                      <div className="modal-body complete-order">
                        <img alt="img" src={order_completed} />
                        <h1>Complete Successfully</h1>
                        <p>
                          Your ordering information will be forwarded to your
                          email{" "}
                        </p>
                        <b>example_mail@mail.com</b>
                        <br />
                        <button className="btn cart-btn">More Shopping</button>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>

              <div className="checkout-box">
                <div className="checkout-note">
                  <div className="cart-final-total" id="cart-final-total">
                    <div>Cart Subtotal : $5000.00 </div>
                    <div>Shipping : $9,99.00 </div>
                    <div>Promotion discount : $10.00 </div>
                  </div>
                  <p>Promo code can be applied on payment page</p>
                </div>
                <button className="checkout-process-btn">
                  <span className="prev-step-checkout pre-text">
                    {" "}
                    <i className="ion-ios-arrow-left"></i> Previous
                  </span>
                  $3444.33
                  <span className="c-total-text  next-step-checkout">
                    Next <i className="ion-ios-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel4"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel2">
                Add new address
              </h4>
            </div>

            <div className="modal-body cart-list">
              <div className="cart-box">
                <div className="formee">
                  <input type="text" placeholder="Full Name" />
                  <input type="number" placeholder="Pincode" />
                  <input type="text" placeholder="Address line 1" />
                  <input type="text" placeholder="Address line 2" />
                  <select>
                    <option>Select country </option>
                    <option> India </option>
                  </select>
                  <select>
                    <option>Select state</option>
                    <option> Gujarat </option>
                  </select>
                  <select>
                    <option>Select city</option>
                    <option> Surat </option>
                  </select>
                  <button className="add-address-btn">Save and Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
