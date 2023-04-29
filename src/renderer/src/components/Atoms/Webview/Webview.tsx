import { ForwardedRef, forwardRef } from 'react'

interface IWebview {
  url: string
  width: number
  height: number
  [key: string]: unknown
}

const Webview = forwardRef(function Webview(
  { url, width, height, ...rest }: IWebview,
  ref: ForwardedRef<HTMLWebViewElement | null>
): JSX.Element {
  return <webview src={url} style={{ height, width }} ref={ref} {...rest} />
})

export default Webview
