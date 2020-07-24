import React from 'react';
import Header from '../components/shared/Header';

const HomePage = () => {
    return (
      <>
        <Header>
          <h4 style={{ textAlign: 'center', color: 'silver', paddingTop: '40px', width: '80%', margin: '0 auto', maxWidth: '900px', display: 'block' }}>
            Welcome to "MY MOVIES"<br />
            the online portal where you can watch all the latest movies and timeless classics<br />
            go to Catalog to make your selection or find help in our support page
          </h4>
        </Header>  
        <div style={{ textAlign: 'center', color: 'silver', paddingTop: '40px', width: '80%', margin: '0 auto', maxWidth: '900px' }}>
          <br />
          <p>
            We and our partners store and/or access information on a device, such as cookies and process personal data, 
            such as unique identifiers and standard information sent by a device for personalised ads and content, 
            ad and content measurement, and audience insights, as well as to develop and improve products.
          </p>
          <br />
          <p>
            With your permission we and our partners may use precise geolocation data and identification through device scanning. 
            You may click to consent to our and our partners’ processing as described above. 
            Alternatively you may click to refuse to consent or access more detailed information and change your preferences 
            before consenting. Please note that some processing of your personal data may not require your consent, 
            but you have a right to object to such processing. Your preferences will apply to this website only.
          </p>
        </div>
      </>
    )
  
}

export default HomePage;
