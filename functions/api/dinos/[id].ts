export const onRequestPost = (context) => {
    const {
        params,
        request
    } = context

    const response = {
        id: params,
        body: request.body
    }

    return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } })
}