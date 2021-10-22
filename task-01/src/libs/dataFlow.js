export async function loadData(setIsLoading){
    const response = await fetch('http://localhost:3000/user')
    .then(response =>{
      if(response.ok) {
        return response.json();
      }
    })
    .then(data => {
      if(data){
        let d = data[0];
        return d;
      }
    })
    .catch(error => {
      console.log("Error fetching data: ",error);
    })
    .finally(() => {
      setIsLoading(false);
    });
    return response;
  }