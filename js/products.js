window.addEventListener("load", inicio);

function inicio(){
    obtenerArray();
}


document.getElementById("idLabelAscendente").addEventListener("click", obtenerArray);
document.getElementById("idLabelDescendente").addEventListener("click", obtenerArray);
document.getElementById("sortByCount").addEventListener("click", obtenerArray);
document.getElementById("rangeFilterCount").addEventListener("click", obtenerArray);
document.getElementById("clearRangeFilter").addEventListener("click", resetear);


function resetear(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";
    document.getElementById("rangeFilterCountMin").placeholder = "min.";
    document.getElementById("rangeFilterCountMax").placeholder = "máx.";
    inicio();
}


function obtenerArray(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {       
            categoriesArray = resultObj.data;
            comoOrdenar(categoriesArray);
            if(!hayQueFiltrar()){
                let listaFiltrada = filtrar(categoriesArray);
                imprimirEnPantalla(listaFiltrada);
            }else{
                imprimirEnPantalla(categoriesArray);
            }
        }  
    });
}

function hayQueFiltrar(){
    let precioMinimo = document.getElementById("rangeFilterCountMin").value;
    let precioMaximo = document.getElementById("rangeFilterCountMax").value;
    return precioMinimo == "" && precioMaximo == "";
}

function comoOrdenar(array){
    if(document.getElementById("idAscendente").checked){
        array.sort(function (a, b){
            if(a.cost > b.cost){
                return 1;
            }
            if(a.cost < b.cost){
                return -1;
            }
            return 0;
        });
    }
    if(document.getElementById("idDescendente").checked){
        array.sort(function (a, b){
            if(a.cost < b.cost){
                return 1;
            }
            if(a.cost > b.cost){
                return -1;
            }
            return 0;
        });
    }
    if(document.getElementById("idCount").checked){
        array.sort(function (a, b){
            if(a.soldCount < b.soldCount){
                return 1;
            }
            if(a.soldCount > b.soldCount){
                return -1;
            }
            return 0;
        });
    }
}

function filtrar(array){
    
    let precioMinimo = document.getElementById("rangeFilterCountMin").value;
    let precioMaximo = document.getElementById("rangeFilterCountMax").value;
    if(precioMaximo == ""){
        precioMaximo = Number.MAX_VALUE;
    }
    if(precioMinimo == ""){
        precioMinimo = Number.MIN_VALUE;
    }
    let listaFiltrada = [];
    for(let auto of array){
        if(auto.cost >= precioMinimo && auto.cost <= precioMaximo){
            listaFiltrada.push(auto);
            console.log(auto.cost)
        }
    }
    
    return listaFiltrada;
}

function imprimirEnPantalla(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];
        htmlContentToAppend += 
        `<div class="list-group-item list-group-item-action"><div class="row"><div class="col-3"><img src="` + 
        category.imgSrc + `" alt="` + category.desc +
         `" class="img-thumbnail"> </img></div><div class="col"><div class="d-flex w-100 justify-content-between"><h4 class="mb-1">`+
          category.name +`</h4><small class="text-muted">` + category.currency + ` ` + category.cost + 
          `</small></div><p>` + category.description + `</p><p>` + "Unidades vendidas " + category.soldCount + `</p></div></div></div>`
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}