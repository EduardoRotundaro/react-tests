import PropTypes from 'prop-types';

function If ({condition, children}) {
    if(!!condition) return children;
    return null;
}

If.propTypes = {
    children: PropTypes.element.isRequired,
};

export default If;
