import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const IntroduceAboutShop = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center">
            𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐒𝐓𝐎𝐑𝐄
          </h3>
          <div className="sub-title-about-shop text-center mt-2 mb-2">
          𝑇ℎ𝑒 𝑊𝑒𝑎𝑡ℎ𝑒𝑟 𝑃𝑎𝑐𝑘𝑎𝑔𝑒 𝑖𝑠 𝑏𝑢𝑖𝑙𝑡 𝑡𝑜 𝑏𝑟𝑖𝑛𝑔 𝑦𝑜𝑢 𝑎𝑐𝑐𝑢𝑟𝑎𝑡𝑒, 𝑢𝑝-𝑡𝑜-𝑑𝑎𝑡𝑒 𝑓𝑜𝑟𝑒𝑐𝑎𝑠𝑡𝑠 𝑎𝑛𝑑 𝑤𝑒𝑎𝑡ℎ𝑒𝑟 𝑎𝑙𝑒𝑟𝑡𝑠. 
          
      
            <br />
            𝐷𝑒𝑠𝑖𝑔𝑛𝑒𝑑 𝑤𝑖𝑡ℎ 𝑢𝑠𝑒𝑟 𝑐𝑜𝑚𝑓𝑜𝑟𝑡 𝑖𝑛 𝑚𝑖𝑛𝑑, 𝑖𝑡 𝑒𝑛𝑠𝑢𝑟𝑒𝑠 𝑦𝑜𝑢 𝑛𝑒𝑣𝑒𝑟 𝑚𝑖𝑠𝑠 𝑎𝑛𝑦 𝑐𝑟𝑖𝑡𝑖𝑐𝑎𝑙 𝑢𝑝𝑑𝑎𝑡𝑒𝑠 𝑎𝑏𝑜𝑢𝑡 𝑠𝑒𝑣𝑒𝑟𝑒 𝑤𝑒𝑎𝑡ℎ𝑒𝑟 𝑜𝑟 𝑑𝑎𝑖𝑙𝑦 𝑓𝑜𝑟𝑒𝑐𝑎𝑠𝑡𝑠.
          </div>
          <div className="content-about-shop  grid grid-cols-1 md:grid-cols-3">
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/sunny.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content ">
                <h6 className="item-about-shoh6-header">𝐖𝐞𝐚𝐭𝐡𝐞𝐫-𝐫𝐞𝐬𝐢𝐬𝐭𝐚𝐧𝐭 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧</h6>
                <p className="item-about-shop-header">
                𝐶𝑜𝑚𝑝𝑟𝑖𝑠𝑒𝑑 𝑜𝑓 𝑛𝑎𝑡𝑢𝑟𝑎𝑙 𝑚𝑎𝑡𝑒𝑟𝑖𝑎𝑙𝑠 𝑓𝑜𝑟 𝑒𝑓𝑓𝑒𝑐𝑡𝑖𝑣𝑒 𝑠𝑢𝑛 𝑎𝑛𝑑 𝑟𝑎𝑖𝑛 𝑏𝑎𝑟𝑟𝑖𝑒𝑟
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/cloud.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content  ">
                <h6 className="item-about-shoh6-header">𝐄𝐱𝐭𝐫𝐞𝐦𝐞 𝐜𝐥𝐢𝐦𝐚𝐭𝐞 𝐜𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐢𝐥𝐢𝐭𝐲</h6>
                <p className="item-about-shop-header">
                𝐶𝑜𝑛𝑠𝑡𝑟𝑢𝑐𝑡𝑒𝑑 𝑡𝑜 𝑤𝑖𝑡ℎ𝑠𝑡𝑎𝑛𝑑 𝑏𝑜𝑡ℎ 𝑢𝑙𝑡𝑟𝑎𝑣𝑖𝑜𝑙𝑒𝑡 𝑟𝑎𝑦𝑠 𝑎𝑛𝑑 ℎ𝑒𝑎𝑣𝑦 𝑟𝑎𝑖𝑛𝑓𝑎𝑙𝑙
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/umbrella.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content ">
                <h6 className="item-about-shoh6-header">𝐀𝐥𝐥-𝐰𝐞𝐚𝐭𝐡𝐞𝐫 𝐟𝐨𝐫𝐦𝐮𝐥𝐚</h6>
                <p className="item-about-shop-header">
                𝐸𝑛𝑔𝑖𝑛𝑒𝑒𝑟𝑒𝑑 𝑡𝑜 𝑝𝑟𝑜𝑡𝑒𝑐𝑡 𝑦𝑜𝑢 𝑓𝑟𝑜𝑚 𝑎𝑙𝑙 𝑤𝑒𝑎𝑡ℎ𝑒𝑟 𝑐𝑜𝑛𝑑𝑖𝑡𝑖𝑜𝑛𝑠, 𝑓𝑟𝑜𝑚 𝑠𝑡𝑜𝑟𝑚𝑠 𝑡𝑜 𝑠𝑢𝑛
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default IntroduceAboutShop;
