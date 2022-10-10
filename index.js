
let pag = Math.floor( Math.random() * 43);

const url2 = `https://rickandmortyapi.com/api/character/?page=${pag}`


fetch(url2).then((data)=>{
    
    return data.json()
}).then((personagens)=>{

    let botao = document.getElementById('botao')

    

    console.log(personagens)

    let array_persona = [{}]
    let persona = personagens.results;
    array_persona = persona


    
        array_persona.map((p)=>{

            console.log(p.species)

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

