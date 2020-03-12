import React from 'react'

export const parseText = (string) => {
    return (
        string.split(/\n/).map(e => (<p>{e}</p>))
    )
}