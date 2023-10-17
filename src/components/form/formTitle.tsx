type Props = {
  titleAndContent: { title: string; content: string };
};

function FormTitle({ titleAndContent }: Props) {
  return (
    <div className="title-section">
      <h2>{titleAndContent.title}</h2>
      <span>{titleAndContent.content}</span>
    </div>
  );
}

export default FormTitle;
