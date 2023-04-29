const BrowserSearch = (props: Icons): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      width: props.size,
      height: props.size,
      // @ts-ignore noo
      enableBackground: 'new 0 0 122.88 100.59'
    }}
    viewBox="0 0 122.88 100.59"
    {...props}
  >
    <path d="M39.26 87.01a98.941 98.941 0 0 1-7.48-7.13c-2.54-2.7-4.76-5.42-6.67-8.16H13.69c.42.54.85 1.06 1.29 1.58.65.76 1.34 1.49 2.05 2.21l.05.05c.93.93 1.89 1.8 2.89 2.63 1.01.83 2.06 1.62 3.16 2.35 1.09.73 2.22 1.42 3.41 2.05 1.18.64 2.4 1.23 3.68 1.78l.12.06c1.22.52 2.46.97 3.73 1.36 1.27.39 2.57.72 3.91.99.45.08.88.16 1.28.23zm46.43-53.67a29.387 29.387 0 0 1 20.81 8.62 29.387 29.387 0 0 1 8.62 20.81c0 2.92-.43 5.74-1.22 8.41-.77 2.58-1.88 5.01-3.28 7.24l12.08 13.16c.26.28.24.72-.04.98l-8.58 7.84c-.28.26-.72.24-.98-.04L101.5 87.6a29.192 29.192 0 0 1-7.28 3.35c-2.7.82-5.56 1.26-8.52 1.26a29.387 29.387 0 0 1-20.81-8.62l-.04-.04a29.32 29.32 0 0 1-6.35-9.52c-1.44-3.47-2.23-7.27-2.23-11.25s.79-7.78 2.23-11.25c1.49-3.61 3.68-6.85 6.39-9.56 2.71-2.71 5.95-4.9 9.56-6.39 3.46-1.45 7.26-2.24 11.24-2.24zm17.53 11.83c-2.28-2.27-5-4.11-8.02-5.36-2.92-1.21-6.13-1.88-9.5-1.88s-6.58.67-9.5 1.88c-3.04 1.26-5.77 3.1-8.06 5.39a24.802 24.802 0 0 0-5.39 8.06 24.764 24.764 0 0 0-1.88 9.5c0 3.37.67 6.58 1.88 9.5 1.26 3.04 3.1 5.77 5.39 8.06 2.29 2.29 5.03 4.14 8.06 5.39 2.92 1.21 6.13 1.88 9.5 1.88s6.58-.67 9.5-1.88c3.04-1.26 5.77-3.1 8.06-5.39 2.29-2.29 4.14-5.03 5.39-8.06 1.21-2.93 1.88-6.13 1.88-9.5s-.67-6.58-1.88-9.5l-.01-.04c-1.26-3.02-3.1-5.74-5.38-8.03l-.04-.02zM10.37 66.71h11.62c-1.59-2.89-2.83-5.81-3.72-8.75-.91-3.03-1.45-6.08-1.6-9.16H5.08c.05.9.13 1.79.24 2.68.13 1.05.29 2.09.5 3.12.27 1.35.6 2.67 1 3.96.39 1.27.85 2.52 1.38 3.75l.03.07c.34.79.7 1.57 1.08 2.33.34.69.69 1.35 1.06 2zM5.08 43.79h11.68c.26-3.02.89-6.05 1.9-9.08.97-2.93 2.29-5.88 3.97-8.83H10.37c-.37.65-.72 1.31-1.06 1.99-.38.77-.74 1.55-1.09 2.35l-.05.1c-.52 1.22-.97 2.47-1.37 3.75a40.012 40.012 0 0 0-1.49 7.04c-.1.89-.18 1.78-.23 2.68zm8.62-22.93h12.11c1.89-2.7 4.07-5.4 6.53-8.1l.03-.03c2.19-2.4 4.62-4.81 7.28-7.21l-.04.01c-.52.08-1.06.18-1.62.29-1.35.27-2.67.6-3.96 1-1.27.39-2.53.85-3.76 1.38l-.05.02c-1.27.55-2.5 1.14-3.68 1.78a42.55 42.55 0 0 0-3.4 2.05c-1.1.73-2.15 1.52-3.16 2.35-1.01.83-1.98 1.71-2.91 2.65l-.02.02c-.72.72-1.41 1.46-2.06 2.21-.45.52-.88 1.05-1.29 1.58zM52.95 5.52c2.67 2.42 5.11 4.83 7.3 7.24 2.47 2.7 4.65 5.4 6.54 8.1H78.9c-.42-.54-.85-1.06-1.29-1.57-.66-.76-1.35-1.51-2.07-2.23l-.04-.04c-.92-.93-1.89-1.8-2.89-2.62-1.01-.83-2.06-1.62-3.16-2.35-1.08-.73-2.22-1.41-3.4-2.05-1.18-.64-2.41-1.23-3.68-1.78l-.1-.05c-1.22-.52-2.48-.97-3.75-1.37-1.27-.39-2.57-.72-3.9-.99l-.04-.01c-.52-.1-1.05-.2-1.57-.28h-.06zM37 .9c1.49-.3 3.02-.52 4.58-.68C43.15.08 44.72 0 46.3 0c1.58 0 3.15.08 4.71.23a45.494 45.494 0 0 1 8.97 1.79c1.44.44 2.86.96 4.25 1.55l.13.05c1.4.6 2.76 1.26 4.08 1.97l.03.02c1.3.71 2.56 1.47 3.78 2.29 1.23.82 2.42 1.71 3.56 2.65 1.14.94 2.23 1.93 3.28 2.98 1.04 1.04 2.04 2.13 2.97 3.27.94 1.14 1.82 2.33 2.65 3.56.67 1 1.31 2.03 1.91 3.09-1.36-.14-2.74-.22-4.14-.22-6.26 0-12.18 1.48-17.42 4.11-.29-.49-.59-.97-.9-1.46H48.8v16.7a38.453 38.453 0 0 0-5.01 15.06V48.8H21.67c.17 2.95.74 5.89 1.73 8.82 1.02 3.04 2.48 6.07 4.38 9.09h16v-.04a38.78 38.78 0 0 0 5.01 15.06l1.04 1.68c1.95 2.98 4.29 5.68 6.95 8.01a45.07 45.07 0 0 1-5.79.94c-1.56.15-3.13.23-4.71.23s-3.15-.08-4.71-.23a45.07 45.07 0 0 1-4.58-.68c-1.47-.29-2.94-.67-4.38-1.11-1.44-.44-2.85-.96-4.26-1.56l-.12-.05c-1.4-.6-2.75-1.26-4.06-1.97-1.31-.71-2.58-1.48-3.82-2.31-1.23-.82-2.42-1.71-3.56-2.65-1.14-.94-2.23-1.93-3.27-2.97a43.783 43.783 0 0 1-2.97-3.27 46.269 46.269 0 0 1-4.96-7.38c-.71-1.31-1.37-2.67-1.97-4.06l-.02-.06c-.59-1.4-1.12-2.82-1.57-4.26-.45-1.46-.83-2.94-1.13-4.44C.6 54.09.38 52.56.23 51 .08 49.44 0 47.87 0 46.3c0-1.58.08-3.15.23-4.71C.38 40.03.6 38.5.9 37c.3-1.47.67-2.94 1.11-4.38.44-1.43.96-2.85 1.56-4.25l.05-.13c.6-1.4 1.26-2.75 1.97-4.06a46.269 46.269 0 0 1 4.96-7.38c.94-1.14 1.93-2.23 2.97-3.27a45.323 45.323 0 0 1 6.83-5.62c1.23-.82 2.5-1.59 3.81-2.31a52.64 52.64 0 0 1 4.07-1.98l.07-.02c1.4-.59 2.82-1.12 4.27-1.56C34.03 1.58 35.51 1.2 37 .9zm11.8 7.61v12.35h11.77a83.62 83.62 0 0 0-5.29-6.1c-1.97-2.07-4.13-4.15-6.48-6.25zm-5.01 75.78V71.73H31.33c1.64 2.07 3.48 4.15 5.53 6.22l.02.03c2.1 2.11 4.4 4.22 6.91 6.31zm0-40.5V25.88H28.46c-1.96 3.08-3.5 6.14-4.62 9.18-1.08 2.93-1.76 5.84-2.05 8.73h22zm0-22.93V8.51c-2.35 2.09-4.51 4.18-6.49 6.25a83.62 83.62 0 0 0-5.29 6.1h11.78z" />
  </svg>
)
export default BrowserSearch
