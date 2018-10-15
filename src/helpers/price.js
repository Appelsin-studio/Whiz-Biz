export default {
  format: (price) => {
    let str = price + '',
      res = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')

    return res.replace(/\./, ',')
  }
}
