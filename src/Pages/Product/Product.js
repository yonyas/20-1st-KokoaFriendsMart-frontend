import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductOption from './components/ProductOption/ProductOption';
import ProductReview from './components/ProductReview/ProductReview';
import ProductQna from './components/ProductQna/ProductQna';
import Nav from '../Main/Components/Nav/Nav';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productDetailImages: [],
      productInformation: {},
      productReviewData: [],
      quantity: 1,
      moreView: false,
    };
  }

  componentDidMount() {
    fetch('/data/electronicImagesData.json')
      .then(res => res.json())
      .then(productPageData => {
        this.setState({
          productDetailImages: productPageData,
        });
      });

    // fetch('http://192.168.0.4:8000/products/440')
    //   .then(res => res.json())
    //   .then(productInfoData => {
    //     this.setState({
    //       productInformation: productInfoData.data.product,
    //     });
    //   });

    fetch('/data/productInfoData.json')
      .then(res => res.json())
      .then(productInfoData => {
        this.setState({
          productInformation: productInfoData.data.product,
        });
      });

    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(reviewData => {
        this.setState({
          productReviewData: reviewData,
        });
      });
  }

  plusQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + 1,
    });
  };

  minusQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  handleQuantityInput = e => {
    this.setState({
      quantity: e.target.value,
    });
  };

  toggleMoreView = () => {
    this.setState({ moreView: !this.state.moreView });
  };

  render() {
    const {
      productDetailImages,
      productInformation,
      productReviewData,
      quantity,
      moreView,
    } = this.state;
    return (
      <div className="product">
        <Nav />
        <section className="productContents">
          <div className="productDetail">
            <div className="productDetailOutbox">
              <div className="productDetailInnerbox">
                <div className="detailImagesOutbox">
                  <div className="detailImagesInnerbox">
                    <div className="productThumnail">
                      <img
                        className="productThumnailImg"
                        alt={productDetailImages.name}
                        src={productInformation.thumbnail_url}
                      />
                    </div>
                    <ProductDetail
                      productDetailImages={productDetailImages}
                      productInformation={productInformation}
                      moreView={moreView}
                      toggleMoreView={this.toggleMoreView}
                    />
                  </div>
                </div>
                <ProductOption
                  productInformation={productInformation}
                  quantity={quantity}
                  plusQuantity={this.plusQuantity}
                  minusQuantity={this.minusQuantity}
                  handleQuantityInput={this.handleQuantityInput}
                />
              </div>
            </div>
          </div>
          <div className="bottomOutbox">
            <div className="bottomReviewQna">
              <ProductReview productReviewData={productReviewData} />
              <ProductQna />
            </div>
            <aside className="nothing"></aside>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
