import css from './FriensListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={`${status} ${css.status}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
