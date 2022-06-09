let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

let promise = await fetch(url)


let commits = await promise.json()

console.log(commits[0].author.login)

export default () => {
}