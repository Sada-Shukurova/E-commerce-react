// style
import "./home.module.scss";
// icons
import { FaEye, FaHeart } from "react-icons/fa";
//
import { Link } from "react-router-dom";
import HomeProduct from "../HomeProduct";
import { useState } from "react";

const HomeComp = () => {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
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
                <h2>trending product</h2>
              </div>

              <div className="cate">
                <h3>New</h3>
                <h3>Featured</h3>
                <h3>top selling</h3>
              </div>
            </div>
            {/* products */}
            <div className="products">
              <div className="container">
                {trendingProduct.map(({ image }) => {
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
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="right_box"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
