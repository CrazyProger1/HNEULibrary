interface Props {
  text: string;
}

const Note = ({ text }: Props) => {
  return <div className="text-xs text-red-500 ml-1 font-phil">*{text}</div>;
};

export default Note;
