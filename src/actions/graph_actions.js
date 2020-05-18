export const CLEAR = "CLEAR";
export const RECEIVE_GRAPH = "RECEIVE_GRAPH"

export const receiveGraph = (graph) => ({
    type: RECEIVE_GRAPH,
    graph
})

export const clear = () => ({
    type: CLEAR
})
