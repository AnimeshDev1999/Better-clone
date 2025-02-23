export default function Steps() {
  return (
    <div className="flex flex-col items-center gap-4 py-4 mt-20 bg-[#F0F7F1] max-w-[550px] mx-auto">
      <p>After a few questions, you&#39;ll unlock:</p>
      {/* //////////// line 1 //////////// */}
      <div className="flex">
        <svg
          fill="none"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="percentage-outlined-icon">Percentage Outlined</title>
          <path
            clipRule="evenodd"
            d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z"
            fill="#017848"
            fillRule="evenodd"
          ></path>
        </svg>
        <p>Custom mortgage rates</p>
      </div>
      {/* //////////// line 2 //////////// */}
      <div className="flex">
        <div className="h-5 w-5">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1xbrwhv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MonetizationOnOutlinedIcon"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42"
              fill="#017848"
            ></path>
          </svg>
        </div>
        <p>Exclusive offers</p>
      </div>
      {/* //////////// line 3 //////////// */}
      <div className="flex">
        <div className="h-5 w-5">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1xbrwhv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="PhoneIphoneOutlinedIcon"
          >
            <path
              d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z"
              fill="#017848"
            ></path>
          </svg>
        </div>
        <p>A personalized dashboard</p>
      </div>
    </div>
  );
}
