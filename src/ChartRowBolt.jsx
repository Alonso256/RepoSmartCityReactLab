import PropTypes from 'prop-types';

export function ChartRowBolt({ children, columns }) {
  const gridCols = columns === 2 
    ? 'grid-cols-1 md:grid-cols-2' 
    : 'grid-cols-1 md:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {children}
    </div>
  );
}

ChartRowBolt.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf([2, 3]).isRequired,
};