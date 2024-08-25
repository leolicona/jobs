import propTypes from 'prop-types';
import { container } from "./tag.module.css"

function Tag ({ children, ...props }) {
  return (
    <em  {...props} className={ container }>
      {children}
    </em>
  );
}

Tag.propTypes = {
    children: propTypes.node.isRequired,
    maxWith: propTypes.string,
}

export default Tag;