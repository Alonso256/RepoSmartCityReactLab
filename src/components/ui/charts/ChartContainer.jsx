import PropTypes from 'prop-types';

export function ChartContainer({ title, children }) {
  return (
    <div className="w-full h-[300px]">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

ChartContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};