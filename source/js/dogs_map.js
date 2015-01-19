define(['lib/news_special/bootstrap', 'text!../data/map_data.js', 'dogs_rollover'], function (news, data, dogsRollover) {
	
    data = JSON.parse(data);
    var pointer_on_right = false;

    var isIE = !!(window.navigator.userAgent.indexOf('Trident') > -1 ? true : false);

	var svgSupported = (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) ? true : false;

	if (!svgSupported || news.$('.main')[0].offsetWidth < 592 || isIE) {
        news.$('#dogs--map__rollover__wrapper').hide();
        news.$('.dogs--map__interactive--info').hide();
		return;
	} else if (news.$('.main')[0].offsetWidth  = 592) {
        //console.log('fix me');
    }

	news.$('#dogs--map--static').addClass('hidden');
	news.$('#dogs--map--svg').removeClass('hidden');
    function add_colours_to_map(area_id) {

        if (area_id in data) {
            switch (data[area_id].top_five[0][0]) {
            case 'Labrador Retriever':
                news.$('#' + area_id + ', #london_areas #' + area_id).attr('style', 'fill:#88C3C3');
                break;
            case 'Staffordshire Bull Terrier':
                news.$('#' + area_id + ', #london_areas #' + area_id).attr('style', 'fill:#E78788');
                break;
            case 'Jack Russell Terrier':
                news.$('#' + area_id).attr('style', 'fill:#F8B883');
                break;
            case 'Border Collie':
                news.$('#' + area_id).attr('style', 'fill:#95BA49');
                break;
            case 'Greyhound':
                news.$('#' + area_id).attr('style', 'fill:#CBA7B9');
                break;
            }
        }
    }

    news.$('.svg_map_area', '#areas').each(function () {
        var id = news.$(this).attr('id');
        add_colours_to_map(id);
    });
});