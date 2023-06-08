let checkBtn = document.querySelectorAll('.cmp-modelfilter__input--checkbox')

if(checkBtn.checked){
    let body = document.getElementById('body').style.background = 'yellow'
}else{
    body.style.background = 'white'
}

$(function() {


    let filter = $("[data-filter]")

    filter.on("click", function(event){
        event.preventDefault()

        let cat = $(this).data('filter')


        $("[data-cat]").each(function(){
            
            let workCat = $(this).data('cat')

            if(workCat != cat){
                $(this).addClass('hide')
            }else{
                $(this).removeClass('hide')
            }

        })
    })

})