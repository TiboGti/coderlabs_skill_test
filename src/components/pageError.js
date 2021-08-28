import React from 'react';

import './styles/pageError.css';

function pageError(props) {
  return <div className="PageError">❌{props.error.message}😱</div>;
}

export default pageError;