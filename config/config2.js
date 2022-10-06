let pag = 1



function SearchPersonaByName(){

   

    let NameOfPersonagen = document.querySelector('#buscar').value
    let url = `https://rickandmortyapi.com/api/character/?page=${pag}&name=${NameOfPersonagen}`
    

    if(NameOfPersonagen == ''){
        alert('digite algum personagem no campo')
    }else{
        
    fetch(url).then((data)=>{
        return data.json()

    }).then((personagens)=>{
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
                <h5 id="nomep" class="card-title nomep">${p.name}</h5>
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



}


function DeletePersona(){
    location.reload()
}


function nextPg(){
    let NameOfPersonagen = document.querySelector('#buscar').value
    pag++
    if(NameOfPersonagen){
        SearchPersonaByName()
    }else{
      pass
    }
    
    console.log(pag)
}

