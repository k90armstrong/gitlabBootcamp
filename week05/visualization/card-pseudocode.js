// I give you an array of 51 cards.Each card contains two properties: the suit, and the title (a string of either a number or a ranking: king, ace, so on).

//     Fifty - two cards form a deck.But I gave you 51. One is missing! How do you find it?

//         Try to come up with the most efficient steps to solve this.

//             Hint: Using a for loop against an array of values is not the most efficient solution--what if the cards aren't sorted?
//

// step 1: sort the cards into arrays of suits
// step 2: check the lengths of the suits and if it is less than 13, we know we need to check that one
// step 3: go through the suit that is missing one and find the missing one.