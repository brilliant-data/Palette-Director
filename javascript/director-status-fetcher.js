
$.get('/palette-director-status/html', null, function(result){
    $('.tb-scroll.tb-scroll-settings .tb-settings-section:nth-child(1)').after(result);
});
