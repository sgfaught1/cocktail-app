import React from 'react'
import './Arrow.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Arrow({ href }) {
    return (
        <>
            <a href={href} className='arrow-flex'>
                <ArrowDownwardIcon className='arrow-icon' />
            </a>
        </>
    )
}
