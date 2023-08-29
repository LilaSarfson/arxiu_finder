export default function HandleError (props){
    return(
        <>
            <p className={`${props.boleanVariable ? 'block' : 'hidden'} text-red-500 bg-white border border-4 rounded-md border-red-500 text-lg font-bold inset-0 uppercas static p-4`}>{props.error}</p>
        </>
    )
}