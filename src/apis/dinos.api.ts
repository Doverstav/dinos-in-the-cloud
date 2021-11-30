export const fetchDino = async (): Promise<Response> => {
  try {
    console.log('Fetching dino')
    const response = await fetch('/api/dinos')
    console.log(await response.json())
    return response
  } catch (error) {
    console.error(error)
    throw new Error("Error when getting dino")
  }
}