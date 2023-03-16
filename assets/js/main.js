/* #########################################
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
############################################ */

const wordUser = prompt('scrivi una parola e ti dirò se essa è palindroma')
const wordUserLength = wordUser.length

/* ##############
Ho trovato questa soluzione ma sinceramente non mi piace molto anche se sembra essere la miglior ma a livello logico è molto faticoso, almeno per me 
################# */

// creo una fuonzione che mi permetta di capire su una parola è palindorma
/* function palindrome(enterUserWord) {
    
    for(let i = 0; i < wordUserLength / 2; i++) // qui se ho capito bene divido per due la lunghezza della parola dato che se fosse palindroma è come se fosse uno specchio e ciò che trovo nella prima metà della parola lo dovrò trovare anche nella seconda metà della parola quindi risulta inutile fare tutta la lunghezza
        
        if (wordUser[i] !== wordUser[wordUserLength -1 -i]) // questa è la parte secondo me meno intuitiva dato che è a modi formula matematica, però data la sua lunghezza se gli sottraggo -1 (cosi non ho un valore undefinded) e sottrago anche la i ( quindi -i) fara un check dalle due estremità findo ad invertirsi
        // esempio 1 
        // parola: ANNA (lunghezza parola 4)
        //    -ANNA[0](=A) !== ANNA[4 -1 -0](=A) 
        //    -ANNA[1](=N) !== ANNA[4 -1 -1](=N) ....e cosi via
         {
            return alert(` la parola: "${wordUser}" non è palindorma`) // il return è per far si che il ciclo for non mi mandi in pagina 27 milioni di alert 
        } else {
           return alert(` la parola: "${wordUser}" è palindorma`)
        }
} */
// sono in cerca di un'altra soluzione :)

// Soluzione 2, decisamente migliore :)
function palindrome(enterUserWord) {

    /* // uso il metodo split per convertire una stringa ad un array di stringhe
    const fromStringToArray = enterUserWord.split('')
    console.log(fromStringToArray)
    // ora metodo reverse per invertire gli indici del mio array
    const reverseArray = fromStringToArray.reverse()
    console.log(reverseArray)
    // ora per unire tutti gli indici dell'array uso il metodo join
    const joinArray = reverseArray.join('')
    console.log(joinArray)  */

    // salvo tutto in una variabile :)
    const reversWord = enterUserWord.split('').reverse().join('')
    console.log(reversWord)
    if (reversWord === wordUser) {
        alert(`la parola ${wordUser} è palindroma`)
    } else {
        alert(`la parola ${wordUser} non è palindroma`)
    }
}

const checkWord = palindrome(wordUser) 


/* ###########################################
ESERCIZIO N.2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

############################################# */

/* for (let i = 0; i < 1; i++) {
    const userEvenOrOdd = prompt('scegli pari o dispari, scrivilo qui sotto')
    if (userEvenOrOdd.toLowerCase != 'pari' || userEvenOrOdd.toLowerCase != 'dispari') {
        i--
    }
} */

const userEvenOrOdd = prompt('scegli pari o dispari, scrivilo qui sotto')
const userNumber = Number(prompt('scegli un numero tra 1 e 5')) 

function randomNumberPC (min, max) {
    const numberPC = Math.floor(Math.random() * (max - min + 1) + min)
    return numberPC
}

const numberPC = randomNumberPC (1, 5)


function theWinneris () {
    
    const userSumPC = userNumber + numberPC
    if (userSumPC % 2 == 0) {
        if (userEvenOrOdd == 'pari') {
            alert('hai vinto')
        }
        alert ('hai perso')
    } else if ( userSumPC % 2 != 0) {
        if ( userEvenOrOdd == 'dispari') {
            alert('hai vinto')
        }
        alert('hai perso')
    }
}

theWinneris()