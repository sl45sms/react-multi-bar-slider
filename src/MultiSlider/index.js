import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import getProgressFromMousePosition from '../utils/getProgressFromMousePosition';
import progressEqual from '../utils/progressEqual';
import sortProgress from '../utils/sortProgress';
import Slider from './Slider';
import SlidableZone from './SlidableZone';

export default class MultiSlider extends Component {
  static displayName = 'MultiSlider';

  static propTypes = { 
    max: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slidableZoneSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    backgroundColor: PropTypes.string,
    equalColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onSlide: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragStop: PropTypes.func,
    roundedCorners: PropTypes.bool,
    reversed: PropTypes.bool,
    readOnly: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    max:100,
    width: '100%',
    height: 14,
    slidableZoneSize: 7,
    backgroundColor: '#EEEEEE',
    style: {},
    roundedCorners: false,
    reversed: false,
    readOnly: false
  };

  state = { mouseDown: false };

  componentDidMount = () => {
    if (!this.props.readOnly && !this.props.onSlide) {
      // eslint-disable-next-line
      console.error(
        '[MultiSlider] No onSlide callback provided, but slider is not read-only!'
      );
    }
  };

  handleSlide = (e) => {
    const { onSlide, reversed, readOnly, max } = this.props;
    if (readOnly) return;

    const newProgress = getProgressFromMousePosition(e, reversed, max);
    if (newProgress === null) return;
    onSlide(newProgress);
  };

  handleMouseMoveActivate = (e) => {
    const {max} = this.props;

    const isLeftButton = !e.button || e.button === 0;
    if (!isLeftButton) return;

    if (this.state.mouseDown) return;
    this.setState({ mouseDown: true });

    const { onDragStart, reversed } = this.props;
    if (!onDragStart) return;

    const newProgress = getProgressFromMousePosition(e, reversed, max);
    if (newProgress === null) return;
    onDragStart(newProgress);
  };

  handleMouseMoveDeactivate = (e) => {
    const {max} = this.props;
    
    if (!this.state.mouseDown) return;
    this.setState({ mouseDown: false });

    this.handleSlide(e);

    const { onDragStop, reversed } = this.props;
    if (!onDragStop) return;

    const newProgress = getProgressFromMousePosition(e, reversed, max);
    if (newProgress === null) return;
    onDragStop(newProgress);
  };

  handleMouseMove = (e) => {
    if (!this.state.mouseDown) return;
    this.handleSlide(e);
  };

  render = () => {
    const {
      max,
      width,
      height,
      slidableZoneSize,
      backgroundColor,
      equalColor,
      style,
      onSlide, // eslint-disable-line
      onDragStart, // eslint-disable-line
      onDragStop, // eslint-disable-line
      roundedCorners,
      reversed,
      readOnly,
      children,
      ...props
    } = this.props;
    const childrenArr = Children.toArray(children);
    const allProgressEqual = progressEqual(childrenArr);
    const sortedProgress = sortProgress(childrenArr);

    return (
      <Slider
	max={max}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        style={style}
        onMouseMoveActivate={this.handleMouseMoveActivate}
        onMouseMoveDeactivate={this.handleMouseMoveDeactivate}
        onMouseMove={this.handleMouseMove}
        roundedCorners={roundedCorners}
        readOnly={readOnly}
        {...props}
      >
        {childrenArr.map(child =>
          React.cloneElement(child, {
            height,
            progressEqual: allProgressEqual,
            equalColor,
            roundedCorners,
            reversed,
            mouseDown: this.state.mouseDown,
            zIndex: sortedProgress.indexOf(child)
          })
        )}
        <SlidableZone size={slidableZoneSize} zIndex={childrenArr.length} />
      </Slider>
    );
  };
}
