async function fetchData (){
    const response = await fetch('demo.txt')

    const textData = await response.text()

    const data = await JSON.parse(textData)
    
    console.log(data.name);
}


fetchData();