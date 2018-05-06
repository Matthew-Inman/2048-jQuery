class Tiles {
    constructor() {

    }

    generate_random_tile() //on ne génère qu'un seul 2
    {
        let random_tile = Math.floor((Math.random() * 16) + 1);
        while ($("#tile_" + random_tile).hasClass("filled")) {
            random_tile = Math.floor((Math.random() * 16) + 1);
        }

        $("#tile_" + random_tile).removeClass("empty");
        $("#tile_" + random_tile).addClass("filled");
        $("#tile_" + random_tile).addClass("value_2");
        $("#tile_" + random_tile).addClass("w3-animate-opacity");
    }

    return_merged_class(merged_class) {
        switch (merged_class) {
            case "value_2":
                return "value_4";
            case "value_4":
                return "value_8";
            case "value_8":
                return "value_16";
            case "value_16":
                return "value_32";
            case "value_32":
                return "value_64";
            case "value_64":
                return "value_128";
            case "value_128":
                return "value_256";
            case "value_256":
                return "value_512";
            case "value_512":
                return "value_1024";
            case "value_1024":
                return "value_2048";
            case "empty":
                return "empty";
            default:
                alert("Unexpected value of merged class!");
        }
    }

    return_value_class(div) {
        if ($(div).hasClass("value_2")) {
            return "value_2";
        }
        else if ($(div).hasClass("value_4")) {
            return "value_4";
        }
        else if ($(div).hasClass("value_8")) {
            return "value_8";
        }
        else if ($(div).hasClass("value_16")) {
            return "value_16";
        }
        else if ($(div).hasClass("value_32")) {
            return "value_32";
        }
        else if ($(div).hasClass("value_64")) {
            return "value_64";
        }
        else if ($(div).hasClass("value_128")) {
            return "value_128";
        }
        else if ($(div).hasClass("value_256")) {
            return "value_256";
        }
        else if ($(div).hasClass("value_512")) {
            return "value_512";
        }
        else if ($(div).hasClass("value_1024")) {
            return "value_1024";
        }
        else if ($(div).hasClass("value_2048")) {
            return "value_2048";
        }
        else {
            return "empty";
        }
    }

    return_filled_class(div) {
        if ($(div).hasClass("value_2")) {
            return "filled_2";
        }
        else if ($(div).hasClass("value_4")) {
            return "filled_4";
        }
        else if ($(div).hasClass("value_8")) {
            return "filled_8";
        }
        else if ($(div).hasClass("value_16")) {
            return "filled_16";
        }
        else if ($(div).hasClass("value_32")) {
            return "filled_32";
        }
        else if ($(div).hasClass("value_64")) {
            return "filled_64";
        }
        else if ($(div).hasClass("value_128")) {
            return "filled_128";
        }
        else if ($(div).hasClass("value_256")) {
            return "filled_256";
        }
        else if ($(div).hasClass("value_512")) {
            return "filled_512";
        }
        else if ($(div).hasClass("value_1024")) {
            return "filled_1024";
        }
        else if ($(div).hasClass("value_2048")) {
            return "filled_2048";
        }
        else {
            return "empty";
        }
    }

    return_tile_values()
    {
        let tab = [];
        let row = 1;
        let col = 1;

        for (let i = 0; i < 4; i++)
        {
            if (row > 4){row = 1}
            for (let j = 0; j < 4; j++)
            {
                if (col > 4){col = 1}
                let tile_class = this.return_filled_class($('div[col=' + col + '][row="'+ row +'"]'));
                tab.push(tile_class);
                col++;
            }
            row++;
        }
        return tab;
    }

    remove_filled_class(div) {
        if ($(div).hasClass("filled_2")) {
            $(div).removeClass("filled_2");
        }
        else if ($(div).hasClass("filled_4")) {
            $(div).removeClass("filled_4");
        }
        else if ($(div).hasClass("filled_8")) {
            $(div).removeClass("filled_8");
        }
        else if ($(div).hasClass("filled_16")) {
            $(div).removeClass("filled_16");
        }
        else if ($(div).hasClass("filled_32")) {
            $(div).removeClass("filled_32");
        }
        else if ($(div).hasClass("filled_64")) {
            $(div).removeClass("filled_64");
        }
        else if ($(div).hasClass("filled_128")) {
            $(div).removeClass("filled_128");
        }
        else if ($(div).hasClass("filled_256")) {
            $(div).removeClass("filled_256");
        }
        else if ($(div).hasClass("filled_512")) {
            $(div).removeClass("filled_512");
        }
        else if ($(div).hasClass("filled_1024")) {
            $(div).removeClass("filled_1024");
        }
        else if ($(div).hasClass("filled_2048")) {
            $(div).removeClass("filled_2048");
        }
        // else
        //     console.log("function remove filled class did not execute anything.");
    }

    update_animations()
    {
        let row = 1;
        let col = 1;

        for (let i = 0; i < 4; i++)
        {
            if (row > 4){row = 1}
            for (let j = 0; j < 4; j++)
            {
                if (col > 4){col = 1}
                if ($('div[col=' + col + '][row="'+ row +'"]').hasClass("w3-animate-opacity")) {
                    $('div[col=' + col + '][row="' + row + '"]').removeClass("w3-animate-opacity")
                }
                col++;
            }
            row++;
        }
    }

    update_filled_class() //and fade class from w3 css
    {
        let row = 1;
        let col = 1;

        for (let i = 0; i < 4; i++)
        {
            if (row > 4){row = 1}
            for (let j = 0; j < 4; j++)
            {
                if (col > 4){col = 1}
                let temp_value = this.return_filled_class($('div[col=' + col + '][row="'+ row +'"]'));
                if (temp_value !== "empty") {
                    this.remove_filled_class($('div[col=' + col + '][row="'+ row +'"]'));
                    $('div[col=' + col + '][row="'+ row +'"]').addClass(temp_value);
                 }
                 else
                    this.remove_filled_class($('div[col=' + col + '][row="'+ row +'"]'));
                col++;
            }
            row++;
        }
    }

    update_score(filled_class)
    {
        let current_score = parseInt($("#score").text());
        let score = 0;

        if (filled_class === "filled_4") {
            score = current_score + 4;
        }
        else if(filled_class === "filled_8") {
            score = current_score + 8;
        }
        else if(filled_class === "filled_16") {
            score = current_score + 16;
        }
        else if(filled_class === "filled_32") {
            score = current_score + 32;
        }
        else if(filled_class === "filled_64") {
            score = current_score + 64;
        }
        else if(filled_class === "filled_128") {
            score = current_score + 128;
        }
        else if(filled_class === "filled_256") {
            score = current_score + 256;
        }
        else if(filled_class === "filled_512") {
            score = current_score + 512;
        }
        else if(filled_class === "filled_1024") {
            score = current_score + 1024;
        }
        else if(filled_class === "filled_2048") {
            score = current_score + 2048;
        }
        else {
            return false;
        }
        $("#score").text(score);
    }

    move_up() {
        for (let col = 1; col <= 4; col++) {
            for (let j = 0; j < 4; j++) {
                if ($('div[col=' + col + '][row="1"]').hasClass("empty")) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="2"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="2"]').removeClass("filled");
                        $('div[col=' + col + '][row="1"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="1"]').removeClass("empty");
                    $('div[col=' + col + '][row="1"]').addClass(temp);

                    let temp2 = this.return_value_class($('div[col=' + col + '][row="3"]')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col=' + col + '][row="3"]').removeClass("filled");
                        $('div[col=' + col + '][row="2"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="2"]').removeClass(temp);
                    $('div[col=' + col + '][row="2"]').addClass(temp2);

                    let temp3 = this.return_value_class($('div[col=' + col + '][row="4"]')); //temp contains a string
                    if (temp3 != "empty") {
                        $('div[col=' + col + '][row="4"]').removeClass("filled");
                        $('div[col=' + col + '][row="3"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="3"]').removeClass(temp2);
                    $('div[col=' + col + '][row="3"]').addClass(temp3);

                    $('div[col=' + col + '][row="4"]').removeClass(temp3);
                    $('div[col=' + col + '][row="4"]').addClass("empty");

                }
                else if (($('div[col=' + col + '][row="2"]').hasClass("empty"))) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="3"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="3"]').removeClass("filled");
                        $('div[col=' + col + '][row="2"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="2"]').removeClass("empty");
                    $('div[col=' + col + '][row="2"]').addClass(temp);

                    let temp2 = this.return_value_class($('div[col=' + col + '][row="4"]')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col=' + col + '][row="4"]').removeClass("filled");
                        $('div[col=' + col + '][row="3"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="3"]').removeClass(temp);
                    $('div[col=' + col + '][row="3"]').addClass(temp2);

                    $('div[col=' + col + '][row="4"]').removeClass(temp2);
                    $('div[col=' + col + '][row="4"]').addClass("empty");
                }
                else if ((($('div[col=' + col + '][row="3"]').hasClass("empty")))) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="4"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="4"]').removeClass("filled");
                        $('div[col=' + col + '][row="3"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="3"]').removeClass("empty");
                    $('div[col=' + col + '][row="3"]').addClass(temp);

                    $('div[col=' + col + '][row="4"]').removeClass(temp);
                    $('div[col=' + col + '][row="4"]').addClass("empty");
                }
            }
        }
    }

    move_down(){
        for (let col = 1; col <= 4; col++) {
            for (let j = 0; j < 4; j++) {
                if ($('div[col=' + col + '][row="4"]').hasClass("empty")) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="3"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="3"]').removeClass("filled");
                        $('div[col=' + col + '][row="4"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="4"]').removeClass("empty");
                    $('div[col=' + col + '][row="4"]').addClass(temp);

                    let temp2 = this.return_value_class($('div[col=' + col + '][row="2"]')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col=' + col + '][row="2"]').removeClass("filled");
                        $('div[col=' + col + '][row="3"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="3"]').removeClass(temp);
                    $('div[col=' + col + '][row="3"]').addClass(temp2);

                    let temp3 = this.return_value_class($('div[col=' + col + '][row="1"]')); //temp contains a string
                    if (temp3 != "empty") {
                        $('div[col=' + col + '][row="1"]').removeClass("filled");
                        $('div[col=' + col + '][row="2"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="2"]').removeClass(temp2);
                    $('div[col=' + col + '][row="2"]').addClass(temp3);

                    $('div[col=' + col + '][row="1"]').removeClass(temp3);
                    $('div[col=' + col + '][row="1"]').addClass("empty");

                }
                else if (($('div[col=' + col + '][row="3"]').hasClass("empty"))) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="2"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="2"]').removeClass("filled");
                        $('div[col=' + col + '][row="3"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="3"]').removeClass("empty");
                    $('div[col=' + col + '][row="3"]').addClass(temp);

                    let temp2 = this.return_value_class($('div[col=' + col + '][row="1"]')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col=' + col + '][row="1"]').removeClass("filled");
                        $('div[col=' + col + '][row="2"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="2"]').removeClass(temp);
                    $('div[col=' + col + '][row="2"]').addClass(temp2);

                    $('div[col=' + col + '][row="1"]').removeClass(temp2);
                    $('div[col=' + col + '][row="1"]').addClass("empty");
                }
                else if ((($('div[col=' + col + '][row="2"]').hasClass("empty")))) {
                    let temp = this.return_value_class($('div[col=' + col + '][row="1"]')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col=' + col + '][row="1"]').removeClass("filled");
                        $('div[col=' + col + '][row="2"]').addClass("filled");
                    }
                    $('div[col=' + col + '][row="2"]').removeClass("empty");
                    $('div[col=' + col + '][row="2"]').addClass(temp);

                    $('div[col=' + col + '][row="1"]').removeClass(temp);
                    $('div[col=' + col + '][row="1"]').addClass("empty");
                }
            }
        }
    }

    move_left(){
        for (let row = 1; row <= 4; row++) {
            for (let j = 0; j < 4; j++) {
                if ($('div[col="1"][row=' + row + ']').hasClass("empty")) {
                    let temp = this.return_value_class($('div[col="2"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="2"][row=' + row + ']').removeClass("filled");
                        $('div[col="1"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="1"][row=' + row + ']').removeClass("empty");
                    $('div[col="1"][row=' + row + ']').addClass(temp);

                    let temp2 = this.return_value_class($('div[col="3"][row=' + row + ']')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col="3"][row=' + row + ']').removeClass("filled");
                        $('div[col="2"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="2"][row=' + row + ']').removeClass(temp);
                    $('div[col="2"][row=' + row + ']').addClass(temp2);

                    let temp3 = this.return_value_class($('div[col="4"][row=' + row + ']')); //temp contains a string
                    if (temp3 != "empty") {
                        $('div[col="4"][row=' + row + ']').removeClass("filled");
                        $('div[col="3"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="3"][row=' + row + ']').removeClass(temp2);
                    $('div[col="3"][row=' + row + ']').addClass(temp3);

                    $('div[col="4"][row=' + row + ']').removeClass(temp3);
                    $('div[col="4"][row=' + row + ']').addClass("empty");

                }
                else if (($('div[col="2"][row=' + row + ']').hasClass("empty"))) {
                    let temp = this.return_value_class($('div[col="3"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="3"][row=' + row + ']').removeClass("filled");
                        $('div[col="2"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="2"][row=' + row + ']').removeClass("empty");
                    $('div[col="2"][row=' + row + ']').addClass(temp);

                    let temp2 = this.return_value_class($('div[col="4"][row=' + row + ']')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col="4"][row=' + row + ']').removeClass("filled");
                        $('div[col="3"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="3"][row=' + row + ']').removeClass(temp);
                    $('div[col="3"][row=' + row + ']').addClass(temp2);

                    $('div[col="4"][row=' + row + ']').removeClass(temp2);
                    $('div[col="4"][row=' + row + ']').addClass("empty");
                }
                else if ((($('div[col="3"][row=' + row + ']').hasClass("empty")))) {
                    let temp = this.return_value_class($('div[col="4"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="4"][row=' + row + ']').removeClass("filled");
                        $('div[col="3"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="3"][row=' + row + ']').removeClass("empty");
                    $('div[col="3"][row=' + row + ']').addClass(temp);

                    $('div[col="4"][row=' + row + ']').removeClass(temp);
                    $('div[col="4"][row=' + row + ']').addClass("empty");
                }
            }
        }
    }

    move_right(){
        for (let row = 1; row <= 4; row++) {
            for (let j = 0; j < 4; j++) {
                if ($('div[col="4"][row=' + row + ']').hasClass("empty")) {
                    let temp = this.return_value_class($('div[col="3"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="3"][row=' + row + ']').removeClass("filled");
                        $('div[col="4"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="4"][row=' + row + ']').removeClass("empty");
                    $('div[col="4"][row=' + row + ']').addClass(temp);

                    let temp2 = this.return_value_class($('div[col="2"][row=' + row + ']')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col="2"][row=' + row + ']').removeClass("filled");
                        $('div[col="3"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="3"][row=' + row + ']').removeClass(temp);
                    $('div[col="3"][row=' + row + ']').addClass(temp2);

                    let temp3 = this.return_value_class($('div[col="1"][row=' + row + ']')); //temp contains a string
                    if (temp3 != "empty") {
                        $('div[col="1"][row=' + row + ']').removeClass("filled");
                        $('div[col="2"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="2"][row=' + row + ']').removeClass(temp2);
                    $('div[col="2"][row=' + row + ']').addClass(temp3);

                    $('div[col="1"][row=' + row + ']').removeClass(temp3);
                    $('div[col="1"][row=' + row + ']').addClass("empty");

                }
                else if (($('div[col="3"][row=' + row + ']').hasClass("empty"))) {
                    let temp = this.return_value_class($('div[col="2"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="2"][row=' + row + ']').removeClass("filled");
                        $('div[col="3"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="3"][row=' + row + ']').removeClass("empty");
                    $('div[col="3"][row=' + row + ']').addClass(temp);

                    let temp2 = this.return_value_class($('div[col="1"][row=' + row + ']')); //temp contains a string
                    if (temp2 != "empty") {
                        $('div[col="1"][row=' + row + ']').removeClass("filled");
                        $('div[col="2"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="2"][row=' + row + ']').removeClass(temp);
                    $('div[col="2"][row=' + row + ']').addClass(temp2);

                    $('div[col="1"][row=' + row + ']').removeClass(temp2);
                    $('div[col="1"][row=' + row + ']').addClass("empty");
                }
                else if ((($('div[col="2"][row=' + row + ']').hasClass("empty")))) {
                    let temp = this.return_value_class($('div[col="1"][row=' + row + ']')); //temp contains a string (class of object)
                    if (temp != "empty") {
                        $('div[col="1"][row=' + row + ']').removeClass("filled");
                        $('div[col="2"][row=' + row + ']').addClass("filled");
                    }
                    $('div[col="2"][row=' + row + ']').removeClass("empty");
                    $('div[col="2"][row=' + row + ']').addClass(temp);

                    $('div[col="1"][row=' + row + ']').removeClass(temp);
                    $('div[col="1"][row=' + row + ']').addClass("empty");
                }
            }
        }
    }

    merge_up(){
        let filled_class = "";
        for (let col = 1; col <= 4; col++) {
            if ($('div[col=' + col + '][row="1"]').hasClass("empty") || $('div[col=' + col + '][row="2"]').hasClass("empty")) {
                continue;
            }
            else {
                let value1 = this.return_value_class($('div[col=' + col + '][row="1"]'));
                let value2 = this.return_value_class($('div[col=' + col + '][row="2"]'));
                let value3 = this.return_value_class($('div[col=' + col + '][row="3"]'));
                let value4 = this.return_value_class($('div[col=' + col + '][row="4"]'));

                if (value1 === value2 && value3 === value4) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col=' + col + '][row="1"]').removeClass(value1);
                    $('div[col=' + col + '][row="1"]').addClass(merged_value);
                    $('div[col=' + col + '][row="2"]').removeClass(value2);
                    $('div[col=' + col + '][row="2"]').removeClass("filled");
                    $('div[col=' + col + '][row="2"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="1"]'));
                    this.update_score(filled_class);

                    if (value3 === "empty") {
                        continue;
                    }
                    else {
                        merged_value = this.return_merged_class(value3);
                        $('div[col=' + col + '][row="3"]').removeClass(value3);
                        $('div[col=' + col + '][row="3"]').addClass(merged_value);
                        $('div[col=' + col + '][row="4"]').removeClass(value4);
                        $('div[col=' + col + '][row="4"]').removeClass("filled");
                        $('div[col=' + col + '][row="4"]').addClass("empty");
                        filled_class = this.return_filled_class($('div[col=' + col + '][row="3"]'));
                        this.update_score(filled_class);
                    }
                }
                else if (value1 === value2) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col=' + col + '][row="1"]').removeClass(value1);
                    $('div[col=' + col + '][row="1"]').addClass(merged_value);
                    $('div[col=' + col + '][row="2"]').removeClass(value2);
                    $('div[col=' + col + '][row="2"]').removeClass("filled");
                    $('div[col=' + col + '][row="2"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="1"]'));
                    this.update_score(filled_class);
                }
                else if (value2 === value3) {
                    let merged_value = this.return_merged_class(value2);
                    $('div[col=' + col + '][row="2"]').removeClass(value2);
                    $('div[col=' + col + '][row="2"]').addClass(merged_value);
                    $('div[col=' + col + '][row="3"]').removeClass(value3);
                    $('div[col=' + col + '][row="3"]').removeClass("filled");
                    $('div[col=' + col + '][row="3"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="2"]'));
                    this.update_score(filled_class);
                }
                else if (value3 === value4) {
                    let merged_value = this.return_merged_class(value3);
                    $('div[col=' + col + '][row="3"]').removeClass(value3);
                    $('div[col=' + col + '][row="3"]').addClass(merged_value);
                    $('div[col=' + col + '][row="4"]').removeClass(value4);
                    $('div[col=' + col + '][row="4"]').removeClass("filled");
                    $('div[col=' + col + '][row="4"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="3"]'));
                    this.update_score(filled_class);
                }
            }
        }
    }

    merge_down(){
        let filled_class = "";
        for (let col = 1; col <= 4; col++) {
            if ($('div[col=' + col + '][row="4"]').hasClass("empty") || $('div[col=' + col + '][row="3"]').hasClass("empty")) {
                continue;
            }
            else {
                let value1 = this.return_value_class($('div[col=' + col + '][row="4"]'));
                let value2 = this.return_value_class($('div[col=' + col + '][row="3"]'));
                let value3 = this.return_value_class($('div[col=' + col + '][row="2"]'));
                let value4 = this.return_value_class($('div[col=' + col + '][row="1"]'));

                if (value1 === value2 && value3 === value4) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col=' + col + '][row="4"]').removeClass(value1);
                    $('div[col=' + col + '][row="4"]').addClass(merged_value);
                    $('div[col=' + col + '][row="3"]').removeClass(value2);
                    $('div[col=' + col + '][row="3"]').removeClass("filled");
                    $('div[col=' + col + '][row="3"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="4"]'));
                    this.update_score(filled_class);
                    if (value3 === "empty") {
                        continue;
                    }
                    else {
                        merged_value = this.return_merged_class(value3);
                        $('div[col=' + col + '][row="2"]').removeClass(value3);
                        $('div[col=' + col + '][row="2"]').addClass(merged_value);
                        $('div[col=' + col + '][row="1"]').removeClass(value4);
                        $('div[col=' + col + '][row="1"]').removeClass("filled");
                        $('div[col=' + col + '][row="1"]').addClass("empty");
                        filled_class = this.return_filled_class($('div[col=' + col + '][row="2"]'));
                        this.update_score(filled_class);
                    }
                }
                else if (value1 === value2) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col=' + col + '][row="4"]').removeClass(value1);
                    $('div[col=' + col + '][row="4"]').addClass(merged_value);
                    $('div[col=' + col + '][row="3"]').removeClass(value2);
                    $('div[col=' + col + '][row="3"]').removeClass("filled");
                    $('div[col=' + col + '][row="3"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="4"]'));
                    this.update_score(filled_class);
                }
                else if (value2 === value3) {
                    let merged_value = this.return_merged_class(value2);
                    $('div[col=' + col + '][row="3"]').removeClass(value2);
                    $('div[col=' + col + '][row="3"]').addClass(merged_value);
                    $('div[col=' + col + '][row="2"]').removeClass(value3);
                    $('div[col=' + col + '][row="2"]').removeClass("filled");
                    $('div[col=' + col + '][row="2"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="3"]'));
                    this.update_score(filled_class);
                }
                else if (value3 === value4) {
                    let merged_value = this.return_merged_class(value3);
                    $('div[col=' + col + '][row="2"]').removeClass(value3);
                    $('div[col=' + col + '][row="2"]').addClass(merged_value);
                    $('div[col=' + col + '][row="1"]').removeClass(value4);
                    $('div[col=' + col + '][row="1"]').removeClass("filled");
                    $('div[col=' + col + '][row="1"]').addClass("empty");
                    filled_class = this.return_filled_class($('div[col=' + col + '][row="2"]'));
                    this.update_score(filled_class);
                }
            }
        }
    }

    merge_left(){
        let filled_class = "";
        for (let row = 1; row <= 4; row++) {
            if ($('div[col="1"][row=' + row + ']').hasClass("empty") || $('div[col="2"][row=' + row + ']').hasClass("empty")) {
                continue;
            }
            else {
                let value1 = this.return_value_class($('div[col="4"][row=' + row + ']'));
                let value2 = this.return_value_class($('div[col="3"][row=' + row + ']'));
                let value3 = this.return_value_class($('div[col="2"][row=' + row + ']'));
                let value4 = this.return_value_class($('div[col="1"][row=' + row + ']'));

                if (value1 === value2 && value3 === value4) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col="4"][row=' + row + ']').removeClass(value1);
                    $('div[col="4"][row=' + row + ']').addClass(merged_value);
                    $('div[col="3"][row=' + row + ']').removeClass(value2);
                    $('div[col="3"][row=' + row + ']').removeClass("filled");
                    $('div[col="3"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="4"][row=' + row + ']'));
                    this.update_score(filled_class);
                    if (value3 === "empty") {
                        continue;
                    }
                    else {
                        merged_value = this.return_merged_class(value3);
                        $('div[col="2"][row=' + row + ']').removeClass(value3);
                        $('div[col="2"][row=' + row + ']').addClass(merged_value);
                        $('div[col="1"][row=' + row + ']').removeClass(value4);
                        $('div[col="1"][row=' + row + ']').removeClass("filled");
                        $('div[col="1"][row=' + row + ']').addClass("empty");
                        filled_class = this.return_filled_class($('div[col="2"][row=' + row + ']'));
                        this.update_score(filled_class);
                    }
                }
                else if (value1 === value2) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col="4"][row=' + row + ']').removeClass(value1);
                    $('div[col="4"][row=' + row + ']').addClass(merged_value);
                    $('div[col="3"][row=' + row + ']').removeClass(value2);
                    $('div[col="3"][row=' + row + ']').removeClass("filled");
                    $('div[col="3"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="4"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
                else if (value2 === value3) {
                    let merged_value = this.return_merged_class(value2);
                    $('div[col="3"][row=' + row + ']').removeClass(value2);
                    $('div[col="3"][row=' + row + ']').addClass(merged_value);
                    $('div[col="2"][row=' + row + ']').removeClass(value3);
                    $('div[col="2"][row=' + row + ']').removeClass("filled");
                    $('div[col="2"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="3"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
                else if (value3 === value4) {
                    let merged_value = this.return_merged_class(value3);
                    $('div[col="2"][row=' + row + ']').removeClass(value3);
                    $('div[col="2"][row=' + row + ']').addClass(merged_value);
                    $('div[col="1"][row=' + row + ']').removeClass(value4);
                    $('div[col="1"][row=' + row + ']').removeClass("filled");
                    $('div[col="1"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="2"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
            }
        }
    }

    merge_right(){
        let filled_class = "";
        for (let row = 1; row <= 4; row++) {
            if ($('div[col="4"][row=' + row + ']').hasClass("empty") || $('div[col="3"][row=' + row + ']').hasClass("empty")) {
                continue;
            }
            else {
                let value1 = this.return_value_class($('div[col="1"][row=' + row + ']'));
                let value2 = this.return_value_class($('div[col="2"][row=' + row + ']'));
                let value3 = this.return_value_class($('div[col="3"][row=' + row + ']'));
                let value4 = this.return_value_class($('div[col="4"][row=' + row + ']'));

                if (value1 === value2 && value3 === value4) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col="1"][row=' + row + ']').removeClass(value1);
                    $('div[col="1"][row=' + row + ']').addClass(merged_value);
                    $('div[col="2"][row=' + row + ']').removeClass(value2);
                    $('div[col="2"][row=' + row + ']').removeClass("filled");
                    $('div[col="2"][row=' + row + ']').addClass("empty");
                filled_class = this.return_filled_class($('div[col="1"][row=' + row + ']'));
                    this.update_score(filled_class);
                    if (value3 === "empty") {
                        continue;
                    }
                    else {
                        merged_value = this.return_merged_class(value3);
                        $('div[col="3"][row=' + row + ']').removeClass(value3);
                        $('div[col="3"][row=' + row + ']').addClass(merged_value);
                        $('div[col="4"][row=' + row + ']').removeClass(value4);
                        $('div[col="4"][row=' + row + ']').removeClass("filled");
                        $('div[col="4"][row=' + row + ']').addClass("empty");
                        filled_class = this.return_filled_class($('div[col="3"][row=' + row + ']'));
                        this.update_score(filled_class);
                    }
                }
                else if (value1 === value2) {
                    let merged_value = this.return_merged_class(value1);
                    $('div[col="1"][row=' + row + ']').removeClass(value1);
                    $('div[col="1"][row=' + row + ']').addClass(merged_value);
                    $('div[col="2"][row=' + row + ']').removeClass(value2);
                    $('div[col="2"][row=' + row + ']').removeClass("filled");
                    $('div[col="2"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="1"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
                else if (value2 === value3) {
                    let merged_value = this.return_merged_class(value2);
                    $('div[col="2"][row=' + row + ']').removeClass(value2);
                    $('div[col="2"][row=' + row + ']').addClass(merged_value);
                    $('div[col="3"][row=' + row + ']').removeClass(value3);
                    $('div[col="3"][row=' + row + ']').removeClass("filled");
                    $('div[col="3"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="2"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
                else if (value3 === value4) {
                    let merged_value = this.return_merged_class(value3);
                    $('div[col="3"][row=' + row + ']').removeClass(value3);
                    $('div[col="3"][row=' + row + ']').addClass(merged_value);
                    $('div[col="4"][row=' + row + ']').removeClass(value4);
                    $('div[col="4"][row=' + row + ']').removeClass("filled");
                    $('div[col="4"][row=' + row + ']').addClass("empty");
                    filled_class = this.return_filled_class($('div[col="3"][row=' + row + ']'));
                    this.update_score(filled_class);
                }
            }
        }
    }

    /**
     * Both bool merge functions are used only in combination with empty_tiles_left()
     * to check if game is over.
     * If 2 nearby values are "empty" it will return true
     * @returns {boolean}
     */
    is_merge_vertical()
    {
        for (let col = 1; col <= 4; col++)
        {
            let value1 = this.return_value_class($('div[col=' + col + '][row="1"]'));
            let value2 = this.return_value_class($('div[col=' + col + '][row="2"]'));
            let value3 = this.return_value_class($('div[col=' + col + '][row="3"]'));
            let value4 = this.return_value_class($('div[col=' + col + '][row="4"]'));
            if (value1 === value2 || value2 === value3 || value3 === value4) {
                return true;
            }
        }
        return false;
    }

    is_merge_horizontal()
    {
        for (let row = 1; row <= 4; row++)
        {
            let value1 = this.return_value_class($('div[col="1"][row='+row+']'));
            let value2 = this.return_value_class($('div[col="2"][row='+row+']'));
            let value3 = this.return_value_class($('div[col="3"][row='+row+']'));
            let value4 = this.return_value_class($('div[col="4"][row='+row+']'));

            if (value1 === value2 || value2 === value3 || value3 === value4) {
                return true;
            }
        }
        return false;
    }
}
