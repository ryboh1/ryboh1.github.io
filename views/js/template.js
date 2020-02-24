template = {

    navPath:"",
    footerPath:"",
    currentPagePath:"",
    asidePath:"",
    listId:"",

    loadTemplate: async function (theResolve){
        try{
            await new Promise(resolve => $('nav').load(`${this.navPath}`, resolve));
            await new Promise(resolve => $("main").load(`${this.currentPagePath}`, resolve));
            await new Promise(resolve => $('footer').load(`${this.footerPath}`, resolve));

            if(this.asidePath){
                await new Promise(resolve => $('aside').load(`${this.asidePath}`, resolve));
            }

    
            if(theResolve != undefined){
                return theResolve("completed");
            } 
        }
        catch(error){
            console.log(error)
            return error
        }
    },


    addActiveClass: function (theCurrentPageID) {
        let theList = document.getElementById(`${this.listID}`)
        let theListItems = theList.getElementsByTagName("a")
        let lengthOfList = theListItems.length
        let theCurrentPage = document.getElementById(`${theCurrentPageID}`)
        
        for(let i = 0; i < lengthOfList; i++){
            theListItems[i].classList.remove("active")
        }
        theCurrentPage.classList.add("active")
    }
}