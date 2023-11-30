const Heading = ({ text, tag, className = 'task' }) => {
  const Tag = tag || 'h2';
  return <Tag className={className}>{text}</Tag>;
};
export default Heading;
