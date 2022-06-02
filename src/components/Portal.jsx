import {useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

export default function Portal({children, className, parent}) {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
    const classList = ['portal-container'];

    if (className) className.split(' ').forEach(item => classList.push(item));
    classList.forEach(item => el.classList.add(item));
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, parent, className]);

  return createPortal(children, el);
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  parent: PropTypes.any
};
