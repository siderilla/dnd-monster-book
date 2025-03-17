export default class DndService {
    
    // con cancelletto la static rimane privata in questo js
    static BASE_URL = 'https://www.dnd5eapi.co'
    static MONSTER_URL = '/api/2014/monsters/'

    getData() {
        // api/2014/monsters
        const url = `${DndService.BASE_URL}${DndService.MONSTER_URL}`;

        console.log(url);

        return fetch(url) // try - prova a prendere
        .then(res => res.json()) // se lo trovi 
        .then(data => {

            const requests = [];

            for (const monsterInfo of data.results) {
                const monsterUrl = monsterInfo.url;
                
                const fullUrl = DndService.BASE_URL + monsterUrl;

                const request = fetch(fullUrl)
                .then(result => result.json())
                .then(insideData => insideData)
                .catch(err => console.error(err));

                requests.push(request);
                
            }
            return Promise.all(requests);
        })
        .catch(err => console.error(err)) // catch - afferra e stampa l'errore se ne trovi uno
    }
}