interface Props {
  title: string;
}

const BookTitle = ({ title }: Props) => {
  return (
    <div className="text-2xl font-bold font-phil tracking-tight text-gray-900 dark:text-white">
      {title}
    </div>
  );
};

export default BookTitle;
