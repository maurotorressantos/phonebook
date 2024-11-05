const Content = ({ content }) => {
  return (
    <>
      <ul>
        {content &&
          content.map((contact, index) => (
            <li key={`contact-${index}`}>{contact.name}</li>
          ))}
      </ul>
    </>
  );
};

export default Content;
