# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon 

### Screenshot

![](/design/Screenshot%202022-04-24%20at%2020-47-52%20Frontend%20Mentor%20Advice%20generator%20app.jpg)

### Links

- Solution URL: [Frontend Report](https://www.frontendmentor.io/solutions/simple-fetch-with-js-r1BF3_mBq)
- Live Site URL: [Vercel app](https://advices-fmentor.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

I practice how to fetch simple data and catch some error if is the case. 

```js
try {
    let data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
```  

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@EdwinCacuango](https://www.frontendmentor.io/profile/EdwinCacuango)
- Twitter - [@edwincacuango](https://www.twitter.com/edwincacuango)
