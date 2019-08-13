import getSliderElement from './getSliderElement';
import limitProgress from './limitProgress';

const getProgressFromMousePosition = (e, reversed,min=0,max=100) => {
  const sliderElement = getSliderElement(e);
  const boundingRect = sliderElement.getBoundingClientRect();
  const xOffset = getXOffset(e);

  if (typeof xOffset !== 'number') {
    return null;
  }

  const eventOffsetFromLeftWrapperBoundary = xOffset - boundingRect.left;
  const progressWithinWrapperBoundaries =
    eventOffsetFromLeftWrapperBoundary / boundingRect.width;
  const progressPercentage = Math.round(progressWithinWrapperBoundaries * max)+min;
   	

  if (reversed) {
    return limitProgress(max - progressPercentage,min);
  }

  return limitProgress(progressPercentage,max);
};

const getXOffset = e => {
  const firstTouch = e.touches && e.touches[0];

  if (typeof e.pageX === 'number') {
    return e.pageX;
  }

  return firstTouch && firstTouch.clientX;
};

export default getProgressFromMousePosition;
