const React = require('react');
const GlobalStyle = require('./src/views/services/global-style').default;

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
