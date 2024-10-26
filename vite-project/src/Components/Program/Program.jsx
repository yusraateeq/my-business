import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.avif'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpeg'
import icon_1 from '../../assets/icon-1.png'
import icon_2 from '../../assets/icon-2.png'
import icon_3 from '../../assets/icon-3.png'

const Program = () => {
    return (
        <div className='program' id='program'>
            <div className="program-one">
                <img src={program_1} alt="" height={270} />
                <div className="ctn">
                    <img src={icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>

            <div className="program-one">

                <img src={program_2} alt="" height={270} />
                <div className="ctn">
                    <img src={icon_2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>

            <div className="program-one">

                <img src={program_3} alt="" height={270} />
                <div className="ctn">
                    <img src={icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Program
