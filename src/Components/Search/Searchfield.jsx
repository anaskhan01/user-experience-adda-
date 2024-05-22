import './style.css'
import { IoCloseSharp } from "react-icons/io5";

const Searchfield = ({ show, onClose }) => {
    return (
        <>
        <section style={{ display: show ? 'block' : 'none' }}>
         <div className="container">
         <div className="searchflex">
                <input className='input-txt' type="text" placeholder='Type here to search...' />
                <IoCloseSharp size={24} color='#4A4752' onClick={onClose} className='closebtn'/> 
            </div>
         </div>
            </section>
        </>
    )
}

export default Searchfield
