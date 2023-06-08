import React from 'react';

const Banner = React.forwardRef((props, ref) => {
  return (
    <div className="banner-container" ref={ref}>
      <div className="banner">
        <div className="banner-item">
          <img src="https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg?w=996&t=st=1686128904~exp=1686129504~hmac=2c5081ac580ad356eb57473f6400a4b5fedf50a3d348674394d8b3e2005e696a" alt="Fashion" />
          <p className="category-title">Fashion</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/futuristic-cyber-monday-banner-template_23-2149117341.jpg?w=996&t=st=1686128965~exp=1686129565~hmac=4ac220832150164fb26cbfaabfffd0ae9b4c687286567dd8571f92e486a9d88f" alt="Devices" />
          <p className="category-title">Devices</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1568.jpg?w=996&t=st=1686129011~exp=1686129611~hmac=9a00a9836dbbcd71c2533083ae94fddf255f2fa4efbe2fff7c3a3194e022a71b" alt="Electronics" />
          <p className="category-title">Electronics</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/food-menu-restaurant-social-media-cover-template_120329-1346.jpg?w=996&t=st=1686129209~exp=1686129809~hmac=5eca6f22cfaf30a69852211bc00a87be022fcaedab973a648d8a6dab05c39106" alt="Home & Kitchen" />
          <p className="category-title">Home & Kitchen</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/banner-bookstore-ad-template_23-2148680419.jpg?w=996&t=st=1686129615~exp=1686130215~hmac=cb585a523e8daa409753561e1882da5d2d6fdb130782b3e86df9e22bb2edf9d4" alt="Books" />
          <p className="category-title">Books</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-vector/social-media-cover-template-women-s-beauty-care_23-2150503763.jpg?w=996&t=st=1686136515~exp=1686137115~hmac=afe8f2da81aaa9ce66677920c50c4131dfafae81e2462bb92b961db09c6ae267" alt="Beauty & Personal" />
          <p className="category-title">Beauty & Personal</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/online-shopping-banner-design_23-2148539003.jpg?w=996&t=st=1686136591~exp=1686137191~hmac=5cdecafb509cab6ab62bccd3212a0d1b7031c94a73ba30d36f2483a661bfcc3e" alt="Sports & Fitness" />
          <p className="category-title">Sports & Fitness</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-vector/banner-template-with-boho-furniture-concept-design-advertise-marketing-watercolor-illustration_83728-5690.jpg?w=826&t=st=1686136661~exp=1686137261~hmac=4a4f5046029e992fe54b67dc1da9e1a1c8157f9560cd949bfce8b6d9c3924794" alt="Home Decor" />
          <p className="category-title">Home Decor</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-psd/toy-store-concept-banner-template_23-2148725457.jpg?w=996&t=st=1686136768~exp=1686137368~hmac=b0d3e17d8d11610a26bd5a54862315add58cbfdec4560f003a11d169f971c499" alt="Toys & Games" />
          <p className="category-title">Toys & Games</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/premium-vector/rent-car-facebook-cover_630783-51.jpg?w=996" alt="Automotive" />
          <p className="category-title">Automotive</p>
        </div>
        <div className="banner-item">
          <img src="https://img.freepik.com/free-vector/flat-design-pet-sitting-facebook-cover_23-2149648220.jpg?w=996&t=st=1686136961~exp=1686137561~hmac=7860682276e71f632cd83cebda35651a5796ce39e6124e2228a78eda0fd5130a" alt="Pet Supplies" />
          <p className="category-title">Pet Supplies</p>
        </div>
      </div>
    </div>
  );
});

export default Banner;
