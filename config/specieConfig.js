
let NextpxUrl

function SpecieByName(specie){

    let pag = 1

    let url = `https://rickandmortyapi.com/api/character/?species=${specie}&page=${pag}`

    let personagens = document.getElementById('personagens')

    personagens.innerHTML = ''

    fetch(url).then((res)=>{
        return res.json()

    }).then((personagens)=>{

        if(personagens.info.next){
            NextpxUrl = personagens.info.next
            
        }else{
            NextpxUrl = ''
        }
        
        let array_persona = [{}]
        let persona = personagens.results;
        array_persona = persona

        array_persona.map((p)=>{

            let status = ''
            if(p.status == 'Alive'){
                status = 'vivo'
            }
            if(p.status == 'Dead'){
                status = 'morto'
            }
            if(p.status == 'unknown'){
                status = 'neutro'
            }
            let personagens = document.getElementById('personagens')
    
    
            let elemento = document.createElement('div')
            elemento.setAttribute('class','card card-rick')
            elemento.innerHTML = `
            <img src="${p.image}" class="card-img-top" alt="...">
            <div class="card-body carta">
                <h5 class="card-title">${p.name}</h5>
                <p  class="card-text ${status}  ">${p.status} - ${p.species}</p>
                <p class='location' >Last known location:</>
                <p>${p.location.name}</p>
                <p class='location' >Origin:</>
                <p>${p.origin.name}</p>
                
            </div>
        `
           
            personagens.append(elemento)
    
           
        })
    


    })

}


function NextPg(){

    window.scrollTo(0,0)

    let url = NextpxUrl


    let personagens = document.getElementById('personagens')

    personagens.innerHTML = ''

    fetch(url).then((res)=>{
        return res.json()

    }).then((personagens)=>{

        if(personagens.info.next){
            NextpxUrl = personagens.info.next
            
        }else{
            NextpxUrl = ''
            
        }
        
        let array_persona = [{}]
        let persona = personagens.results;
        array_persona = persona

        array_persona.map((p)=>{

            let status = ''
            if(p.status == 'Alive'){
                status = 'vivo'
            }
            if(p.status == 'Dead'){
                status = 'morto'
            }
            if(p.status == 'unknown'){
                status = 'neutro'
            }
            let personagens = document.getElementById('personagens')
    
    
            let elemento = document.createElement('div')
            elemento.setAttribute('class','card card-rick')
            elemento.innerHTML = `
            <img src="${p.image}" class="card-img-top" alt="...">
            <div class="card-body carta">
                <h5 class="card-title">${p.name}</h5>
                <p  class="card-text ${status}  ">${p.status} - ${p.species}</p>
                <p class='location' >Last known location:</>
                <p>${p.location.name}</p>
                <p class='location' >Origin:</>
                <p>${p.origin.name}</p>
                
            </div>
        `
           
            personagens.append(elemento)
    
           
        })
    


    })


}