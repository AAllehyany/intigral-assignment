function Star({ highlighted }: Readonly<{ highlighted: boolean }>) {
  return (
    <span className={`${highlighted ? 'text-amber-500' : 'text-white/20'}`}>
      ★
    </span>
  )
}

export default function StarRating({ rating }: Readonly<{ rating: number }>) {
  return (
    <ul className="flex items-center gap-px">
      {[1, 2, 3, 4, 5].map((value) => (
        <li key={value}>
          <Star highlighted={value <= rating} />
        </li>
      ))}
    </ul>
  )
}
