import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import _ from 'lodash';
import { Box } from '@bubbles-ui/components';
import { findDOMNode } from 'react-dom';
import { notify } from 'react-big-calendar/lib/utils/helpers';
import { dateCellSelection, getSlotAtX, pointInBox } from 'react-big-calendar/lib/utils/selection';
import Selection, { getBoundsForNode, isEvent } from 'react-big-calendar/lib/Selection';

class BackgroundCells extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selecting: false,
    };
  }

  componentDidMount() {
    this.props.selectable && this._selectable();
  }

  componentWillUnmount() {
    this._teardownSelectable();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();

    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
  }

  onClickDate(date) {
    const hooks = this.props.components?.hooks;
    if (!_.isNil(hooks)) {
      hooks.fireEvent('big-calendar:dayClick', date);
    }
  }

  backgroundEventClick(event, e) {
    e.stopPropagation();
    e.preventDefault();
    const hooks = this.props.components?.hooks;
    if (!_.isNil(hooks)) {
      hooks.fireEvent('big-calendar:backgroundEventClick', event);
    }
  }

  render() {
    let {
      range,
      getNow,
      getters,
      date: currentDate,
      components: { cx, dateCellWrapper: Wrapper },
      localizer,
      events,
      accessors,
      hideBgTitles,
    } = this.props;

    let { selecting, startIdx, endIdx } = this.state;
    let current = getNow();

    const getDaysBetweenDates = function (startDate, endDate) {
      let now = DateTime.fromJSDate(startDate);
      const dates = [];

      while (now <= DateTime.fromJSDate(endDate)) {
        dates.push(now.toFormat('YYYY/MM/DD'));
        now = now.plus({ days: 1 });
      }
      return dates;
    };

    const eventsByDay = {};

    _.forEach(events, (event) => {
      let end = accessors.end(event);
      let start = accessors.start(event);
      const days = getDaysBetweenDates(start, end);
      _.forEach(days, (day) => {
        if (!_.isArray(eventsByDay[day])) eventsByDay[day] = [];
        eventsByDay[day].push(event);
      });
    });

    return (
      <Box className="rbc-row-bg">
        {range.map((date, index) => {
          let selected = selecting && index >= startIdx && index <= endIdx;
          let { className, style } = getters.dayProp(date);

          if (!_.isObject(style)) {
            style = {};
          }
          style.position = 'relative';

          const eventsForDay = eventsByDay[DateTime.fromJSDate(date).toFormat('YYYY/MM/DD')];

          return (
            <Wrapper key={index} value={date} range={range}>
              <Box
                style={style}
                className={cx('rbc-day-bg', className, {
                  'rbc-selected-cell': selected,
                  'rbc-today': localizer.isSameDate(date, current),
                  'rbc-off-range-bg': currentDate && localizer.neq(currentDate, date, 'month'),
                })}
                onClick={() => this.onClickDate(date)}
              >
                {eventsForDay ? (
                  <Box
                    onClick={(e) => this.backgroundEventClick(eventsForDay[0], e)}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      padding: '4px',
                      backgroundColor: eventsForDay[0].backgroundColor,
                    }}
                  >
                    {!hideBgTitles ? eventsForDay[0].title : ''}
                  </Box>
                ) : null}
              </Box>
            </Wrapper>
          );
        })}
      </Box>
    );
  }

  _selectable() {
    let node = findDOMNode(this);
    let selector = (this._selector = new Selection(this.props.container, {
      longPressThreshold: this.props.longPressThreshold,
    }));

    let selectorClicksHandler = (point, actionType) => {
      if (!isEvent(findDOMNode(this), point)) {
        let rowBox = getBoundsForNode(node);
        let { range, rtl } = this.props;

        if (pointInBox(rowBox, point)) {
          let currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);

          this._selectSlot({
            startIdx: currentCell,
            endIdx: currentCell,
            action: actionType,
            box: point,
          });
        }
      }

      this._initial = {};
      this.setState({ selecting: false });
    };

    selector.on('selecting', (box) => {
      let { range, rtl } = this.props;

      let startIdx = -1;
      let endIdx = -1;

      if (!this.state.selecting) {
        notify(this.props.onSelectStart, [box]);
        this._initial = { x: box.x, y: box.y };
      }
      if (selector.isSelected(node)) {
        let nodeBox = getBoundsForNode(node);
        ({ startIdx, endIdx } = dateCellSelection(this._initial, nodeBox, box, range.length, rtl));
      }

      this.setState({
        selecting: true,
        startIdx,
        endIdx,
      });
    });

    selector.on('beforeSelect', (box) => {
      if (this.props.selectable !== 'ignoreEvents') return;

      return !isEvent(findDOMNode(this), box);
    });

    selector.on('click', (point) => selectorClicksHandler(point, 'click'));

    selector.on('doubleClick', (point) => selectorClicksHandler(point, 'doubleClick'));

    selector.on('select', (bounds) => {
      this._selectSlot({ ...this.state, action: 'select', bounds });
      this._initial = {};
      this.setState({ selecting: false });
      notify(this.props.onSelectEnd, [this.state]);
    });
  }

  _teardownSelectable() {
    if (!this._selector) return;
    this._selector.teardown();
    this._selector = null;
  }

  _selectSlot({ endIdx, startIdx, action, bounds, box }) {
    if (endIdx !== -1 && startIdx !== -1)
      this.props.onSelectSlot &&
        this.props.onSelectSlot({
          start: startIdx,
          end: endIdx,
          action,
          bounds,
          box,
          resourceId: this.props.resourceId,
        });
  }
}

BackgroundCells.propTypes = {
  date: PropTypes.instanceOf(Date),
  getNow: PropTypes.func.isRequired,

  getters: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,

  container: PropTypes.func,
  dayPropGetter: PropTypes.func,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onSelectSlot: PropTypes.func.isRequired,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,

  range: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  rtl: PropTypes.bool,
  type: PropTypes.string,
  resourceId: PropTypes.any,

  localizer: PropTypes.any,
};

export default BackgroundCells;
