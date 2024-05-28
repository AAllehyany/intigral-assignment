type RailButtonProps = {
  handler: () => void
}

export default function RailLeftButton({ handler }: Readonly<RailButtonProps>) {
  return (
    <button
      onClick={() => handler()}
      className="flex h-full w-16 items-center justify-center bg-black/60 text-white/60"
    >
      <svg
        width="8"
        height="17"
        viewBox="0 0 8 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path opacity="0.2" d="M8 16.5L6.99382e-07 8.5L8 0.5" fill="#F2F2F2" />
      </svg>
    </button>
  )
}
