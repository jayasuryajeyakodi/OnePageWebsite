$(document).ready(function(){
    console.log("document loaded");
    $('a[href*="#"]').click(
        function(e){
            e.preventDefault();
            var hash = this.hash;
            console.log(hash);
            var targetElement = $('a[id="'+ hash.slice(1) + '"]');
            console.log(targetElement);
            
            if(targetElement.length > 0){
                console.log("going to scroll")
                $('html, body').stop().animate(
                    {scrollTop: parseInt(targetElement.offset().top)},1000, function(){
                        //window.history.pushState(null, "",hash)
                    });
                // window.scroll({
                //     top: parseInt(targetElement.offset().top),
                //     left: 0,
                //     behavior: "smooth"
                // });
                //return false;
            }
        }
    );

    // if($(window.location.hash).length > 1){
    //     $('html, body').animate(
    //         {
    //             scrollTop: parseInt($('a[name="'+ window.location.hash.slice(1) + '"]').offset().top)
    //         },1000
    //     );
    // }
});