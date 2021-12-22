export const fetchDino = async (): Promise<Response> => {
  try {
    console.log('Fetching dino')
    const response = await fetch('https://dinoworkers-in-the-cloud.doverstav.workers.dev/api/dinos')
    return response
  } catch (error) {
    console.error(error)
    throw new Error("Error when getting dino")
  }
}

export const fetchLikedDinos = async (id: string): Promise<Response> => {
  try {
    const response = await fetch(`https://dinoworkers-in-the-cloud.doverstav.workers.dev/api/dinos/${id}`)
    return response
  } catch (error) {
    console.error(error)
    throw new Error("Error getting liked dinos")
  }
}

export const postDino = async (id: string, dino: string): Promise<Response> => {
  try {
    const response = await fetch(`https://dinoworkers-in-the-cloud.doverstav.workers.dev/api/dinos/${id}`, {
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