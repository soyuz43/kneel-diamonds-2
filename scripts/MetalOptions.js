export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
  
    let optionsHTML = "<h2>Metals</h2>"
  
    // Use map() to generate new array of strings
    const divStringArray = metals.map(
      (metal) => {
        return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
      }
    )
  
    // Use join() to squash the array of strings into a single string
    optionsHTML += divStringArray.join("")
  
    return optionsHTML
  }