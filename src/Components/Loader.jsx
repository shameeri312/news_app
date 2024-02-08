import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className="border-2 w-12 h-12 flex items-center justify-center rounded-full">
                <div className="border-t-6 border-blue-500 border-solid
                   animate-spin duration-1000 infinite linear flex items-center justify-center
                   relative rounded-full backface-hidden">
                    <div className="bg-white w-10 h-10 rounded-full absolute">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader