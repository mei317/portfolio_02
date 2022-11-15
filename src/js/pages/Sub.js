import $ from 'jquery'

export default class Sub {
  constructor() {
    console.log('Sub!!')
    console.log($)

    const cursor = $(".u-cursor");
    $(document).on("mousemove",(e) => {
      const x = e.clientX
      const y = e.clientY

      cursor.css({
        "opacity": "1",
        "top": `${y}` + "px",
        "left": `${x}` + "px"
      })
    })
  }
}