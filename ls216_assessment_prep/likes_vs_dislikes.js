/*
YouTube currently displays a like and a dislike button,
allowing you to express your opinions about particular
content. It's set up in such a way that you cannot
like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

    Pressing a button, which is already active, will undo your press.
    If you press the like button after pressing the dislike button,
    the like button overwrites the previous "dislike" state.
    The same is true for the other way round.

Create a function that takes an array of button
 inputs and returns the final state.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
create a function that takes an array of button inputs and returns the final state
--------------------------PROBLEM----------------------------------------

Questions:

Input:arr of strings('Like' and 'Dislike')

Output:string ('Like', 'Dislike', 'Nothing')

---------------------------RULES-----------------------------------------
Explicit:
input decides what button you have pressed
if button is double clicked, then it is nothing
if button is opposite, for ex. current is 'like', and we get 'dislike'
  state will be changed to dislike

Implicit:

--------------------------EXAMPLES---------------------------------------
console.log(likeOrDislike(["Dislike"])); // ➞ "Dislike"
ogState = 'Nothing'
iterate thru arr, hit 'Dislike'
  ogState = 'Dislike'
return 'Dislike'

console.log(likeOrDislike(["Like", "Like"])); // ➞ "Nothing"
ogState = 'Nothing'
iterate thru arr, hit 'Like'
  ogState = 'Like'
hit 'like', ogState = 'Like'
  ogState = 'Nothing'
return 'Nothing'

console.log(likeOrDislike(["Dislike", "Like"])); // ➞ "Like"
ogState = 'Nothing'
hit 'Dislike'
  ogState = 'Dislike'
hit 'Like'
  ogState ='Like'
return 'Like'

console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // ➞ "Nothing"
ogState = 'Nothing'
hit 'like'
  ogState = 'Like'
hit 'dislike'
  ogState = 'Dislike'
hit 'dislike', ogState also 'dislike'
  ogState ='nothing'
return 'nothing'


----------------------------ALGO----------------------------------------
have variable state set to string 'Nothing'

iterate thru given arr
  if state !== current elem in arr
    state = current elem
  else if state equals current elem
    state = 'Nothing'
return state at end
*/

function likeOrDislike(arr) {
  return arr.reduce((state, elem) => {
    if (state !== elem) {
      state = elem;
    } else if (state === elem) {
      state = 'Nothing';
    }
    return state;
  }, 'Nothing');
}

console.log(likeOrDislike(["Dislike"])); // ➞ "Dislike"

console.log(likeOrDislike(["Like", "Like"])); // ➞ "Nothing"

console.log(likeOrDislike(["Dislike", "Like"])); // ➞ "Like"

console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // ➞ "Nothing"