import PropTypes from 'prop-types';

function ContactCard({
  label = '',
  topLabel,
  bottomLabel,
  icon,
  className = '',
  type,
}) {
  return type === 'footer' ? (
    <div className={`text-center text-yellow-400 ${className}`}>
      {icon}
      <span className="block mt-6 text-white font-medium font-lora">
        {topLabel}
      </span>
      <span className="block text-white font-medium font-lora">
        {bottomLabel}
      </span>
    </div>
  ) : (
    <div className={`text-center text-yellow-500 ${className}`}>
      {icon}
      <span className="block mt-6 text-gray-800 font-bold text-xl font-lora">
        {label}
      </span>
      <span className="block mt-4 text-gray-800 font-medium font-lora">
        {topLabel}
      </span>
      <span className="block text-gray-800 font-medium font-lora">
        {bottomLabel}
      </span>
    </div>
  );
}

ContactCard.propTypes = {
  label: PropTypes.string,
  topLabel: PropTypes.string.isRequired,
  bottomLabel: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
ContactCard.defaultProps = {
  className: '',
  label: '',
};

export default ContactCard;
