import {useState} from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const TabItem = ({children, index, label, ...props}) => (
  <div id={`tab-item-${index}`} className='tabs__item' aria-label={label} {...props}>
    {children}
  </div>
);

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired
};

export const Tabs = ({children, className = '', defaultIndex = 0, onTabClick}) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);
  const changeTab = (newIndex) => () => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  const items = children.filter((item) => item?.type?.name === 'TabItem');

  return (
    <div className={`tabs${className && ` ${className}`}`}>
      <div className='tabs__menu'>
        {items.map(({props: {index, label, disabled}}) => (
          <button
            key={index}
            className={`tabs__btn${bindIndex === index ? ' tabs__btn--active' : ''}`}
            type='button'
            role='tab'
            disabled={disabled}
            onClick={changeTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='tabs__panel'>
        {items.map(({props}) => bindIndex === props.index ? <TabItem key={props.index} {...props} /> : null)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onTabClick: PropTypes.func
};
