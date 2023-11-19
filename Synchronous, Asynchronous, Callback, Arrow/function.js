function makeFile(callback){
    console.log("File is Creating...")
    callback()
}

makeFile(function(){
    console.log("File creating was start...")
})