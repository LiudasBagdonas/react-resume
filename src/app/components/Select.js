function Select({ options = [], className="", setLang }) {
  
  return (
      <select className={className} onChange={(event) =>{setLang(event.target.value)}}>
        {options.map((optionData) => (
          <option key={optionData.value} {...optionData} />
        ))}
      </select>
    );
  }
  
  export default Select;