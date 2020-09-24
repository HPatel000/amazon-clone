import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='banner' />

        <div className='home__row'>
          <Product
            id='123123'
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt='book'
            rating={5}
          />
          <Product
            id='123456'
            title='Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5liter glass bowl'
            price={239.0}
            rating={4}
            image='data:image/jpeg;base64,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'
          />
        </div>
        <div className='home__row'>
          <Product
            id='934756'
            title='Samsung smart watch'
            price={199.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          />
          <Product
            id='194751'
            title='Amazon Echo | Smart spaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={4}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          />
          <Product
            id='345134'
            title='New Apple ipad pro - Silver (4th generation)'
            price={598.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='235874'
            title='Samsung Curved Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
            price={1094.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home;