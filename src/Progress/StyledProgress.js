import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import transition from '../utils/transition';
import getHalf from '../utils/getHalf';

const StyledProgress = styled('div')({
  position: 'absolute',
  top: 0,
}, ({
  max,
  color,
  progress,
  height,
  equal,
  equalColor,
  roundedCorners,
  reversed,
  noTransition,
  zIndex,
  css
}) => ({
  left: reversed ? 'auto' : 0,
  right: reversed ? 0 : 'auto',
  width: `${100-(((max-progress)/max)*100) || 0}%`,
  height,
  backgroundColor: equal && equalColor ? equalColor : color,
  borderRadius: roundedCorners ? getHalf(height) : 0,
  zIndex,
  transition: noTransition ? 'none' : transition,
  ...css
}));

StyledProgress.propTypes = {
  max: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  equal: PropTypes.bool.isRequired,
  equalColor: PropTypes.string,
  roundedCorners: PropTypes.bool.isRequired,
  reversed: PropTypes.bool.isRequired,
  noTransition: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,
  css: PropTypes.object
};

StyledProgress.defaultProps = {
  equal: false,
  css: null
};

export default StyledProgress;
