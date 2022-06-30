import React from 'react'
import { useNavigate } from 'react-router-dom'

export function WithNavigate(Component) {


    return function (props) {
        const navigate = useNavigate();

        return <Component navigate={navigate} {...props} />
    }
}
