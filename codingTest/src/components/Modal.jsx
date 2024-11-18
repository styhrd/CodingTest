import React from 'react'

const Modal = ({ onClick, providers, addtoProv }) => {

    return (
        <div className='modalcont'>
            <div className='modalhead'>
                <div>
                    <p>Game Providers</p>
                    <i className="bi bi-x-lg"
                        onClick={onClick}
                    ></i>
                </div>
            </div>

            <div className='modalcontent'>
                {providers.map((provider, id) => {
                    return (
                        <>
                            <div onClick={() => addtoProv(provider)}>{provider}</div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Modal
