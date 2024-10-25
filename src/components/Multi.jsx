import React, { useState } from 'react'
import { MdBlock } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import './Multi.css'

function Multi() {
    const [star1, setstar1] = useState("");
    const [star2, setstar2] = useState("");
    const [star3, setstar3] = useState("");
    const [star4, setstar4] = useState("");
    const [star5, setstar5] = useState("");
    const [star6, setstar6] = useState("");
    const [star7, setstar7] = useState("");
    const [data, setdata] = useState({})
    const [totalobj, settotalobj] = useState({})
    let handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setdata({ ...data, [name]: value })
        // console.log(name,value);
    }
    let handlesubmit = (e) => {
        e.preventDefault()
        let newwobj = { ...data, "star1": star1, "star2": star2, "star3": star3, "star4": star4, "star5": star5, "star6": star6, "star7": star7 }
        // console.log(data);
        settotalobj(newwobj)

    }
    console.log(totalobj.star);

    return (
        <>
            <div>
                <div>
                    <form action="" onSubmit={(e) => { handlesubmit(e) }}>
                        <h3>Demo + PI(10)</h3>
                        <div style={{ paddingLeft: "50px" }}>
                            {/* ======================================= 1 Teaching */}
                            <div className='info-sec'>
                                <h3>Teaching/ Explanation Skills [Psychometric Judging] </h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>
                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar1(i) }} style={star1 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback1" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                            {/* ============================================= 2 Communication Skills */}
                            <div className='info-sec'>
                                <h3>Communication Skills</h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>

                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar2(i) }} style={star2 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback2" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>

                            {/* =================== 3 Learning */}
                            <div className='info-sec'>
                                <h3>Learning ability and adaptability</h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>

                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar3(i) }} style={star3 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback3" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                            {/* ==================== 4 Problem solving= */}
                            <div className='info-sec'>
                                <h3>Problem Solving Skills/Conflict Resolutiin</h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>

                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar4(i) }} style={star4 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback4" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                            {/* ==================== 5 How is the body language= */}
                            <div className='info-sec'>
                                <h3>How is the Body Language (Hand Gestures,Seating Position) of the Condidate in lecture? </h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>

                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar5(i) }} style={star5 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback5" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                            {/* ========================= 6 How is the engagement */}
                            <div className='info-sec'>
                                <h3>How is the engagement of Condidate with the student </h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>

                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar6(i) }} style={star6 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback6" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                            {/* ======================= 7 how is the content preparation*/}
                            <div className='info-sec'>
                                <h3>How is the content preparationof the condidate</h3>
                                <button className='btn'>
                                    <MdBlock />
                                </button>
                                {
                                    [1, 2, 3, 4, 5].map((val, i) => {
                                        i = i + 1
                                        return (
                                            <FaStar onClick={() => { setstar7(i) }} style={star7 >= i ? { color: "blue" } : ""} />
                                        )
                                    })
                                }
                                <div>
                                    <textarea name="feedback7" id="" placeholder='Add comment' className='text-area' onChange={(e) => { (handleinput(e)) }}></textarea>
                                </div>
                            </div>
                        </div>
                        <input type="submit" />
                    </form>
                    {/* ===========================================Printing */}
                    <table>
                        <tr>
                            <th>
                                Teaching/ Explanation Skills [Psychometric Judging]
                            </th>
                            <th>
                                Communication Skills
                            </th>
                            <th>
                                Learning ability and adaptability
                            </th>
                            <th>
                                Problem Solving Skills/Conflict Resolutiin
                            </th>
                            <th>
                                How is the Body Language (Hand Gestures,Seating Position) of the Condidate in lecture?
                            </th>
                            <th>
                                How is the engagement of Condidate with the student
                            </th>
                            <th>
                                How is the content preparationof the condidate
                            </th>
                        </tr>
                        {
                            // =========================================1
                            <>

                                <tr>
                                    <td className='feedback-data'>{totalobj.feedback1}
                                        <div>


                                            {totalobj.star1 == 1 &&
                                                <FaStar />
                                            }
                                            {totalobj.star1 == 2 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            {totalobj.star1 == 3 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>

                                            }
                                            {totalobj.star1 == 4 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            {totalobj.star1 == 5 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                        </div>
                                    </td>
                                    {/* ===========================2 */}
                                    <td className='feedback-data'>{totalobj.feedback2}
                                        <div>

                                       
                                        {totalobj.star2 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star2 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star2 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star2 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star2 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                         </div>
                                    </td>

                                    {/* ===========================3 */}
                                    <td className='feedback-data'>{totalobj.feedback3}
                                        {totalobj.star3 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star3 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star3 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star3 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star3 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                    </td>

                                    {/* ===========================4 */}
                                    <td className='feedback-data'>{totalobj.feedback4}
                                        {totalobj.star4 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star4 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star4 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star4 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star4 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                    </td>

                                    {/* ===========================5 */}
                                    <td className='feedback-data'>{totalobj.feedback5}
                                        {totalobj.star5 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star5 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star5 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star5 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star5 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                    </td>

                                    {/* ===========================6 */}
                                    <td className='feedback-data'>{totalobj.feedback6}
                                        {totalobj.star6 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star6 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star6 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star6 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star6 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                    </td>

                                    {/* ===========================7 */}
                                    <td className='feedback-data'>{totalobj.feedback7}
                                        {totalobj.star7 == 1 &&
                                            <FaStar />
                                        }
                                        {totalobj.star7 == 2 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star7 == 3 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>

                                        }
                                        {totalobj.star7 == 4 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                        {totalobj.star7 == 5 &&
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </>
                                        }
                                    </td>
                                </tr>
                            </>
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Multi