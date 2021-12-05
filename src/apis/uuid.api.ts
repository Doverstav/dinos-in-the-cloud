import { v4 } from 'uuid';

export const getUUID = () => {
  const storedUserId = localStorage.getItem('userId')
  if (!storedUserId) {
    const generatedId = v4()
    localStorage.setItem('userId', generatedId)

    return generatedId
  }

  return storedUserId
}