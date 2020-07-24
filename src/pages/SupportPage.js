import React from 'react';
import Header from '../components/shared/Header';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'; 
const stylesObj = { textAlign: 'center', color: 'silver', paddingTop: '40px', width: '80%', margin: '0 auto', maxWidth: '900px' };

const SupportPage = () => {
    return (
      <>
        <Header>
          <h4 style={stylesObj}>
            Welcome to "MY MOVIES" Support
          </h4>
        </Header>
        <div style={stylesObj}>
          <h4>
            Regularly asked questions:
          </h4>
          <br />
          Question 1
          <p>
           { loremIpsum }
          </p>
          <br />
          Question 2
          <p>
            { loremIpsum }
          </p>
          <br />
          Question 3
          <p>
            { loremIpsum }
          </p>
        </div>
      </>
    )
  
}

export default SupportPage;
