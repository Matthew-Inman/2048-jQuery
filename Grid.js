class Grid {
    constructor() {

    }

    generate_html_grid() {
        let counter = 1;
        let row = 1;
        let col = 1;
        let tile = new Tiles();

        $("body").css("margin", "1em");
        $("body").append("<h3>Score</h3>");
        $("body").append("<div id='score'>0</div>");
        $("body").append("<input type='submit' id='new_game' value='New Game'>");
        $("body").append("<input type='submit' id='sound' value='Audio ON/OFF'>");
        $("body").append("<div class=grid_container></div>");

        for (let i = 0; i < 4; i++) {
            if (row > 4) {
                row = 1
            }

            for (let j = 0; j < 4; j++) {
                if (col > 4) {
                    col = 1
                }
                $("div.grid_container").append("<div class='empty tile' col='" + (col) + "' row='" + (row) + "' id='tile_" + (counter) + "'>");
                col++;
                counter++;
            }
            row++;
        }

        for (let i = 0; i < 2; i++) {
            tile.generate_random_tile();
            tile.update_filled_class();
        }
    }
}