import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AutoSizer,
        List,
        CellMeasurer,
        CellMeasurerCache } from 'react-virtualized';
import PropertyItem from '../../components/PropertyItem/PropertyItem';
import styles from './PropertyList.module.css';

class PropertyList extends Component {
  state = {
    // cache the row size for CellMeasurer
    cache: new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 500
    }),
    itemsPerRow: 1
  }

  componentDidMount() {
    this.setItemsPerRow();
    window.addEventListener('resize', this.setItemsPerRow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setItemsPerRow);
  }

  // set items per row depending on window width
  setItemsPerRow = () => {
    const windowWidth = window.innerWidth;
    let itemsPerRow = 1;
    if (windowWidth >= 768 && windowWidth < 992) {
      itemsPerRow = 2;
    } else if (windowWidth >= 992){
      itemsPerRow = 3;
    } else {
      itemsPerRow = 1;
    }
    this.setState({itemsPerRow});
  }

  render() {
    const {list} = this.props;
    const {cache, itemsPerRow} = this.state;
    return (
      <div className={styles.list_container}>
        <AutoSizer>
          {({ height, width }) => {
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
