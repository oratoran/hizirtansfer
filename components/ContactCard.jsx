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
      <span className="block mt-6 font-medium text-white font-lora">
        {topLabel}
      </span>
      <span className="block font-medium text-white font-lora">
        {bottomLabel}
      </span>
    </div>
  ) : (
    <div className={`text-center text-yellow-500 ${className}`}>
      {icon}
      <span className="block mt-6 text-xl font-bold text-gray-800 font-lora">
        {label}
      </span>
      <span className="block mt-4 font-medium text-gray-800 font-lora">
        {topLabel}
      </span>
      <span className="block font-medium text-gray-800 font-lora">
        {bottomLabel}
      </span>
    </div>
  );
}

export default ContactCard;
