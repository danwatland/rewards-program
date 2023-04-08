# Rewards Program

### Running locally
1. `npm install`
2. `npm run dev`

### Notes
- The call to fetch data is all simulated. I created a promise that resolves after three seconds in order to show how I'd handle the loading status.
- Styling is very minimal here - I wanted to show some understanding of CSS as well as being very deliberate with semantic HTML. I'd generally go with a styling library (i.e. Material UI) if writing this for production rather than to demonstrate my knowledge.
- I added a couple tests. It's been a while since I've wrote straight Javascript, so I forgot that there's a decent amount of config you have to do to run Jest with ECMAScript modules.