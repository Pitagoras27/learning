const person = [{
  name: 'carlos', lastName: 'gutierrez'
}]

// const allName = item => {
//   const obj = item[0]
//   const name = obj.name
//   const lastName = obj.lastName
//   const firstLetterName = name.charAt(0).toUpperCase()
//   const firstLetterLastName = lastName.charAt(0).toUpperCase()
//   const allWordName = `${firstLetterName}${name.slice(1)}`
//   const allWordLastName = `${firstLetterLastName}${lastName.slice(1)}`
//   return `${allWordName} ${allWordLastName}`
// }

// console.log(allName(person))

// REFACTOR ONLY ONE RESPONSABILITY
// more lines but more legibility

const getData = x => x[0]

const wordTransform = (collection, key) => {
  const prop = collection[key]
  const firstLetter = prop.charAt(0).toUpperCase()
  return `${firstLetter}${prop.slice(1)}`
}

const unionWords = (name, lastName) => `${name} ${lastName}`

const fullName = (obj) => {
  const filterData = getData(obj)
  const transformName = wordTransform(filterData, 'name')
  const transformLastName = wordTransform(filterData, 'lastName')
  const result = unionWords(transformName, transformLastName)
  return result
}

console.log(fullName(person))