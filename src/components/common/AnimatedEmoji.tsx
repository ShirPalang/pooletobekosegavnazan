type EmojiType = {
  src: string
  title: string
}

const AnimatedEmoji = ({src , title}: EmojiType) => {
  return (
    <img src={src} alt={title} className="w-4"/>
  )
}

export default AnimatedEmoji