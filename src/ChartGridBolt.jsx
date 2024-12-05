import PropTypes from 'prop-types';

export function ChartGridBolt({ children }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {children}
    </div>
  );
}

ChartGridBolt.propTypes = {
  children: PropTypes.node.isRequired,
};