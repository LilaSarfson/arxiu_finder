import logo from '../../assets/logo.png'
import DarkModeToggle from './DarkModeToggle'
export default function HeaderPage(props){
    return(
        <div className='flex flex-row w-full items-center gap-4 justify-start ml-6 h-4'>
            <img className='w-10' src={logo}></img>
            <h1 className="text-2xl">Arxiu search</h1>
            <DarkModeToggle/>
        </div>
    )
}