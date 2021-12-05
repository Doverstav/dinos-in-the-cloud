import { useEffect, useState } from "react"
import { getUUID } from "../apis/uuid.api"

export const useUUID = () => {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    setUserId(getUUID())
  }, [])

  return userId
}