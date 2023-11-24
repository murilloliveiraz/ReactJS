import P from 'prop-types';

export const Button = ({ children, onButtonClicked, disabled}) => {
  return (
    <button disabled={disabled} style={{fontSize: '60px'}} onClick={onButtonClicked}>{children}</button>
  )
}

Button.propTypes = {
    children: P.node.isRequired,
    onButtonClicked: P.func.isRequired,
    disabled: P.bool,
}