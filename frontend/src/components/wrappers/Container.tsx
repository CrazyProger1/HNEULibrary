interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-5/6">{children}</div>;
};

export default Container;
