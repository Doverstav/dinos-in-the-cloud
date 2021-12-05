import { env } from "process"

interface UserData {
  dinosLiked: string[]
  dinosLikedAmount: number
}

interface RequestBody {
  dino: string
}

export const onRequestPost = async (context) => {
  const {
    params,
    request
  }: { request: Request, params: string } = context

  const body = (await request.json()) as RequestBody
  const currentUserData = (await env.DINOS.get(params, { type: "json" })) as UserData

  const newUserData = {
    dinosLiked: currentUserData.dinosLiked.push(body.dino),
    dinosLikedAmount: currentUserData.dinosLikedAmount + 1
  }

  await env.DINOS.put(params, newUserData)

  return new Response(JSON.stringify(newUserData), { headers: { "Content-Type": "application/json" } })
}