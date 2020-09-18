require.config({
    paths:{
        "ajax":"./ajax",
        "init":"./init"
    }
});

require(["init"],function(init){
    init.init();
});