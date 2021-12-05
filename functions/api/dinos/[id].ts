export const onRequestPost = async (context) => {
  const {
    params,
    request
  }: { request: Request, params: string } = context

  const response = {
    id: params,
    body: await request.json()
  }

  return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } })
}