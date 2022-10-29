import {
  home,
  universe, 
  exploration 
} from "./elements.js"

export function boldOnChangePage() {

  function addBoldHome (){
    home.classList.add('active')
    universe.classList.remove('active')
    exploration.classList.remove('active')
  }

  function addBoldUniverse (){
    home.classList.remove('active')
    universe.classList.add('active')
    exploration.classList.remove('active')
  }

  function addBoldExploration (){
    home.classList.remove('active')
    universe.classList.remove('active')
    exploration.classList.add('active')
  }

  return {
    addBoldHome,
    addBoldUniverse,
    addBoldExploration
  }

}