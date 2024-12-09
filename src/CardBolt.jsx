import PropTypes from 'prop-types';

export function CardBolt({ children }) {
  return (
    <div className="w-full bg-gray-50 rounded-xl transition-all duration-200 
                    shadow-[8px_8px_8px_rgba(216,218,224,0.7),-6px_-6px_8px_rgba(255,255,255,1)]
                    border-[1.5px] border-gray-50 hover:bg-gray-100 hover:border-blue-500">
      <div className="p-4 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}

CardBolt.propTypes = {
  children: PropTypes.node.isRequired,
};