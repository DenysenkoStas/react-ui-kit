import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button(
  {
    children,
    className = '',
    color = 'primary',
    disabled = false,
    endIcon,
    fullWidth = false,
    loading = false,
    onClick,
    size = 'medium',
    startIcon,
    type = 'button',
    variant = 'contained',
    ...props
  }
) {
  const rootClasses = ['button'];
  if (className) rootClasses.push(className);
  if (size !== 'medium') rootClasses.push(`button--${size}`);
  if (color !== 'primary') rootClasses.push(`button--${color}`);
  if (fullWidth) rootClasses.push('button--full-width');
  if (variant !== 'contained') rootClasses.push(`button--${variant}`);
  if (loading) disabled = true;

  function createRipple(event) {
    const button = event.currentTarget;
    const rippleWrap = button.querySelector('.button-ripple');
    const rippleClass = 'button-ripple__item';

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add(rippleClass);

    const ripple = button.getElementsByClassName(rippleClass)[0];
    if (ripple) ripple.remove();

    rippleWrap.appendChild(circle);
    onClick && onClick(event);
  }

  return (
    <button
      className={rootClasses.join(' ')}
      type={type}
      disabled={disabled}
      onClick={createRipple}
      {...props}
    >
      {loading ? <span className='button__loader' /> : (
        <>
          {startIcon && <span className='button__icon button__icon--start'>{startIcon}</span>}
          <span className='button__label'>{children}</span>
          {endIcon && <span className='button__icon button__icon--end'>{endIcon}</span>}
        </>
      )}
      <span className='button-ripple' />
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  disabled: PropTypes.bool,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text'])
};
