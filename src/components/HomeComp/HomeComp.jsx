// style
import "./home.module.scss";
// icons
import { FaEye, FaHeart } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
//
import { Link } from "react-router-dom";
import HomeProduct from "../HomeProduct";
import { useState } from "react";

const HomeComp = () => {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  // filter of trending product
  const filtercate = (x) => {
    const filterproduct = HomeProduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };
  // allTrendingProduct
  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct);
  };

  return (
    <div className="home">
      <div className="top_banner">
        <div className="contant">
          <h3>silver aluminium</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to="/shop" className="link">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
              </div>

              <div className="cate">
                <h3 onClick={() => filtercate("new")}>New</h3>
                <h3 onClick={() => filtercate("featured")}>Featured</h3>
                <h3 onClick={() => filtercate("top")}>top selling</h3>
              </div>
            </div>
            {/* products */}
            <div className="products">
              <div className="container">
                {trendingProduct.map(({ image, Name, price }) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={image} alt="product" />
                          <div className="icon">
                            <div className="icon_box">
                              <FaEye />
                            </div>
                            <div className="icon_box">
                              <FaHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{Name}</h3>
                          <p>${price}</p>
                          <button className="btn">Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <button className="btn_more">Show More</button>
            </div>
          </div>

          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testimonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src="/image/T1.avif" alt="testimonial" />
                  </div>
                  <div className="info">
                    <h3>stephanie robbins</h3>
                    <h4>web designer</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo deleniti fugiat accusantium aliquid labore fuga
                      asperiores, velit provident ad incidunt autem
                      voluptatibus, repudiandae sunt omnis repellendus
                      consectetur sed quia eveniet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="newsletter">
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>join our mailing list</p>
                  <input type="email" placeholder="E-mail" autoComplete="off" />
                  <button>subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>
                    <div className="icon">
                      <FaInstagram />
                    </div>
                    <div className="icon">
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
