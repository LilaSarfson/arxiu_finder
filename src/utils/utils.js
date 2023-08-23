export function FilterBy(
    originalData,
    parameter,
    elemento,
    setSomething,
    setsharedData
  ) {
    const datosFiltrados = originalData.filter((e) => e[elemento] === parameter);
    setSomething(datosFiltrados);
    setsharedData(true)
  }
  
  export function FilterByName(originalData, parameter, setSomething, setsharedData) {
    const datosFiltrados = originalData.filter((item) =>
      item.name.toLowerCase().includes(parameter.toLowerCase())
    );
    setSomething(datosFiltrados);
    setsharedData(true);
  }
  
  export function handleMapLinkClick (street){
    const encodedStreetName = encodeURIComponent(street);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedStreetName}`;
    window.open(mapUrl, '_blank');
  };