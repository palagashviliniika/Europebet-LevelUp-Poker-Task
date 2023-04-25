import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PopupHeader from './PopupHeader'
import Navigator from './Navigator'
import Container from './Container'
import Additional from './Additional'
import Rules from './Rules'
import Similar from './Similar'
import Play from './Play'

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1C1D1E",
    width: "55vw",
    height: "90%",
    // padding: "16px 43px",
    zIndex: 1000,
    overflow:"auto"
}

export default function Modal({children, open, onClose}) {
    const [page, setPage] = useState(1)

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-5' />
            <div style={MODAL_STYLES} className='rounded-xl'>

                <PopupHeader onClose={onClose}/>
                
                <div className='px-[2.3vw] py-[1.7vw]'>
                    <div>
                        <Navigator page={page} setPage={setPage}/>
                        <Container />
                    </div>

                    <Additional />
                    <Rules />
                    <Similar />
   
                </div>

                <Play />
            </div>
        </>,
        document.getElementById('portal')
    )
}
