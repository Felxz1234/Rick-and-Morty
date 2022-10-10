pag = 1

let NextpxUrl 

function SearchPersonaByName(){

    

    let specie = document.querySelector('#species').value
    let status = document.querySelector("#status").value


    let NameOfPersonagen = document.querySelector('#buscar').value
    let url = `https://rickandmortyapi.com/api/character/?page=${pag}&name=${NameOfPersonagen}&status=${status}&species=${specie}`

    document.getElementById('personagens').innerHTML = ''

    if(NameOfPersonagen == ''){
        alert('digite algum personagem no campo')
    }else{

    }

    fetch(url).then((data)=>{
        
        return data.json()

    }).then((personagens)=>{

        if(personagens.info.next){
            NextpxUrl = personagens.info.next
           
            
        }else{
            NextpxUrl = ''
        }
        

        let array_persona = [{}]
        let persona = personagens.results;

        console.log(array_persona)

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

    let NameOfPersonagen = document.querySelector('#buscar').value
    let url = NextpxUrl

    document.getElementById('personagens').innerHTML = ''

    if(NameOfPersonagen == ''){
        alert('digite algum personagem no campo')
    }else{

    }

    fetch(url).then((data)=>{
        
        return data.json()

    }).then((personagens)=>{

        if(personagens.info.next){
            NextpxUrl = personagens.info.next
            
        }else{
            NextpxUrl = ''
        }
        

        let array_persona = [{}]
        let persona = personagens.results;

        console.log(array_persona)

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
