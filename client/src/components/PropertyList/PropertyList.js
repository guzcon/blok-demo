import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AutoSizer,
        List,
        CellMeasurer,
        CellMeasurerCache } from 'react-virtualized';
import PropertyItem from '../PropertyItem/PropertyItem';
import styles from './PropertyList.module.css';

class PropertyList extends Component {
  state = {
    cache: new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 500,
    }),
    itemSize: 360
  }

  componentDidMount() {
    this.updateItemSize();
    window.addEventListener('resize', this.updateItemSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateItemSize);
  }

  updateItemSize = () => {
    const windowWidth = window.innerWidth;
    let itemSize = 500;
    if ((windowWidth >= 768 && windowWidth < 992) || windowWidth > 1200) {
      itemSize = 360;
    } else if (windowWidth >= 992 && windowWidth < 1200){
      itemSize = 320;
    }

    console.log(itemSize);

    this.setState({itemSize});
  }

  render() {
    const {list} = this.props;
    const {cache, itemSize} = this.state;
    return (
      <div className={styles.list_container}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / itemSize) > 1 ? Math.floor(width / itemSize) : 1 ;
            const rowCount = Math.ceil(list.length / itemsPerRow);

            return <List
              rowCount={rowCount}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={
                ({ key, index, style, parent}) => {
                  const items = [];
                  const fromIndex = index * itemsPerRow;
                  const toIndex = Math.min(fromIndex + itemsPerRow, list.length);

                  for (let i = fromIndex; i < toIndex; i++) {
                    items.push(
                      <PropertyItem key={i} item={list[i]}/>
                    )
                  }

                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}>
                      <div style={style}>
                        <div className={styles.items_wrap}>
                          {items}
                        </div>
                      </div>
                    </CellMeasurer>
                  )
                }
              }
              width={width}
              height={height}
              overscanRowCount={3}
              className={styles.list}
            />
          }}
        </AutoSizer>
      </div>
    );
  }
}

PropertyList.propTypes = {
  list: PropTypes.array.isRequired
}

export default PropertyList;
