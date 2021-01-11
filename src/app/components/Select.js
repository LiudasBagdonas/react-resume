function Select({ options = [], className=""}) {
    return (
      <select className={className}>
        {options.map((optionData) => (
          <option key={optionData.value} {...optionData} />
        ))}
      </select>
    );
  }
  
  export default Select;