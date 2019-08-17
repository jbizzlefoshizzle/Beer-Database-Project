d3.csv("../data/csv/brewery_category_breakdown.csv", function(data) {
    console.log(data)

    function csvJSON(data){

        var lines=data.split("\n");
      
        var result = [];
      
        var headers=lines[0].split(",");
      
        for(var i=1;i<lines.length;i++){
      
            var obj = {};
            var currentline=lines[i].split(",");
      
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
      
        }
      
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
      }
})