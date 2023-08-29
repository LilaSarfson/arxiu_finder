export default function ButtonUtils (props){
    return(
        <button onClick={props.clickFunction} className={`${props.grande ? '': 'w-1/12 self-center'} border-2 bebas_font border-black dark:border-dark_white p-2 rounded-lg`}>{props.title}</button>
        )}