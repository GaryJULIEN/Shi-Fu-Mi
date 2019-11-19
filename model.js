const model = (function(){
    let iconPlayer = '';
    let iconMachine = '';

    return{

        /**
         * return the icons selected {player : value, machine: value}
         */
        getIcons : ()=>{
            return {
                player  : iconPlayer,
                machine : iconMachine
            }
        },

        /**
         * set icon player
         * @argument icon is the icon selected by player
         */
        setIconPlayer : function(icon){
            iconPlayer = icon;
        },

        /**
         * set icon machine
         * @argument icon is the icon selected by machine
         */
        setIconMachine : function(icon){
            iconMachine = icon;
        }
    }
})();