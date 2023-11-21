import P from 'prop-types';

export const Button = ({ children, onButtonClicked}) => {
  return (
    <button style={{fontSize: '60px'}} onClick={onButtonClicked}>{children}</button>
  )
}

Button.propTypes = {
    children: P.node.isRequired,
    onButtonClicked: P.func.isRequired
}