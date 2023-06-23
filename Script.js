function toggleMode(){

    const html = document.documentElement /*const cria variavel, document. acessa o elemento html */
    html.classList.toggle('Light')

    // if(html.classList.contains("Light")){ /*ao clicar no botao, se no html estiver modo claro, ele vai remover e vai ficar escuro*/

    //     html.classList.remove('Light')
    // } 
    // else{ /*se acionado o botão e o html nao estiver no modo claro ele vai adicionar o modo claro ai html*/
    //     html.classList.add('Light')
        
    // }

    //toda essa lógica pode ser substituida por um seimples comando o toggle//

    // PEGAR A TAG IMG

    const img = document.querySelector("#profile img")
    
    //SUBSTITUIR A IMG

    if(html.classList.contains("Light")){

    // SE TIVER MODO CLARO, IMG CLARA

        img.setAttribute('src', '/IMG/BRANCO.png')
    } 
    else{ 

    // SE TIVER MODO ESCURO, IMG ESCURA

       img.setAttribute('src', '/IMG/PRETO.png')
  
    }
}