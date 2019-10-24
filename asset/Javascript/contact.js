$("#submit").on("click", function() {
    var name=$("#name").val();
    var email=$("#email").val();
    var message=$("#message").val();

    console.log(name);
    console.log(email);
    console.log(message);
    //make contact.txt file to save imformation
    var fs=require('fs');

    fs.readFile('contact.txt','utf8',function(err,data){
        var content=data.split(', ');
        fs.appendFile('bank.txt',', '+name+"/n"+email+"/n"+message,function(err){
            if(err){
                console.log("something goes wrong!");
            }else{
                console.log("saved");
            }
        });
    });
});

