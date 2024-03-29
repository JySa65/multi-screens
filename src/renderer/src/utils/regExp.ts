export default {
  addressUrl: (text: string): boolean => {
    const regex =
      /(https?:\/\/(?:www?\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    const re = new RegExp(regex)
    return re.test(text)
  },
  localAddressUrl: (text: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^((http):\/\/)?(localhost|127(?:\.\d{1,3}){0,2})(?::\d{1,5})?(\/[\w\/]*)?$/
    const re = new RegExp(regex)
    return re.test(text)
  }
}
