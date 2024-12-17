function tellStory(elements) {
    return `This is ${elements[0]}. ${elements[0]} is a nice person. Today they are ${elements[1]}. They are ${elements[2]} all day. The end.`;
}
let storyElements = [];
storyElements.push(prompt("Enter name: "));
storyElements.push(prompt("Enter mood: "));
storyElements.push(prompt("Enter activity: "));

console.log(tellStory(storyElements));