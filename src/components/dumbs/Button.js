export default function ButtonUtils (props){
    return(
        <button onClick={props.clickFunction} className={`${props.grande ? 'bg-azul_logo w-1/6': 'w-1/12 border-black self-center border-2 text-2xl'} bebas_font dark:border-dark_white rounded-lg p-2 text-lg`}>{props.title}</button>
        )}