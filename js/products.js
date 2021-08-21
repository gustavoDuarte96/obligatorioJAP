window.addEventListener("load", inicio);
function inicio(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {

            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            
            showCategoriesList(categoriesArray);
            
            
        }
        
    });
    
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