const hidingKey = ['password']
const maskingKey = ['email']

export const maskingString = (str) => {
  let newStr = ''
  for (let index = 0; index < str.length; index++) {
    newStr = index > 2 ? newStr + '*' : newStr + str[index]
  }

  return newStr
}

export const objectToLogStr = (obj) => {
  const newObj = { ...obj }
  let logStr = ''
  for (const key of Object.keys(newObj)) {
    if (hidingKey.includes(key)) {
      continue
    }
    const value = maskingKey.includes(key) ? maskingString(newObj[key]) : newObj[key]

    if (logStr === '') {
      logStr = `${key} : ${value}`
    } else {
      logStr = `${logStr}, ${key} : ${value}`
    }
  }

  return `{ ${logStr} }`
}
