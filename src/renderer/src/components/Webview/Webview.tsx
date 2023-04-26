interface IWebview {
  url: string
  width: number
  height: number
}

const Webview = ({ url, width, height }: IWebview): JSX.Element => {
  return <webview src={url} style={{ height, width }} />
}

export default Webview
