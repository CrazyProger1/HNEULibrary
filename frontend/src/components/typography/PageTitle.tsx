interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => (
  <div className="flex justify-center font-phil text-4xl mt-10">{title}</div>
);

export default PageTitle;
