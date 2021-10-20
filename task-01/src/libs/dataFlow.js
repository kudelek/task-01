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
        //dispatch({type: "setData", payload: d});
        return d;
      }
    })
    .catch(error => {
      console.log("Error fetching data: ",error);
    })
    .finally(() => {
      setIsLoading(false);
      document.getElementById("form").click();
    });
    return response;
  }