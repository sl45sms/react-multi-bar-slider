import React from 'react';
import PropTypes from 'prop-types';
import processStyle from '../utils/processStyle';
import StyledSlider from './StyledSlider';

const Slider = ({
  min,
  max,
  width,
  height,
  backgroundColor,
  style,
  onMouseMoveActivate,
  onMouseMoveDeactivate,
  onMouseMove,
  roundedCorners,
  readOnly,
  children,
  ...props
}) => (
  <StyledSlider
    min={min}
    max={max}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    roundedCorners={roundedCorners}
    readOnly={readOnly}
    css={processStyle(style, {
      width,
      height,
      backgroundColor,
      roundedCorners,
      readOnly
    })}
    onMouseDown={onMouseMoveActivate}
    onMouseUp={onMouseMoveDeactivate}
    onMouseLeave={onMouseMoveDeactivate}
    onMouseMove={onMouseMove}
    onTouchStart={onMouseMoveActivate}
    onTouchEnd={onMouseMoveDeactivate}
    onTouchCancel={onMouseMoveDeactivate}
    onTouchMove={onMouseMove}
    {...props}
  >
    {children}
  </StyledSlider>
);

Slider.displayName = 'Slider';

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  onMouseMoveActivate: PropTypes.func.isRequired,
  onMouseMoveDeactivate: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  roundedCorners: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Slider;
