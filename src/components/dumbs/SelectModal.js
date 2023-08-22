export default function SelectModal(props) {
  return (
    <>
  <div class="flex items-center border border-2 border-black p-4 rounded-lg t-bold ">
  <select
    onChange={(e) => props.filtro (e, props.header, props.setElemento)}
    id="lang"
    value={props.value}
  class="flex-grow bg-transparent focus:outline-none rounded-none ">
    <option disabled selected>{props.header}</option>
    {props.seleccionador.map((y, index)=> {return(
        <option key={index} value={y}>{y}</option>
    )})}
  </select>

</div>
    </>
  );
}
