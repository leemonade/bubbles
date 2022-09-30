import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { keysIn, max } from 'lodash';
import { colord } from 'colord';
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
  accentColor: '#FEFF8C',
};
export const HERO_BG_PROP_TYPES = {
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(HERO_BG_COLORS)]),
  size: PropTypes.oneOf(HERO_BG_SIZES),
  decay: PropTypes.number,
  animate: PropTypes.bool,
  speed: PropTypes.number,
  solid: PropTypes.bool,
  accentColor: PropTypes.string,
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
  accentColor: accentColorProp,
}) => {
  const color = HERO_BG_COLORS.includes(colorProp) ? colorProp : HERO_BG_DEFAULT_PROPS.color;
  const size = HERO_BG_SIZES.includes(sizeProp) ? sizeProp : HERO_BG_DEFAULT_PROPS.size;
  const [currentType, setCurrentType] = useState(null);
  const animationRef = useRef(0);

  const accentColor = useMemo(() => {
    if (accentColorProp === HERO_BG_DEFAULT_PROPS.accentColor) {
      return accentColorProp;
    }

    const color = colord(accentColorProp);
    const brightness = color.brightness();
    const newColor = color.alpha(Math.max(1 - (0.95 - brightness) * 2.5, 0.2)).toRgbString();
    return newColor;
  }, [accentColorProp]);

  useEffect(() => console.log('Bubbles >> HeroBg >> accentColor:', accentColor), [accentColor]);

  useEffect(() => initAnimation(), [style, sizeProp, colorProp, className, animate, accentColor]);

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
    const nodeElement = sizeNodeFunc(cx(classes.root, className), style);
    const nodes = getSVGNodes(currentType || nodeElement);
    let yValues = [];
    nodes.forEach(
      (node) =>
        (node.props.fill === 'currentColor' || node.props.stroke === 'currentColor') &&
        yValues.push(node.props.y || '0')
    );
    yValues = [...new Set(yValues)];

    const yCount = yValues.length;
    const xCount = Math.floor(nodes.length / yCount);

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
      } else if (
        currentNode.props.fill === 'accentColor' ||
        currentNode.props.stroke === 'accentColor'
      ) {
        const nodeProps = {};
        if (currentNode.props.fill === 'accentColor') {
          nodeProps.fill = accentColor;
        }

        if (currentNode.props.stroke === 'accentColor') {
          nodeProps.stroke = accentColor;
        }

        currentNodes[i] = React.cloneElement(currentNode, nodeProps);
      } else {
        currentNodes[i] = React.cloneElement(currentNode);
      }
    }

    if (firstTime || (!firstTime && animationRef.current > 0)) {
      setCurrentType(React.cloneElement(nodeElement, { children: currentNodes }));
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
