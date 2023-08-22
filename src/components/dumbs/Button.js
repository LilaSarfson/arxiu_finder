export default function ButtonUtils (props){
    return(
        <button onClick={props.clickFunction} className={`${props.grande ? '': 'w-1/12 self-center'} border-2 border-black p-2 rounded-lg`}>{props.title}</button>
        )}