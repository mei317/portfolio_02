import $ from 'jquery'

export default class Test {
  constructor() {
    console.log('Test!!')
    $('.p-contentsContact__btn a').on("click" ,function(){
      $(this).css('background-color', 'red');
  });
    console.log($)
  }
}