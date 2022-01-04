import React from "react";
import pro_68615 from "../assets/images/pro_68615.jpg";
import header_logo from "../assets/images/header_logo.png";
import titile_faqs from "../assets/images/titile_faqs.png";
import order_completed from "../assets/images/order_completed.png";

function Faq(props) {
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
                ariaExpanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <img alt="" src={header_logo} className="logo_c" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse navbar-right"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav ">
                {/* <li className="dropdown  notify"> */}
                {/* <a href="/" className="dropdown-toggle" data-toggle="dropdown">
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
                                    In </a> */}
              </ul>
            </div>
          </div>
        </nav>

        <div id="main" className="main search_result">
          <div
            className="inner-page-hero bg-image"
            style={{
              background: "url('assets/images/gift_card_bg.png')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
                  <div className="text-center white-txt">
                    <h6>
                      <a href="/">FAQ</a>
                    </h6>
                    <p className="info_sub_text">
                      We would love to hear from you!{" "}
                    </p>
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
                      <strong>Home / FAQ</strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fa-point-work how-it-works bg-faqs-details">
            <div className="container">
              <div className="row text-center">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="points-intro text-center">
                    <h1 className="wow fadeInDown">
                      <img alt="" className="title_img" src={titile_faqs} />
                    </h1>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
                  <div className="about_us">
                    <div className="about_details">
                      <p>
                        Indexfing and U Connect (we) provides this website under
                        the following terms and conditions. By using Indexfing
                        you must adhere to all guidelines, policies, terms, and
                        conditions that apply to that service. This is a legally
                        binding agreement, even if you are a visitor or
                        aggregator. If you do not agree, promptly exit this
                        site. You must adhere to all governing state and federal
                        laws. Indexfing reserves the right to cancel orders or
                        terminate accounts at its discretion.
                      </p>

                      <div className="faq_details">
                        <div className="bd-example" data-example-id="">
                          <div
                            id="accordion"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingOne"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseOne"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>Orders:</h3>
                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>

                              <div
                                id="collapseOne"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingOne"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  You agree to pay all prices/fees/taxes
                                  incurred by using Indexfing. We do not assume
                                  any liability for the actions or products of
                                  any third party taking part in the production
                                  or delivery of your order. If you choose cash
                                  as your method of payment, you are agreeing to
                                  pay the restaurant in the form of U.S. dollars
                                  at the time of delivery. By choosing the
                                  credit card option, you are agreeing that you
                                  are authorized to use the credit card being
                                  used in the purchase. You must include all
                                  information we request, and it must be valid
                                  and must enable us to obtain payment from you
                                  (e.g. valid credit card information). If
                                  Indexfing does not receive payment from your
                                  credit card company, you agree to pay the
                                  amount due when Indexfing requests it. The
                                  charges listed on the website may be different
                                  than the final purchase charges.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingTwo"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseTwo"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>Return and Delivery Policy</h3>

                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingTwo"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  All pages within this Site and any material
                                  made available for download are the property
                                  of Company. The Site is protected by United
                                  States and international copyright and
                                  trademark laws. The contents of the Site,
                                  including without limitation the files,
                                  documents, text, photographs, images, audio,
                                  and video, and any materials accessed through
                                  or made available for use or download through
                                  this Site ("Content") may not be copied,
                                  distributed, modified, reproduced, published
                                  or used, in whole or in part, except for
                                  purposes authorized or approved by Company,
                                  including the provision of services or
                                  products to Company, or in connection with a
                                  business relationship with Company. You may
                                  not frame or utilize framing techniques to
                                  enclose, or deep linking to, any name,
                                  trademarks, service marks, logo, Content or
                                  other proprietary information (including;
                                  images, text, page layout, or form) of Company
                                  without our express written consent.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingThree"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseThree"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>U Connect Gift Cards Terms</h3>

                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingThree"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  Gift Cards are not redeemable for cash. Gift
                                  Cards cannot be combined with cash. If your
                                  Gift Card does not cover the full amount of
                                  the order, the remaining balance must be paid
                                  using a credit or debit card. Gift Cards can
                                  only be used for restaurants that accept
                                  credit and debit card orders. Gift Cards can
                                  be redeemed on the Account Page and during the
                                  checkout process. Your Gift Card Balance can
                                  be checked on the Account Page We reserve the
                                  right to issue expiration dates on promotional
                                  Gift Card Codes that are not directly
                                  purchased by you. Lost Gift Card Codes may be
                                  replaced only with a valid proof of purchase.
                                  U Connect shall have no responsibility or
                                  liability for Unauthorized use of a Gift Card.
                                  Gift Card Balances may be transferred to a
                                  different account only with valid proof of
                                  purchase. The balance will reflect the balance
                                  shown in our records. Balance transfers will
                                  be processed within 72 hours of valid proof of
                                  purchase.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingOne"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseFour"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>Collapsible Group Item</h3>

                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>

                              <div
                                id="collapseFour"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingOne"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingTwo"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseFive"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>Confidential Information</h3>

                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingTwo"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  You acknowledge that the Site and the Content
                                  includes information which is confidential and
                                  proprietary to Company ("Confidential
                                  Information"). Confidential Information
                                  includes Content or other information marked
                                  as "Confidential" or similar label, as well as
                                  any other Content or other information which
                                  you know or reasonably should know is
                                  confidential or proprietary to Company. If you
                                  are not sure whether Content is Confidential
                                  Information, please contact an authorized
                                  Company employee for clarification and do not
                                  disclose such Content to any third party until
                                  you receive such clarification. You agree to
                                  keep all such Confidential Information
                                  strictly confidential and to not disclose any
                                  such Confidential Information to any third
                                  party without the advance written consent of
                                  Company.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingThree"
                              >
                                <div className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseSix"
                                    ariaExpanded="false"
                                    aria-controls="collapseOne"
                                    className=""
                                  >
                                    <h3>
                                      Accuracy and Integrity of Information
                                    </h3>

                                    <i
                                      className="ion-ios-arrow-down f_arrow"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse in"
                                role="tabpanel"
                                ariaLabelledby="headingThree"
                                ariaExpanded="false"
                              >
                                <div className="card-block">
                                  Although Company attempts to ensure the
                                  integrity and accurateness of the Site, it
                                  makes no representations, warranties or
                                  guarantees whatsoever as to the correctness or
                                  accuracy of the Site and Content thereon. It
                                  is possible that the Site could include
                                  typographical errors, inaccuracies or other
                                  errors, and that unauthorized additions,
                                  deletions and alterations could be made to the
                                  Site by third parties. In the event that an
                                  inaccuracy arises, please inform Company so
                                  that it can be corrected. Information
                                  contained on the Site may be changed or
                                  updated without notice. Additionally, Company
                                  shall have no responsibility or liability for
                                  information or Content posted to the Site from
                                  any non-Company affiliated third party.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal2"
        tabIndex="-1"
        role="dialog"
        ariaLabelledby="myModalLabel2"
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
        ariaLabelledby="myModalLabel2"
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
                    <img alt="" className="cart-img" src={pro_68615} />
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
        ariaLabelledby="myModalLabel3"
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
                            {" "}
                            Add New <i className="ion-plus"></i>
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
                            <img alt="" className="cart-img" src={pro_68615} />
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
                            <img alt="" className="cart-img" src={pro_68615} />
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
                            <img alt="" className="cart-img" src={pro_68615} />
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
                            <img alt="" className="cart-img" src={pro_68615} />
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
                        <img alt="" src={order_completed} />
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
        ariaLabelledby="myModalLabel4"
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

export default Faq;
