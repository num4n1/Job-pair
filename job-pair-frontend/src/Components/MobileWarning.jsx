import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import siren from '../Assets/siren-icon.png';

const MobileWarning = ({ pageName }) => {

  return (
    (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={siren} alt="Warning" style={{ maxWidth: '208px' }} />
        <h2>{pageName}</h2> {/* Use the pageName prop */}
        <p>
          The {pageName} page is not supported on mobile devices!!
        </p>
      </div>
    )
  );
};

// Define propTypes for the component
MobileWarning.propTypes = {
  pageName: PropTypes.string.isRequired // Specify that pageName is a required string prop
};

export default MobileWarning;
