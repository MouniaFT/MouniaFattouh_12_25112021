const fetchData = () => {
  fetch('http://localhost:3001/user/12')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      console.log(result)
    })
}

export default fetchData
