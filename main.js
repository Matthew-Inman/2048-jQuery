function empty_tiles_left()
{
    for (let i = 1; i <= 16; i++) {
        if ($("#tile_"+i).hasClass("empty")) {
            return true;
        }
    }
    return false;
}

// function that used to compare tile values before and after movement
function values_are_equal(array1, array2)
{
    let num_tiles = 16;
    for (let i = 0; i < num_tiles; i++)
    {
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
}

$(document).ready(function()
{
    let audio = $("audio")[0];
    let audio_on = false;
    let game_number = 0;
    let game_over = false;
    let high_score = 0;
    let final_score = null;

    let grid = new Grid();
    let tile = new Tiles();

    grid.generate_html_grid();
    tile.update_filled_class();
    $("#high_score").text(high_score);

    $(document).on("keyup", function(event)
    {
        if (!game_over) 
        {
            tile.update_animations();
            let before_values = tile.return_tile_values();
            let reached_default = false;

            switch(event.keyCode)
            {
                // LEFT UP RIGHT DOWN
                case 37: //console.log("pressed left");
                    tile.move_left();
                    tile.merge_left();
                    tile.move_left();
                    break;
                case 38: //console.log("pressed up");
                    tile.move_up();
                    tile.merge_up();
                    tile.move_up();
                    break;
                case 39: //console.log("pressed right");
                    tile.move_right();
                    tile.merge_right();
                    tile.move_right();
                    break;
                case 40: //console.log("pressed down");
                    tile.move_down();
                    tile.merge_down();
                    tile.move_down();
                    break;

                // Q, Z, D, S
                case 81: //console.log("pressed left");
                    tile.move_left();
                    tile.merge_left();
                    tile.move_left();
                    break;
                case 90: //console.log("pressed up");
                    tile.move_up();
                    tile.merge_up();
                    tile.move_up();
                    break;
                case 68: //console.log("pressed right");
                    tile.move_right();
                    tile.merge_right();
                    tile.move_right();
                    break;
                case 83: //console.log("pressed down");
                    tile.move_down();
                    tile.merge_down();
                    tile.move_down();
                    break;

                default: //console.log("reached default condition");
                    reached_default = true;
                    break;
            }

            // make sure a moving key has been pressed
            if (!reached_default)
            {
                let after_values = tile.return_tile_values();

                if (empty_tiles_left() && !values_are_equal(before_values, after_values)) {
                    if (audio_on) {
                        let isPlaying = (audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
                        if (!isPlaying)
                            audio.play();
                    }
                    tile.generate_random_tile();
                }
                tile.update_filled_class();

                if (!empty_tiles_left() && !tile.is_merge_vertical() && !tile.is_merge_horizontal()) {
                    game_number++;
                    //tile.update_animations();
                    console.log('game number is:' + game_number);
                    final_score = parseInt($("#score").text());
                    alert("GAME OVER!\nYou scored " + final_score + "points");

                    if (game_number == 1) {
                        high_score = final_score;
                    } 
                    else if (final_score > high_score) {
                        high_score = final_score;
                    }
                    $("#high_score").text(high_score);
                    game_over = true;
                }
            } 
        }
        // if game is over
        else {
            alert('Click on NEW GAME to restart!');
        }
    });

    $(document).on("click", function(){
        $("#new_game").click(function(){
            $("body").empty();
            game_over = false;
            grid.generate_html_grid();
            $("#high_score").text(high_score);
        });
    });

    let i = 0;
    $("#sound").click(function (){ // if $(document).on("click", function() is added, executes code +1 time every time
        i++;
        (i % 2 === 0) ? console.log("audio is OFF") : console.log("audio is ON");
        audio_on = !audio_on;
    });
});