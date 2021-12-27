import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { keysIn } from 'lodash';
import { Box } from '@mantine/core';
import { HeroBgStyles } from './HeroBg.styles';
import { lg, xMD, xSM, ySM, yXS, xLG } from './sizes';

const SIZES = { lg, 'x-md': xMD, 'x-sm': xSM, 'y-sm': ySM, 'y-xs': yXS, 'x-lg': xLG };

export const HERO_BG_SIZES = keysIn(SIZES);
export const HERO_BG_COLORS = ['inherit', 'primary', 'secondary'];
export const HERO_BG_DEFAULT_PROPS = {
  color: HERO_BG_COLORS[0],
  size: HERO_BG_SIZES[0],
  animate: true,
  decay: 1,
  speed: 500,
};
export const HERO_BG_PROP_TYPES = {
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(HERO_BG_COLORS)]),
  size: PropTypes.oneOf(HERO_BG_SIZES),
  decay: PropTypes.number,
  animate: PropTypes.bool,
  speed: PropTypes.number,
  solid: PropTypes.bool,
};

const HeroBg = ({
  className,
  style,
  color: colorProp,
  size: sizeProp,
  animate,
  decay,
  speed,
  solid,
}) => {
  const color = HERO_BG_COLORS.includes(colorProp) ? colorProp : HERO_BG_DEFAULT_PROPS.color;
  const size = HERO_BG_SIZES.includes(sizeProp) ? sizeProp : HERO_BG_DEFAULT_PROPS.size;
  const [currentType, setCurrentType] = useState(null);
  const animationRef = useRef(0);

  useEffect(() => initAnimation(), [style, sizeProp, colorProp, className, animate]);

  const { classes, cx } = HeroBgStyles({ color, size });

  const getSVGNodes = (node) => {
    let nodes = [];
    if (node) {
      if (node.type === 'svg') {
        return getSVGNodes(node.props.children);
      }
      nodes = React.Children.toArray(node);
    }
    return nodes;
  };

  const doAnimation = (firstTime) => {
    const sizeNodeFunc = SIZES[size];
    const nodes = getSVGNodes(currentType || sizeNodeFunc(cx(classes.root, className), style));
    let yValues = [];
    nodes.forEach(
      (node) =>
        (node.props.fill === 'currentColor' || node.props.stroke === 'currentColor') &&
        yValues.push(node.props.y || '0')
    );
    yValues = [...new Set(yValues)];
    // console.log(yValues);

    const yCount = yValues.length;
    const xCount = Math.floor(nodes.length / yCount);

    // console.log('yCount:', yCount);
    // console.log('xCount:', xCount);
    // console.log('nodes:', nodes.length);

    const animStyles = [];

    for (let y = -yCount / 2; y < yCount / 2; y++) {
      const _y = y / (yCount / 2);
      for (let x = 0; x < xCount; x++) {
        animStyles.push({
          opacity: solid ? 1 : (_y ** 2 / decay) * Math.random(),
          transition: `opacity ${speed}ms`,
        });
      }
    }

    animStyles.reverse();

    const currentNodes = [];
    nodes.forEach((node) => currentNodes.push(node));

    // Order by Y position. In case of path, send it to front (y = 1000)
    currentNodes.sort(
      (a, b) =>
        parseFloat(a.props.y || a.type === 'path' ? '1000' : '0') -
        parseFloat(b.props.y || b.type === 'path' ? '1000' : '0')
    );

    for (let i = 0, l = currentNodes.length; i < l; i++) {
      const currentNode = currentNodes[i];
      if (
        currentNode.props.fill === 'currentColor' ||
        currentNode.props.stroke === 'currentColor'
      ) {
        currentNodes[i] = React.cloneElement(currentNode, {
          style:
            currentNode.type === 'path'
              ? { opacity: solid ? 1 : Math.random() / 3, transition: 'opacity 3s' }
              : animStyles[i],
        });
      } else {
        currentNodes[i] = React.cloneElement(currentNode);
      }
    }

    if (firstTime || (!firstTime && animationRef.current > 0)) {
      setCurrentType(
        React.cloneElement(sizeNodeFunc(cx(classes.root, className), style), {
          children: currentNodes,
        })
      );
    }
  };

  const initAnimation = () => {
    if (animate) {
      clearInterval(animationRef.current);
      animationRef.current = setInterval(() => doAnimation(), speed * 2);
    }
    doAnimation(true);
  };

  useEffect(() => {
    initAnimation();
    return () => clearInterval(animationRef.current);
  }, []);

  return currentType;
};

HeroBg.defaultProps = HERO_BG_DEFAULT_PROPS;
HeroBg.propTypes = HERO_BG_PROP_TYPES;

export { HeroBg };
