export default function ButtonUtils (props){
    return(
        <button onClick={props.clickFunction} className={`${props.grande ? 'bg-rojito_clarito p-4 w-1/6': 'w-1/12 self-center'} border-2 bebas_font border-black dark:border-dark_white rounded-lg p-2 text-lg`}>{props.title}</button>
        )}