export const fetchDino = async (): Promise<Response> => {
  try {
    console.log('Fetching dino')
    const response = await fetch('/api/dinos')
    return response
  } catch (error) {
    console.error(error)
    throw new Error("Error when getting dino")
  }
}

export const postDino = async (id: string, dino: string): Promise<Response> => {
  try {
    const response = await fetch(`api/dinos/${id}`, {
      method: 'POST',
      body: JSON.stringify({ dino: dino }),
      headers: { "Content-Type": "application/json" }
    })
    return response
  } catch (error) {
    console.error(error)
    throw new Error("Error when liking dino")
  }
}