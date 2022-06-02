import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import {ReactComponent as CloseIcon} from './icons/close.svg';
import './Modal.scss';

export default function Modal({children, className = '', fullScreen = false, maxWidth, onClose, open = false}) {
  const [active, setActive] = useState(false);
  const parent = document.getElementById('root');
  const backdrop = useRef(null);
  const stopPropagation = event => event.stopPropagation();

  const rootClasses = ['modal'];
  if (className) rootClasses.push(className);
  if (active && open) rootClasses.push('modal--active');
  if (fullScreen) rootClasses.push('modal--full');

  useEffect(() => {
    const {current} = backdrop;
    const transitionEnd = () => setActive(open);
    const keyHandler = ({key}) => key === 'Escape' && onClose();

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
      }, 10);
    }

    return () => {
      if (current) current.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, onClose]);

  return (open || active) && (
    <Portal parent={parent}>
      <div className={rootClasses.join(' ')} ref={backdrop} onClick={onClose}>
        <div className='modal__dialog' style={{maxWidth}} onClick={stopPropagation}>
          <div className='modal__content'>
            {children}
          </div>
          <button className='modal__close' type='button' aria-label='Close modal' onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
  maxWidth: PropTypes.number,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
