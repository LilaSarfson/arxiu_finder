import localitation from '../../assets/localizacion.png'
import {handleMapLinkClick} from '../../utils/utils'
export default function Card (props){
    return(
        <div className=" grid grid-cols-10 items-center gap-2 border border-2 border-black text-center p-4 shadow-md">
            <div className='flex flex-row gap-2 items-end col-span-7'>
                <img onClick={handleMapLinkClick} src={localitation} className='w-1/12 cursor-pointer'/>
                <h3 className="text-xl ">{props.name}</h3>
            </div>
            <p className='col-span-1'>{props.distrito}</p>
            <p className='col-span-1'>{props.seccion}</p>
            <p className='col-span-1'>{props.numeroI} / {props.numeroF}</p>
        </div>
    )
}