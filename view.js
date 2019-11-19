const view = (function(){
    let domStrings = {
        iconsContainer : '#icons-container',
        button : '#button',
        buttonBG : '#button div',
        colorpierre : 'color-pierre',
        colorpapier : 'color-papier',
        colorciseaux : 'color-ciseaux',
        timer : '#timer',
        iconPlayer : '#icon-player',
        iconMachine : '#icon-machine',
        winner : '#winner',
        result : '#result'
    }

    let iconsArray = [
        document.querySelector(`#pierre`),
        document.querySelector(`#papier`),
        document.querySelector(`#ciseaux`)
    ]

    return {
        /**
         * return an objet wich contains the HTML elements's CSS selectors 
         */
        getDomStrings : ()=>{
            return domStrings;
        },

        /**
         * Hide element if it is showed or show it if it is hidden
         * @argument elements is an array of HTML elements
         */
        hideOrShowElement : (elements)=>{
            elements.forEach(element => {
                element.classList.toggle('hidden')
            });
        },

        /**
         * @argument element get BG moved
         */
        moveBg : (element)=>{
            element.classList.toggle('bg-move')
        },

        /**
         * Hightlighting the selected icon and remove hightlight on other icons
         * @argument icon is the selected icon
         */
        lighterIcon : (icon)=>{
            let colorClass = domStrings[`color${icon}`];
            let selectedIcon = document.querySelector(`#${icon}`);

            iconsArray.forEach(icon=>{
                let classe = `color-${icon.id}`;
                if(icon.classList.contains(classe)){
                    icon.classList.toggle(classe);
                }
            })
            selectedIcon.classList.toggle(colorClass);
        },

        displayCountDown : (time)=>{
            let timer = document.querySelector('#timer');
            timer.textContent = time;
            setInterval(() => {
                time--;
                timer.textContent = time;
            }, 1000);
        },

        displayVersus : (icons)=>{
            let iconPlayer = document.querySelector(domStrings.iconPlayer);
            let iconMachine = document.querySelector(domStrings.iconMachine);

            iconPlayer.classList.add(icons.player);
            iconMachine.classList.add(icons.machine);
            
        },

        displayWinner : (winner)=>{
            let winnerBox = document.querySelector(domStrings.winner);
            let result = winner != "égalité" ? `${winner} a gagné !` : "Match nul !"
            winnerBox.textContent = result;
        }
    }
})();