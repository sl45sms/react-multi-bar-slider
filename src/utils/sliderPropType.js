import PropTypes from 'prop-types';

const sliderPropType = PropTypes.shape({
  color: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  dot: PropTypes.oneOfType([
    PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
      icon: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    }),
    PropTypes.bool
  ])
}).isRequired;

export default sliderPropType;