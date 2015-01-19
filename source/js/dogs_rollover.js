define(['lib/news_special/bootstrap', 'text!../data/map_data.js'], function (news, data) {
    data  = JSON.parse(data);
    function image_switcher(area_id) {
        if (area_id in data) {
            var image_to_update, name_to_update, number_to_update;

            news.$('.dogs--map__rollover__area_name').text(data[area_id].name);

            for (var i = 0; i < 5; i++) {

                switch (i) {
                case 0:
                    image_to_update = news.$('.top_dog_image');
                    name_to_update = news.$('.top_breed_name');
                    number_to_update = news.$('.top_breed_number');
                    break;
                case 1:
                    image_to_update = news.$('.second_top_dog_image');
                    name_to_update = news.$('.second_top_breed_name');
                    number_to_update = news.$('.second_top_breed_number');
                    break;
                case 2:
                    image_to_update = news.$('.third_top_dog_image');
                    name_to_update = news.$('.third_top_breed_name');
                    number_to_update = news.$('.third_top_breed_number');
                    break;
                case 3:
                    image_to_update = news.$('.fourth_top_dog_image');
                    name_to_update = news.$('.fourth_top_breed_name');
                    number_to_update = news.$('.fourth_top_breed_number');
                    break;
                case 4:
                    image_to_update = news.$('.fifth_top_dog_image');
                    name_to_update = news.$('.fifth_top_breed_name');
                    number_to_update = news.$('.fifth_top_breed_number');
                    break;
                }

                name_to_update.text(data[area_id].top_five[i][0]);
                number_to_update.text(data[area_id].top_five[i][1]);

                switch (data[area_id].top_five[i][0]) {

                case 'Labrador Retriever':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/labrador_48x48.png');
                    break;
                case 'Staffordshire Bull Terrier':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/staffordshire_bull_terrier_48x48.png');
                    break;
                case 'Jack Russell Terrier':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/jack_russell_terrier_48x48.png');
                    break;
                case 'Border Collie':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/border_collie_48x48.png');
                    break;
                case 'Greyhound':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/greyhound_48x48.png');
                    break;
                case 'Cocker Spaniel':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/cocker_spaniel_48x48.png');
                    break;
                case 'Lhasa Apso':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/lhasa_apso_48x48.png');
                    break;
                case 'Shih Tzu':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/shih_tzu_48x48.png');
                    break;
                case 'Yorkshire Terrier':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/yorkshire_terrier_48x48.png');
                    break;
                case 'Lurcher':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/lurcher_48x48.png');
                    break;
                case 'English Springer Spaniel':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/english_springer_spaniel_48x48.png');
                    break;
                case 'Chihuahua':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/chihuahua_48x48.png');
                    break;
                case 'German Shepherd':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/german_shepherd_48x48.png');
                    break;
                case 'Golden Retriever':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/golden_retriever_48x48.png');
                    break;
                case 'West Highland White Terrier':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/west_highland_white_terrier_48x48.png');
                    break;
                case 'Border Terrier':
                    image_to_update.attr('src', 'img/responsive/48x48_images_transparent/border_terrier_48x48.png');
                    break;


                }
            }
        }
    }

    news.$('.svg_map_area').on('mouseover', function (e) {

        var map_wrapper_width = 624;
        var map_wrapper_height = 1024;
        var halfway_point = map_wrapper_width / 2;
        pointer_on_right = false;
        pointer_at_the_bottom = false;
        var id = news.$(this).attr('id');

        if (e.pageX > halfway_point) {
            pointer_on_right = true;
        } else {
            pointer_on_right = false;
        }

        if (e.pageY > 900) {
            pointer_at_the_bottom = true;
        } else {
            pointer_at_the_bottom = false;
        }

        if (pointer_on_right) {
            news.$('#dogs--map__rollover__wrapper').removeClass('pointer_on_left').addClass('pointer_on_right');
            news.$('.dogs--map__rollover__arrow').removeClass('dogs--map__left_arrow');
        } else {
            news.$('#dogs--map__rollover__wrapper').removeClass('pointer_on_right').addClass('pointer_on_left');
            news.$('.dogs--map__rollover__arrow').addClass('dogs--map__left_arrow');
        }

        if (pointer_at_the_bottom) {
            news.$('#dogs--map__rollover__wrapper').addClass('pointer_at_the_bottom');
        } else {
            news.$('#dogs--map__rollover__wrapper').removeClass('pointer_at_the_bottom');
        }

        image_switcher(id);

        news.$(this).css('opacity', 0.8);

    });

    news.$('.svg_map_area').on('mousemove', function (e) {
        var mouseX, mouseY, leftOffset, topOffset;
        mouseX = e.pageX;
        mouseY = e.pageY;

        if (pointer_on_right) {
            if (mouseX > 335) {
                left = mouseX - 335;
            } else {
                left = 0;
            }
        } else {
            left = mouseX + 10;
        }

        if (pointer_at_the_bottom) {
            topOffset = mouseY - 220;
        } else {
            topOffset = mouseY - 30;
        }

        news.$('#dogs--map__rollover__wrapper').css({
            top: topOffset,
            left: left
        });

        news.$('#dogs--map__rollover__arrow').css({
            marginTop: topOffset,
            left: left
        });
        news.$('#dogs--map__rollover__wrapper').show();
    });

    news.$('#stroke_group g').on('mouseout', function (e) {
        news.$('#dogs--map__rollover__wrapper').hide();
        news.$(this).css('opacity', 1);
    });
});