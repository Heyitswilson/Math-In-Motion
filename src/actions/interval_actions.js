export const RECEIVE_INTERVAL = "RECEIVE_INTERVAL";
export const CLEAR_INTERVAL = "CLEAR_INTERVAL";

export const receiveInterval = interval => ({
    type: RECEIVE_INTERVAL,
    interval
})

export const clearInterval = () => ({
    type: CLEAR_INTERVAL
})