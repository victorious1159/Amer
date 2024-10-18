import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getComboById } from "../../admin/combos/FecthApi";

const ComboDetailsSection = (props) => {
  let { id } = useParams();
  const [detailCombo, setDetailCombo] = useState()

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const res = await getComboById(id);
      setDetailCombo(res);
  } catch (error) {
      console.error("Error fetching combo data:", error);
  }
  };

  console.log(detailCombo)

  return (
    <Fragment>
      <section className="p-20 m-4 md:mx-12 md:my-6  bg-product-detail">
        <div className="grid grid-cols-2 md:grid-cols-12">
          <div className="col-span-2 mt-8 md:mt-0 md:col-span-4 md:ml-6 lg:ml-12">
            <div className="flex flex-col leading-8">
              <div className="text-2xl tracking-wider">{detailCombo?.comboName}</div>
              <div className="flex justify-between items-center">
                <span className="text-xl tracking-wider text-yellow-700">
                  {detailCombo?.comboPrice}₫
                </span>
              </div>
            </div>
            <div className="my-4 md:my-6 text-gray-600">
              {detailCombo?.comboDescription}
            </div>
            {/* <div className="my-4 md:my-6">
              {+quantitiy === +detailCombo.pQuantity ? (
                <span className="text-xs text-red-500">Stock limited</span>
              ) : (
                ""
              )}
              <div
                className={`flex justify-between items-center px-4 py-2 border ${
                  +quantitiy === +detailCombo.pQuantity && "border-red-500"
                }`}
              >
                <div
                  className={`${
                    quantitiy === detailCombo.pQuantity && "text-red-500"
                  }`}
                >
                  Quantity
                </div>
              </div> */}
              {/* {detailCombo.pQuantity !== 0 ? (
                <Fragment>
                  {layoutData.inCart !== null &&
                  layoutData.inCart.includes(sProduct._id) === true ? (
                    <div
                      style={{ background: "#303031" }}
                      className={`px-4 py-2 text-white text-center cursor-not-allowed uppercase opacity-75`}
                    >
                      In cart
                    </div>
                  ) : (
                    <div
                      onClick={(e) =>
                        addToCart(
                          sProduct._id,
                          quantitiy,
                          sProduct.pPrice,
                          layoutDispatch,
                          setQuantitiy,
                          setAlertq,
                          fetchData,
                          totalCost
                        )
                      }
                      style={{ background: "#303031" }}
                      className={`px-4 py-2 text-white text-center cursor-pointer uppercase`}
                    >
                      Add to cart
                    </div>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {layoutData.inCart !== null &&
                  layoutData.inCart.includes(sProduct._id) === true ? (
                    <div
                      style={{ background: "#303031" }}
                      className={`px-4 py-2 text-white text-center cursor-not-allowed uppercase opacity-75`}
                    >
                      In cart
                    </div>
                  ) : (
                    <div
                      style={{ background: "#303031" }}
                      disabled={true}
                      className="px-4 py-2 text-white opacity-50 cursor-not-allowed text-center uppercase"
                    >
                      Out of stock
                    </div>
                  )}
                </Fragment>
              )} */}
              {/* Incart and out of stock button End */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* Product Details Section two */}
      {/* <ProductDetailsSectionTwo /> */}
    </Fragment>
  );
};

export default ComboDetailsSection;
