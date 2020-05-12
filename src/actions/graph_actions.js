export const RECEIVE_X = "RECEIVE_X";
export const RECEIVE_Y = "RECEIVE_Y";
export const RECEIVE_T = "RECEIVE_T";
export const RECEIVE_FRAME = "RECEIVE_FRAME";
export const CLEAR = "CLEAR"

export const receiveX = (x) => {
    debugger
    return ({
        type: RECEIVE_X,
        x
    })
}

export const receiveY = (y) => ({
    type: RECEIVE_Y,
    y
})

export const receiveT = (t) => ({
    type: RECEIVE_T,
    t
})

export const receiveFrame = (frame) => ({
    type: RECEIVE_FRAME,
    frame
})

export const clear = () => ({
    type: CLEAR
})
