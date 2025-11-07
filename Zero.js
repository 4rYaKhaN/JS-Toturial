//Example Of setInterval()
let data = [
    {id : 100 , singer : 'Siavash Ghomeyshi' , size : '6mb'},
    {id : 200 , singer : 'Moein' , size : '8mb'},
    {id : 300 , singer : 'Homeyra' , size : '4mb'},
]


const Downlaod = (musicID) =>{
    let music = data.find(song => song.id == musicID)
    let counter = 5
    if(music){
        let timer = setInterval(()=>{
            console.log(counter)
            counter--
            if(counter < 0){
                clearInterval(timer)
                console.log(music)
            }
        },1000)
    }else{
        console.log('Music Not Found!')
        return
    }
}

Downlaod(400)

//Example Of async/await
async function githubInfo(username){
    try{
        let raw = await fetch(`https://api.github.com/users/${username}`)
        let gitData = await raw.json()
        return gitData
    }catch(error){
        console.log(error)
        return -1
    }
}

let GitInfo = await githubInfo('4rYaKhaN')
console.log(GitInfo)
