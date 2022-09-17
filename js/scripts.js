let numberOfFaces = 5;
        const theLeftSide = document.getElementById('leftSide');
        const theRightSide = document.getElementById('rightSide');
        let numTries = 0;

        function generateFaces() {

            for (let i = 0; i < numberOfFaces; i++) {
                const face = document.createElement('img');
                face.src = '../images/smile.png';
                const randomTop = Math.floor(Math.random() * 400) + 1;
                const randomLeft = Math.floor(Math.random() * 400) + 1;
                face.style.top = randomTop + 'px';
                face.style.left = randomLeft + 'px';
                theLeftSide.appendChild(face);
            }

            /*theLeftSide.lastChild.style.border = '1px solid red';
            theLeftSide.lastChild.style.backgroundColor = 'aqua';*/

            const leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);

            theLeftSide.lastChild.addEventListener('click', nextLevel);
            document.body.addEventListener('click', gameOver);
        }

        function nextLevel() {
            event.stopPropagation();
            numberOfFaces += 5;
            numTries += 1;

            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            generateFaces();
        }

        function gameOver() {
            alert('Game Over! You made it ' + numTries + ' rounds! Hit OK to try again!') ? "" : location.reload();
            document.body.removeEventListener(gameOver);
            theLeftSide.lastChild.removeEventListener(nextLevel);
        }
