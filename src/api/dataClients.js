export const dataClients = async () =>{
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()
        const url = `./upload/clients.json`
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.open('GET',url,true);
        xhr.send()
    })
}
