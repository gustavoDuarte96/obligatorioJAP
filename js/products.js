window.addEventListener("load", inicio);

function inicio(){
    imprimir();
    document.getElementById("rangeFilterCount").addEventListener("click", imprimirFiltrado);
    document.getElementById("clearRangeFilter").addEventListener("click", resetear);
}
document.getElementById("idLabelAscendente").addEventListener("click", imprimir);
document.getElementById("idLabelDescendente").addEventListener("click", imprimir);

function imprimir(){
    let personita = JSON.parse(localStorage.usuario);
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {
            
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            /*let min = Number.MAX_VALUE;
            for(let auto of categoriesArray){
                if(auto.cost < min){
                    min = auto.cost
                }
            }
            document.getElementById("rangeFilterCountMin").value = min;
            */
            if(document.getElementById("idAscendente").checked){
                alert("Ascendente");
                categoriesArray.sort(function (a, b){
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
                alert("Descendente");
                categoriesArray.sort(function (a, b){
                    if(a.cost < b.cost){
                        return 1;
                    }
                    if(a.cost > b.cost){
                        return -1;
                    }
                    return 0;
                });
            }

            showCategoriesList(categoriesArray);
            
            
        }
        
    });   
}

function descendente(lista){
    lista.sort(function (a, b){
        if(a.cost < b.cost){
            return 1;
        }
        if(a.cost > b.cost){
            return -1;
        }
        return 0;
    });
}

function ascendente(lista){
    lista.sort(function (a, b){
        if(a.cost > b.cost){
            return 1;
        }
        if(a.cost < b.cost){
            return -1;
        }
        return 0;
    });
}

function resetear(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";
    document.getElementById("rangeFilterCountMin").placeholder = "min.";
    document.getElementById("rangeFilterCountMax").placeholder = "máx.";
    imprimir();
}

function imprimirFiltrado(){
    let personita = JSON.parse(localStorage.usuario);
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {

            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            let arrayFiltrado = ordenarPorPrecio2(categoriesArray);
            showCategoriesList(arrayFiltrado);
    
        }      
    }); 
}

function ordenarPorPrecio2(array){
    let aux = 0;
    let precioMinimo = document.getElementById("rangeFilterCountMin").value;
    let precioMaximo = document.getElementById("rangeFilterCountMax").value;
    if(precioMinimo > precioMaximo){
        aux = precioMinimo;
        precioMinimo = precioMaximo;
        precioMaximo = aux;
    }
    let listaFiltrada = [];
    for(let auto of array){
        if(auto.cost >= precioMinimo && auto.cost <= precioMaximo){
            listaFiltrada.push(auto);
        }
    }
    return listaFiltrada;
}

function showCategoriesList(array){
    
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];
        htmlContentToAppend += 
        `<div class="list-group-item list-group-item-action"><div class="row"><div class="col-3"><img src="` + 
        category.imgSrc + `" alt="` + category.desc +
         `" class="img-thumbnail"> </img></div><div class="col"><div class="d-flex w-100 justify-content-between"><h4 class="mb-1">`+
          category.name +`</h4><small class="text-muted">` + category.currency + ` ` + category.cost + 
          `</small></div><p>` + category.description + `</p></div></div></div>`
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}


/* 
lista.sort(function (a, b){
            if(a.nombre.value() > b.nombre.toLowerCase()){
                return 1;
            }
            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return -1;
            }
            return 0;
        });
*/