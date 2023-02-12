import React, { useState } from 'react';
import Common from '../components/Common/Common';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Shop.scss';
import products from '../assets/data/products';
import ProductsList from '../components/Product/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const fillterValue = e.target.value;
    if (fillterValue === 'sofa') {
      const fillterProduct = products.filter(
        (item) => item.category === 'sofa'
      );
      setProductsData(fillterProduct);
    }
    if (fillterValue === 'mobile') {
      const fillterProduct = products.filter(
        (item) => item.category === 'mobile'
      );
      setProductsData(fillterProduct);
    }
    if (fillterValue === 'chair') {
      const fillterProduct = products.filter(
        (item) => item.category === 'chair'
      );
      setProductsData(fillterProduct);
    }
    if (fillterValue === 'watch') {
      const fillterProduct = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(fillterProduct);
    }
    if (fillterValue === 'wireless') {
      const fillterProduct = products.filter(
        (item) => item.category === 'wireless'
      );
      setProductsData(fillterProduct);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <Common title="Products" />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select name="" id="" onChange={handleFilter}>
                  <option value="">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select name="" id="">
                  <option value="">Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData && productsData.length > 0 ? (
              <ProductsList data={productsData} />
            ) : (
              <h1 className="text-center">No products are found</h1>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
