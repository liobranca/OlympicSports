import React from 'react'

import "./AddToCartButton.css"
import topArrow from "../../../assets/icons/a-top.svg";
import bottomArrow from "../../../assets/icons/a-bottom.svg";

import { Link } from "@chakra-ui/react";

function AddToCartButton2({addToCartHandler,item}) {

  return (
    <div className="product-aside">
            <div className="product-aside__wrap">
              <form id="product-form">
                <div className="product-aside__option-list">
                  <div className="product-aside__option">
                    <div className="product-aside__button">
                      <select required className="product-aside__select">
                        <option select="true" value>Select Color</option>
                        <option value="black" disabled>Black</option>
                        <option value="white">{item.color}</option>
                        <option value="black" disabled>White</option>
                      </select>
                    </div>
                    <div className="select-arrows">
                      <img src={topArrow} alt='' className="select-form-arrow-top"/>
                      <img src={bottomArrow} alt='' className="select-form-arrow-top"/>
                    </div>
                  </div>
                  <div className="product-aside__option">
                    <div className="product-aside__button">
                      <select required className="product-aside__select">
                      <option select="true" value>Select Size</option>
                        {item.size.map((size,i) => (
                          <option key={i} value={size}>SIZE {size}</option>
                        ))}
                      </select>
                    </div>
                    <div className="select-arrows">
                      <img src={topArrow} alt='' className="select-form-arrow-top"/>
                      <img src={bottomArrow} alt='' className="select-form-arrow-top"/>
                    </div>
                  </div>
                </div>
                <Link onClick={addToCartHandler}><span className='product-aside__action-submit'>Add To Cart</span></Link>
              </form>
            </div>
          </div>
  )
}

export default AddToCartButton2