/*
function imprimirFiltrado(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {

            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            if(document.getElementById("idAscendente").checked){
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
            if(document.getElementById("idCount").checked){
                categoriesArray.sort(function (a, b){
                    if(a.soldCount < b.soldCount){
                        return 1;
                    }
                    if(a.soldCount > b.soldCount){
                        return -1;
                    }
                    return 0;
                });
            }
            let arrayFiltrado = filtrarPorPrecio(categoriesArray);
            showCategoriesList(arrayFiltrado);
    
        }      
    }); 
}
*/
/*
function filtrarPorPrecio(array){
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
    let text = " unidades vendidas."
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
*/
/*
function imprimir(){
    alert(document.getElementById("rangeFilterCountMin").value)
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {       
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas

            if(document.getElementById("idAscendente").checked){
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
            if(document.getElementById("idCount").checked){
                categoriesArray.sort(function (a, b){
                    if(a.soldCount < b.soldCount){
                        return 1;
                    }
                    if(a.soldCount > b.soldCount){
                        return -1;
                    }
                    return 0;
                });
            }

            showCategoriesList(categoriesArray);
            
            
        }
        
    });   
}*/
/*
function buscador(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {
            let buscado = document.getElementById("idSearch").value;
            categoriesArray = resultObj.data;
            let listaBuscado = [];
            //Muestro las categorías ordenadas
            for(let autos of categoriesArray){
                if(auto.name.toLowerCase() == buscado.toLowerCase()){
                    listaBuscado.push(autos);
                }
            }
            showCategoriesList(listaBuscado);
    
        }      
    }); 
}
*/
/*
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
*/