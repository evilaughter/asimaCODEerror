class Player {
    constructor (){
        this.index = null;
        this.distance = null;
        this.name = null;
    }

    getCount(){
    var playerCountref = database.ref('playerCount');
    playerCountref.on("value",(data)=>{
        playerCount = data.val();
    });
      }

      static getPlayerInfo () {
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        });
      }

updateCount (count){
    database.ref('/').update({
        playerCount:count
})
}
update(){
var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})

}
}