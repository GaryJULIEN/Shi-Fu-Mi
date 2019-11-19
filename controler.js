const controler = (function(model, view){

    let DOM = view.getDomStrings();
    let button = document.querySelector(DOM.button);
    let iconsBox = document.querySelector(DOM.iconsContainer);
    let timer = document.querySelector(DOM.timer);
    let buttonBG = document.querySelector(DOM.buttonBG);
    let result = document.querySelector(DOM.result);

    // let test = document.querySelector('section')


    /**
     * return selected icon by player
     */
    let getSelectedIcon = function(target){
        return target.id;
    }

    /**
     * Makes machine choose an icon
     */
    let machinePlay = function(){
        let icons = ['pierre', 'papier', 'ciseaux']
        let random = Math.floor(Math.random()*2);
        let choice = icons[random]
        model.setIconMachine(choice)
    }

    /**
     * Return the winner
     */
    let getWinner = function(){
        let result = "";
        let iconPlayer = model.getIcons().player;
        let iconMachine = model.getIcons().machine;

        if(iconPlayer === "pierre"){
            if(iconMachine === "pierre"){
                result = "égalité";
            }
            else if(iconMachine === "papier"){
                result = "Machine";
            }
            else {
                result = "Player";
            }
        }
        else if (iconPlayer === "papier"){
            if(iconMachine === "pierre"){
                result = "Player";
            }
            else if(iconMachine === "papier"){
                result = "égalité";
            }
            else{
                result = "Machine";
            }
        }
        else if(iconPlayer === "ciseaux"){
            if(iconMachine === "pierre"){
                result = "Machine";
            }
            else if(iconMachine === "papier"){
                result = "Player";
            }
            else{
                result = "égalité";
            }
        }
        else{
            result = "Machine"
        }

        return result;
    }

    return{

        /**
         * init controller (eventListeners...)
         */
        init : ()=>{

            /**
             * Launch game
             */
            button.addEventListener('click', ()=>{
                let elements = [button, iconsBox, timer];
                view.hideOrShowElement(elements)
                view.displayCountDown(3);
                setTimeout(()=>{
                    view.hideOrShowElement([iconsBox, timer]);
                    machinePlay();
                    let icons = model.getIcons();                    
                    let winner = getWinner();
                    view.displayVersus(icons)
                    view.hideOrShowElement([result])
                    view.displayWinner(winner)
                    console.log(`Player a choisi ${model.getIcons().player}, \nMachine a choisi ${model.getIcons().machine}, \nLe gagnant est ${winner}`)
                }, 3000)

                // document.querySelector('body').innerHTML = test.innerHTML
            })

            /**
             * Effect button hover
             */
            button.addEventListener('mouseenter', ()=>{
                view.moveBg(buttonBG)
            })

            /**
             * Effect button mouse leave
             */
            button.addEventListener('mouseleave', ()=>{
                view.moveBg(buttonBG)
            })

            /**
             * Choose an icon
             */
            iconsBox.addEventListener('click', (e)=>{
                model.setIconPlayer(getSelectedIcon(e.target))
                let icon = model.getIcons().player;
                console.log(model.getIcons().player)         
                view.lighterIcon(icon)
            })
            
        }
    }

})(model, view);

controler.init();
