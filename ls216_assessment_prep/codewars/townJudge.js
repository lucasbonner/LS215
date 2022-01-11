// // https://leetcode.com/problems/find-the-town-judge/
//
// /*
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
//
// If the town judge exists, then:
//
//     The town judge trusts nobody.
//     Everybody (except for the town judge) trusts the town judge.
//     There is exactly one person that satisfies properties 1 and 2.
//
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
//
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// */
//
// /*
// Example 1:
//
// Input: n = 2, trust = [[1,2]]
// Output: 2
//
// Example 2:
//
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
//
// Example 3:
//
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
/*
Instructions:
Given an integer(n) and an array, find the town judge and return 'the label' (element integer representing judge)
a judge
  -> trusts nobody
  -> everybody else trusts judge
trust -> trust[i] = [ai, bi]
      -> ai trusts bi
there is either ONE judge, or none, if none return -1

Examples:
Input: n = 2, trust = [[1,2]]
Output: 2
output being 2 means that 2 is "the label" of the town judge
trust[i] = [ai, bi]
trust[0] = [1, 2], where 1 is ai, and 2 is bi
1 trusts 2, 2 does not trust 1
return 2



Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
n = 3, we have three people 1, 2, and 3
[1, 3] and [2, 3]
1 trusts person 3
2 trusts person 3
3 trusts no one
3 is the judge

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
n = 3, we have three people 1, 2, 3
1 trusts 3
2 trusts 3
3 trusts 1
no town judge found, return -1

constraints for town judge:
  never first element
  always second element
return -1

n is the amount of people
could have array of totalPeople
  iterate thru given people array
    if any subarray element 0 is included in totalPeople
      splice it out

Input
3
[[1,2],[2,3]]
Output
3
Expected
-1
*/


function townJudge(n, people) {
  let totalPeople = [];
  let lovers = [];
  if (people.length === 0 && n === 1) {
      return 1
  } else if (people.length === 0) {
      return -1
  }

  for (let i = 1; i <= n; i++) {
    totalPeople.push(i);
  }
  people.forEach((subarray) => {
    if (totalPeople.includes(subarray[0])) {
      lovers.push(totalPeople.splice(totalPeople.indexOf(subarray[0]),1));
    }
  });
  let result = totalPeople.length > 0 ? totalPeople[0] : -1;
  lovers = lovers.flat();
  people.forEach((subarray) => {
    if (subarray[1] === result && lovers.includes(subarray[0])) {
      lovers.splice(lovers.indexOf(subarray[0]));
    }
  });
  if (lovers.length > 0) return -1;
  return lovers;
}

// console.log(townJudge(2, [[1,2]])); //2
// console.log(townJudge(3, [[1,3],[2,3]])); //3
// console.log(townJudge(3, [[1,3],[2,3],[3,1]])); //-1
console.log(townJudge(4, [[1,3],[1,4],[2,3]])); //-1