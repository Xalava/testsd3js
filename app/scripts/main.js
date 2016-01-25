console.log('\'Allo \'Allo!');

d3.csv("data/food.csv", function(data) {
    console.log(data);

        if (error) {  //If error is not null, something went wrong.
          console.log(error);  //Log the error.
        } else {      //If no error, the file loaded correctly. Yay!
          console.log(data);   //Log the data.

      //Include other code to execute after successful file load here

       }

});