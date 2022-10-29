import { 
  home,
  universe,
  exploration,
  button
} from "./elements.js";

export default function Events(boldPage) {
  home.addEventListener('click', () => {
    boldPage.addBoldHome()
  })

  universe.addEventListener('click', () => {
    boldPage.addBoldUniverse()
  })

  exploration.addEventListener('click', () => {
    boldPage.addBoldExploration()
  })

  button.addEventListener('click', () => {
    boldPage.addBoldUniverse()
  })
}